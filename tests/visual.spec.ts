import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test('No text overflow on homepage', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    // Check for text overflow
    const overflowingElements = await page.evaluate(() => {
      const elements = document.querySelectorAll('*');
      const overflowing: Array<{ text: string, className: string }> = [];
      
      elements.forEach(el => {
        if (el instanceof HTMLElement) {
          // Check horizontal overflow
          if (el.scrollWidth > el.clientWidth) {
            overflowing.push({
              text: el.textContent?.substring(0, 50) || '',
              className: el.className
            });
          }
          // Check vertical overflow (text cut off)
          if (el.scrollHeight > el.clientHeight) {
            const computedStyle = window.getComputedStyle(el);
            if (computedStyle.overflow === 'hidden' || computedStyle.overflowY === 'hidden') {
              overflowing.push({
                text: el.textContent?.substring(0, 50) || '',
                className: el.className
              });
            }
          }
        }
      });
      
      return overflowing;
    });
    
    // Log any overflowing elements
    if (overflowingElements.length > 0) {
      console.log('Overflowing elements found:');
      overflowingElements.forEach(el => {
        console.log(`- Text: "${el.text}" | Class: ${el.className}`);
      });
    }
    
    expect(overflowingElements.length).toBe(0);
  });

  test('Visual screenshot - Desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    await page.screenshot({ 
      path: 'screenshots/desktop.png', 
      fullPage: true 
    });
  });

  test('Visual screenshot - Tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    await page.screenshot({ 
      path: 'screenshots/tablet.png', 
      fullPage: true 
    });
  });

  test('Visual screenshot - Mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    await page.screenshot({ 
      path: 'screenshots/mobile.png', 
      fullPage: true 
    });
  });

  test('Check for overlapping elements', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    const overlappingElements = await page.evaluate(() => {
      const elements = document.querySelectorAll('*');
      const overlapping: Array<{ element1: string, element2: string }> = [];
      
      const elementsArray = Array.from(elements);
      
      for (let i = 0; i < elementsArray.length; i++) {
        for (let j = i + 1; j < elementsArray.length; j++) {
          const el1 = elementsArray[i] as HTMLElement;
          const el2 = elementsArray[j] as HTMLElement;
          
          // Skip if parent-child relationship
          if (el1.contains(el2) || el2.contains(el1)) continue;
          
          const rect1 = el1.getBoundingClientRect();
          const rect2 = el2.getBoundingClientRect();
          
          // Check if elements overlap
          const overlap = !(
            rect1.right < rect2.left || 
            rect2.right < rect1.left || 
            rect1.bottom < rect2.top || 
            rect2.bottom < rect1.top
          );
          
          if (overlap && rect1.width > 0 && rect1.height > 0 && rect2.width > 0 && rect2.height > 0) {
            // Only report if both have visible content
            const style1 = window.getComputedStyle(el1);
            const style2 = window.getComputedStyle(el2);
            
            if (style1.position === 'absolute' || style2.position === 'absolute' ||
                style1.position === 'fixed' || style2.position === 'fixed') {
              // Expected for positioned elements
              continue;
            }
            
            overlapping.push({
              element1: `${el1.tagName}.${el1.className}`,
              element2: `${el2.tagName}.${el2.className}`
            });
          }
        }
      }
      
      return overlapping;
    });
    
    if (overlappingElements.length > 0) {
      console.log('Overlapping elements found:');
      overlappingElements.forEach(pair => {
        console.log(`- ${pair.element1} overlaps with ${pair.element2}`);
      });
    }
  });

  test('Check color contrast', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    // Check that text is readable
    const lowContrastElements = await page.evaluate(() => {
      const elements = document.querySelectorAll('*');
      const lowContrast: Array<{ text: string, bgColor: string, textColor: string }> = [];
      
      elements.forEach(el => {
        if (el instanceof HTMLElement && el.textContent?.trim()) {
          const style = window.getComputedStyle(el);
          const bgColor = style.backgroundColor;
          const textColor = style.color;
          
          // Simple check for very light text on light background
          if (bgColor.includes('255') && textColor.includes('200')) {
            lowContrast.push({
              text: el.textContent.substring(0, 30),
              bgColor,
              textColor
            });
          }
        }
      });
      
      return lowContrast;
    });
    
    if (lowContrastElements.length > 0) {
      console.log('Low contrast elements:', lowContrastElements);
    }
  });
});