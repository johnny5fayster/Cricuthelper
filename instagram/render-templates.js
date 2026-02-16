const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function renderTemplates() {
  const browser = await puppeteer.launch({ headless: true });
  const outputDir = path.join(__dirname, 'rendered');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }
  
  const templates = [
    { name: 'tip-template.html', width: 1080, height: 1080 },
    { name: 'heat-settings-template.html', width: 1080, height: 1350 },
    { name: 'quote-template.html', width: 1080, height: 1080 },
  ];
  
  for (const template of templates) {
    const page = await browser.newPage();
    await page.setViewport({ 
      width: template.width, 
      height: template.height,
      deviceScaleFactor: 1
    });
    
    const templatePath = `file://${path.join(__dirname, 'templates', template.name)}`;
    await page.goto(templatePath, { waitUntil: 'networkidle0' });
    
    // Wait for fonts to load
    await page.evaluateHandle('document.fonts.ready');
    
    const outputName = template.name.replace('.html', '.png');
    await page.screenshot({ 
      path: path.join(outputDir, outputName),
      fullPage: false,
      clip: { x: 0, y: 0, width: template.width, height: template.height }
    });
    
    console.log(`✅ Rendered: ${outputName}`);
    await page.close();
  }
  
  await browser.close();
  console.log('\n🎉 All templates rendered to ./rendered/');
}

renderTemplates().catch(console.error);
