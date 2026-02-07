#!/usr/bin/env node
/**
 * Link Checker for CricutHelper
 * Scans all pages for internal links and validates them
 */

const fs = require('fs');
const path = require('path');

// Known valid routes from the build output
const validRoutes = [
  '/',
  '/calculator',
  '/community', 
  '/error-codes',
  '/guides',
  '/heat-press',
  '/materials',
  '/niches',
  '/niches/baby-nursery',
  '/niches/cake-decorating',
  '/niches/cosplay',
  '/niches/home-staging',
  '/niches/memorial',
  '/niches/pets',
  '/niches/seasonal',
  '/niches/wedding',
  '/problems',
  '/profit-calculator',
  '/troubleshoot',
];

// Routes that accept query params
const routesWithParams = [
  '/troubleshoot',
  '/materials',
];

const errors = [];
const warnings = [];

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.relative(process.cwd(), filePath);
  
  // Find all href="..." patterns
  const hrefMatches = content.matchAll(/href=["']([^"']+)["']/g);
  
  for (const match of hrefMatches) {
    const href = match[1];
    
    // Skip external links
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
      continue;
    }
    
    // Parse the path (remove query params)
    const urlPath = href.split('?')[0];
    
    // Check if route exists
    if (!validRoutes.includes(urlPath)) {
      errors.push(`❌ BROKEN LINK in ${fileName}: "${href}" -> route "${urlPath}" not found`);
    }
  }
  
  // Find Link components
  const linkMatches = content.matchAll(/Link\s+href=["']([^"']+)["']/g);
  
  for (const match of linkMatches) {
    const href = match[1];
    
    if (href.startsWith('http') || href.startsWith('#')) {
      continue;
    }
    
    const urlPath = href.split('?')[0];
    
    if (!validRoutes.includes(urlPath)) {
      errors.push(`❌ BROKEN LINK in ${fileName}: Link to "${href}" -> route "${urlPath}" not found`);
    }
  }
}

function scanDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      scanDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      scanFile(filePath);
    }
  }
}

console.log('🔍 Scanning for broken links...\n');

// Scan all source files
scanDirectory('./src');

// Report results
if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ No broken links found!\n');
} else {
  if (errors.length > 0) {
    console.log('ERRORS:\n');
    errors.forEach(e => console.log(e));
    console.log('');
  }
  if (warnings.length > 0) {
    console.log('WARNINGS:\n');
    warnings.forEach(w => console.log(w));
  }
}

console.log(`Scanned routes: ${validRoutes.length}`);
console.log(`Errors: ${errors.length}`);
console.log(`Warnings: ${warnings.length}`);

process.exit(errors.length > 0 ? 1 : 0);
