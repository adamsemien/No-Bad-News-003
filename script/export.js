import puppeteer from 'puppeteer';
import fs from 'fs';
import { execSync } from 'child_process';

(async () => {
  try {
    const executablePath = execSync('which chromium').toString().trim();
    const browser = await puppeteer.launch({ 
      executablePath,
      args: ['--no-sandbox', '--disable-setuid-sandbox'] 
    });
    const page = await browser.newPage();
    
    console.log('Navigating to http://localhost:5000...');
    await page.goto('http://localhost:5000', { waitUntil: 'networkidle0' });

    console.log('Converting images to base64 and cleaning up...');
    await page.evaluate(async () => {
      // Function to convert URL to data URI
      const toDataURL = async (url) => {
        const response = await fetch(url);
        const blob = await response.blob();
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        });
      };

      // Replace all images
      const images = document.querySelectorAll('img');
      for (const img of images) {
        if (img.src && !img.src.startsWith('data:')) {
          try {
            img.src = await toDataURL(img.src);
          } catch (e) {
            console.error('Failed to convert', img.src);
          }
        }
      }
      
      // Convert all CSS background images to base64? (Wait, the user only has img tags right now, and one radial-gradient)
      
      // Remove scripts to make it standalone
      const scripts = document.querySelectorAll('script');
      for (const script of scripts) {
        script.remove();
      }
    });

    const html = await page.content();
    fs.writeFileSync('newsletter-003.html', html);
    
    await browser.close();
    console.log('Successfully exported to newsletter-003.html');
    process.exit(0);
  } catch (err) {
    console.error('Error during export:', err);
    process.exit(1);
  }
})();
