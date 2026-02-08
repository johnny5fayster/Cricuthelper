#!/usr/bin/env npx ts-node

/**
 * CricutHelper Link Audit System
 * 
 * Checks all external links, identifies broken ones, researches fixes,
 * and generates a report with repair recommendations.
 * 
 * Run manually: npx ts-node scripts/link-audit.ts
 * Or via cron job for automated weekly audits
 */

import * as fs from 'fs';
import * as path from 'path';

interface LinkCheck {
  url: string;
  source: string;
  type: 'amazon' | 'youtube' | 'website' | 'social';
  status: 'ok' | 'broken' | 'redirect';
  httpCode?: number;
  error?: string;
  suggestedFix?: string;
  productName?: string;
}

interface AuditReport {
  timestamp: string;
  totalLinks: number;
  brokenLinks: number;
  results: LinkCheck[];
  repairs: RepairAction[];
}

interface RepairAction {
  source: string;
  oldUrl: string;
  newUrl: string;
  reason: string;
  verified: boolean;
}

// Extract all links from source files
function extractLinks(): LinkCheck[] {
  const links: LinkCheck[] = [];
  const srcDir = path.join(__dirname, '..', 'src');
  
  // Shop page - Amazon links
  const shopPath = path.join(srcDir, 'app', 'shop', 'page.tsx');
  if (fs.existsSync(shopPath)) {
    const shopContent = fs.readFileSync(shopPath, 'utf-8');
    const asinMatches = shopContent.matchAll(/asin:\s*"([^"]+)"/g);
    const titleMatches = [...shopContent.matchAll(/title:\s*"([^"]+)"/g)];
    let i = 0;
    for (const match of asinMatches) {
      links.push({
        url: `https://www.amazon.com/dp/${match[1]}`,
        source: 'shop/page.tsx',
        type: 'amazon',
        status: 'ok',
        productName: titleMatches[i]?.[1] || 'Unknown Product'
      });
      i++;
    }
  }
  
  // Creators page - Social/website links
  const creatorsPath = path.join(srcDir, 'app', 'creators', 'page.tsx');
  if (fs.existsSync(creatorsPath)) {
    const creatorsContent = fs.readFileSync(creatorsPath, 'utf-8');
    const urlMatches = creatorsContent.matchAll(/(youtube|website|instagram|pinterest):\s*"([^"]+)"/g);
    for (const match of urlMatches) {
      const urlType = match[1] as 'youtube' | 'website' | 'social';
      links.push({
        url: match[2],
        source: 'creators/page.tsx',
        type: urlType === 'youtube' ? 'youtube' : urlType === 'website' ? 'website' : 'social',
        status: 'ok'
      });
    }
  }
  
  // Materials page - Amazon links
  const materialsPath = path.join(srcDir, 'data', 'materials.ts');
  if (fs.existsSync(materialsPath)) {
    const materialsContent = fs.readFileSync(materialsPath, 'utf-8');
    const asinMatches = materialsContent.matchAll(/amazonAsin:\s*"([^"]+)"/g);
    for (const match of asinMatches) {
      links.push({
        url: `https://www.amazon.com/dp/${match[1]}`,
        source: 'data/materials.ts',
        type: 'amazon',
        status: 'ok'
      });
    }
  }
  
  return links;
}

// Check if a URL is accessible
async function checkUrl(url: string): Promise<{ ok: boolean; code: number; error?: string }> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);
    
    const response = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    });
    
    clearTimeout(timeout);
    
    // For Amazon, also check if it's a "dog page" (404 with 200 status)
    if (url.includes('amazon.com') && response.ok) {
      const getResponse = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        }
      });
      const text = await getResponse.text();
      if (text.includes("couldn't find") || text.includes('Page Not Found') || text.includes('looking for something')) {
        return { ok: false, code: 404, error: 'Amazon product not found (dog page)' };
      }
    }
    
    return { ok: response.ok, code: response.status };
  } catch (err: any) {
    return { ok: false, code: 0, error: err.message };
  }
}

// Search for replacement Amazon ASIN
async function findReplacementAsin(productName: string): Promise<string | null> {
  // This would integrate with Amazon Product API or web search
  // For now, return null - manual research needed
  console.log(`  → Research needed for: ${productName}`);
  return null;
}

