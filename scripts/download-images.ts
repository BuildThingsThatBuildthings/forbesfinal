import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import https from 'https';
import { promisify } from 'util';

const writeFile = promisify(fs.writeFile);

// Image URLs provided by the client
const images = [
  {
    url: 'https://storage.googleapis.com/msgsndr/zOxsziHYNept0GFVJlUp/media/66e1cf7db3e10056d6ed25af.webp',
    name: 'hero-main.webp',
    description: 'Main hero image'
  },
  {
    url: 'https://storage.googleapis.com/msgsndr/zOxsziHYNept0GFVJlUp/media/66f5cfbbcf8c7a2fb8e5adeb.png',
    name: 'secondary-image.png',
    description: 'Secondary image'
  },
  {
    url: 'https://storage.googleapis.com/msgsndr/zOxsziHYNept0GFVJlUp/media/66d7aa1eab806e70533094f6.png',
    name: 'logo-with-name.png',
    description: 'Logo with Forbes Integrative Medicine name'
  },
  {
    url: 'https://storage.googleapis.com/msgsndr/zOxsziHYNept0GFVJlUp/media/66be2aaf20f247e5e8f6b04e.png',
    name: 'dr-forbes-bio.png',
    description: 'Dr. Forbes professional bio picture (round)'
  }
];

async function downloadImage(url: string, filepath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }

      const chunks: Buffer[] = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', async () => {
        const buffer = Buffer.concat(chunks);
        await writeFile(filepath, buffer);
        resolve();
      });
      response.on('error', reject);
    });
  });
}

async function reviewAndDownloadImages() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  const publicImagesDir = path.join(process.cwd(), 'public', 'images');
  
  // Ensure directory exists
  if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
  }

  console.log('🖼️  Forbes Integrative Medicine - Image Review & Download');
  console.log('=' .repeat(60));

  for (const image of images) {
    try {
      console.log(`\n📥 Processing: ${image.description}`);
      console.log(`   URL: ${image.url}`);
      
      // Navigate to image URL
      await page.goto(image.url, { waitUntil: 'networkidle' });
      
      // Take screenshot for review
      const screenshotPath = path.join(publicImagesDir, `review-${image.name}`);
      await page.screenshot({ 
        path: screenshotPath,
        fullPage: true 
      });
      console.log(`   ✅ Screenshot saved: review-${image.name}`);
      
      // Download the actual image
      const imagePath = path.join(publicImagesDir, image.name);
      await downloadImage(image.url, imagePath);
      console.log(`   ✅ Image downloaded: ${image.name}`);
      
      // Get image dimensions if possible
      const dimensions = await page.evaluate(() => {
        const img = document.querySelector('img');
        if (img) {
          return {
            width: img.naturalWidth,
            height: img.naturalHeight
          };
        }
        return null;
      });
      
      if (dimensions) {
        console.log(`   📐 Dimensions: ${dimensions.width}x${dimensions.height}`);
      }
      
    } catch (error) {
      console.error(`   ❌ Error processing ${image.name}:`, error);
    }
  }

  console.log('\n' + '=' .repeat(60));
  console.log('✨ Image review and download complete!');
  console.log(`📁 Images saved to: ${publicImagesDir}`);
  
  await browser.close();
}

// Run the script
reviewAndDownloadImages().catch(console.error);