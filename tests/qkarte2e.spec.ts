import { test, expect } from '@playwright/test';
import  testdata  from "../data/testData.json";
import { loginPage  } from "../pages/loginPage";
import {homePage  } from "../pages/homePage";

test('E2E testing', async ({ page }) => {

    const login = new loginPage(page);

    const home = new homePage(page);

    await login.navigateToURL("/");

    await login.loginWithValidCred(testdata.credential.username, testdata.credential.Password);

    // Validate success message
    await expect(page.locator('text=Logged in successfully')).toBeVisible();

    await home.search_product();

    await page.waitForTimeout(5000);

    

  
});