// Search for updated creator URL
async function findUpdatedUrl(oldUrl: string, type: string): Promise<string | null> {
  // This would integrate with web search API
  // For now, return null - manual research needed
  console.log(`  → Research needed for: ${oldUrl}`);
  return null;
}

// Main audit function
async function runAudit(): Promise<AuditReport> {
  console.log('🔍 CricutHelper Link Audit Starting...\n');
  
  const links = extractLinks();
  console.log(`Found ${links.length} links to check\n`);
  
  const results: LinkCheck[] = [];
  const repairs: RepairAction[] = [];
  
  for (const link of links) {
    process.stdout.write(`Checking ${link.url.substring(0, 60)}... `);
    
    const check = await checkUrl(link.url);
    link.httpCode = check.code;
    
    if (check.ok) {
      link.status = 'ok';
      console.log('✅');
    } else {
      link.status = 'broken';
      link.error = check.error || `HTTP ${check.code}`;
      console.log(`❌ (${link.error})`);
      
      // Research fix based on link type
      if (link.type === 'amazon' && link.productName) {
        const newAsin = await findReplacementAsin(link.productName);
        if (newAsin) {
          link.suggestedFix = `https://www.amazon.com/dp/${newAsin}`;
          repairs.push({
            source: link.source,
            oldUrl: link.url,
            newUrl: link.suggestedFix,
            reason: 'ASIN no longer valid',
            verified: false
          });
        }
      } else if (link.type === 'youtube' || link.type === 'website') {
        const newUrl = await findUpdatedUrl(link.url, link.type);
        if (newUrl) {
          link.suggestedFix = newUrl;
          repairs.push({
            source: link.source,
            oldUrl: link.url,
            newUrl: newUrl,
            reason: 'URL changed or moved',
            verified: false
          });
        }
      }
    }
    
    results.push(link);
    
    // Rate limiting
    await new Promise(r => setTimeout(r, 500));
  }
  
  const report: AuditReport = {
    timestamp: new Date().toISOString(),
    totalLinks: links.length,
    brokenLinks: results.filter(r => r.status === 'broken').length,
    results,
    repairs
  };
  
  return report;
}

// Generate report summary
function generateSummary(report: AuditReport): string {
  const broken = report.results.filter(r => r.status === 'broken');
  
  let summary = `
# CricutHelper Link Audit Report
**Date:** ${report.timestamp}
**Total Links Checked:** ${report.totalLinks}
**Broken Links Found:** ${report.brokenLinks}

`;
  
  if (broken.length === 0) {
    summary += '## ✅ All Links Healthy!\n\nNo broken links detected.\n';
  } else {
    summary += '## ❌ Broken Links\n\n';
    
    for (const link of broken) {
      summary += `### ${link.productName || link.url}\n`;
      summary += `- **Source:** \`${link.source}\`\n`;
      summary += `- **URL:** ${link.url}\n`;
      summary += `- **Error:** ${link.error}\n`;
      if (link.suggestedFix) {
        summary += `- **Suggested Fix:** ${link.suggestedFix}\n`;
      } else {
        summary += `- **Action Required:** Manual research needed\n`;
      }
      summary += '\n';
    }
  }
  
  if (report.repairs.length > 0) {
    summary += '## 🔧 Proposed Repairs\n\n';
    for (const repair of report.repairs) {
      summary += `- \`${repair.source}\`: ${repair.oldUrl} → ${repair.newUrl}\n`;
    }
  }
  
  return summary;
}

// Run the audit
async function main() {
  try {
    const report = await runAudit();
    
    // Save full report as JSON
    const reportsDir = path.join(__dirname, '..', 'reports');
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    const jsonPath = path.join(reportsDir, `link-audit-${Date.now()}.json`);
    fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2));
    
    // Generate and display summary
    const summary = generateSummary(report);
    console.log('\n' + summary);
    
    // Save summary as markdown
    const mdPath = path.join(reportsDir, 'LATEST-AUDIT.md');
    fs.writeFileSync(mdPath, summary);
    
    console.log(`\n📄 Full report saved to: ${jsonPath}`);
    console.log(`📄 Summary saved to: ${mdPath}`);
    
    // Exit with error code if broken links found
    if (report.brokenLinks > 0) {
      console.log(`\n⚠️  ${report.brokenLinks} broken link(s) need attention!`);
      process.exit(1);
    }
    
  } catch (err) {
    console.error('Audit failed:', err);
    process.exit(1);
  }
}

main();
