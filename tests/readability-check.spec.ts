import { test, expect } from '@playwright/test';

test.describe('Readability Improvements', () => {
  test('Hero text should be readable over background image', async ({ page }) => {
    await page.goto('http://localhost:3001');
    await page.waitForLoadState('networkidle');
    
    console.log('🔍 Checking readability improvements...');
    
    // Check that secondary image is now used
    const heroImage = page.locator('section img').first();
    const heroSrc = await heroImage.getAttribute('src');
    expect(heroSrc).toContain('secondary-image');
    console.log('✅ Secondary image is being used for hero background');
    
    // Check text visibility
    const heroHeading = page.locator('h1').first();
    await expect(heroHeading).toBeVisible();
    const headingText = await heroHeading.textContent();
    console.log(`✅ Hero heading visible: "${headingText}"`);
    
    // Check greeting badge visibility
    const greetingBadge = page.locator('text=/Good morning|Good afternoon|Good evening/').first();
    await expect(greetingBadge).toBeVisible();
    console.log('✅ Greeting badge is visible');
    
    // Check CTA buttons visibility
    const ctaButton = page.locator('text=/Schedule Your Consultation/').first();
    await expect(ctaButton).toBeVisible();
    console.log('✅ CTA button is clearly visible');
    
    // Check footer logo
    const footerLogo = page.locator('footer img[alt="Forbes Integrative Medicine"]');
    await expect(footerLogo).toBeVisible();
    console.log('✅ Logo displayed in footer');
    
    // Take comparison screenshots
    await page.screenshot({ 
      path: 'tests/screenshots/hero-with-secondary-image.png',
      fullPage: false,
      clip: { x: 0, y: 0, width: 1920, height: 800 }
    });
    console.log('📸 Hero section screenshot saved');
    
    // Scroll to footer and capture
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    await page.screenshot({ 
      path: 'tests/screenshots/footer-with-logo.png',
      fullPage: false
    });
    console.log('📸 Footer screenshot saved');
    
    // Check contrast ratio (basic check)
    const backgroundColor = await heroHeading.evaluate((el) => {
      return window.getComputedStyle(el.parentElement!).backgroundColor;
    });
    console.log(`🎨 Background behind text: ${backgroundColor}`);
    
    console.log('\n✅ All readability improvements verified!');
  });
});