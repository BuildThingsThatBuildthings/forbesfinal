import { test, expect } from '@playwright/test';

test.describe('Forbes Integrative Medicine - Visual Verification', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3001');
  });

  test('should display all images correctly', async ({ page }) => {
    console.log('🔍 Verifying Forbes Integrative Medicine images...');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Check hero background image
    const heroSection = page.locator('section').first();
    const heroImage = heroSection.locator('img[alt*="Forbes Integrative Medicine"]').first();
    await expect(heroImage).toBeVisible();
    console.log('✅ Hero background image loaded');
    
    // Check logo in header
    const logo = page.locator('header img[alt="Forbes Integrative Medicine"]');
    await expect(logo).toBeVisible();
    const logoSrc = await logo.getAttribute('src');
    expect(logoSrc).toContain('logo-with-name');
    console.log('✅ Logo loaded in header');
    
    // Check Dr. Forbes bio picture in hero
    const bioPicHero = page.locator('img[alt="Dr. Janie Forbes, MD"]').first();
    if (await bioPicHero.isVisible()) {
      const bioPicSrc = await bioPicHero.getAttribute('src');
      expect(bioPicSrc).toContain('dr-forbes-bio');
      console.log('✅ Dr. Forbes bio picture loaded in hero');
    }
    
    // Take screenshot for visual review
    await page.screenshot({ 
      path: 'tests/screenshots/homepage-with-images.png',
      fullPage: true 
    });
    console.log('📸 Full page screenshot saved');
    
    // Check image dimensions
    const logoBounds = await logo.boundingBox();
    expect(logoBounds?.width).toBeGreaterThan(0);
    expect(logoBounds?.height).toBeGreaterThan(0);
    console.log(`📐 Logo dimensions: ${logoBounds?.width}x${logoBounds?.height}`);
    
    // Verify no broken images
    const images = page.locator('img');
    const imageCount = await images.count();
    console.log(`🖼️  Found ${imageCount} images on page`);
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
      expect(naturalWidth).toBeGreaterThan(0);
    }
    console.log('✅ All images loaded successfully (no broken images)');
  });

  test('should maintain luxury aesthetic with images', async ({ page }) => {
    // Check that luxury color scheme is preserved
    const heroSection = page.locator('section').first();
    
    // Verify overlay is applied over hero image for readability
    const overlay = heroSection.locator('div').filter({ 
      hasText: /Good morning|Good afternoon|Good evening/ 
    });
    await expect(overlay).toBeVisible();
    console.log('✅ Text overlay visible over hero image');
    
    // Verify professional badges are visible
    const badges = page.locator('text=/Board Certified|Chief Resident|Natural Medicine/');
    await expect(badges.first()).toBeVisible();
    console.log('✅ Professional credential badges visible');
    
    // Take viewport screenshots at different sizes
    const viewports = [
      { name: 'desktop', width: 1920, height: 1080 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'mobile', width: 375, height: 812 }
    ];
    
    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.screenshot({ 
        path: `tests/screenshots/homepage-${viewport.name}.png`,
        fullPage: false 
      });
      console.log(`📱 ${viewport.name} screenshot saved`);
    }
  });
});

console.log('\n✨ Visual verification tests created!');
console.log('Run with: npx playwright test tests/visual-verification.spec.ts');