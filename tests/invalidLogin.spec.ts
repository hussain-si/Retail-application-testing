import { test, expect } from '@playwright/test';
import { loginPage } from "../pages/loginPage";

test.describe('Invalid Login Conditions', () => {

    let login: loginPage;

    test.beforeEach(async ({ page }) => {
        login = new loginPage(page);
        await login.navigateToURL("/");
    });

    test('Login with blank username and password', async ({ page }) => {
        await login.clickLoginButton();
        await login.clickLoginToQKartButton();
        
        const errorMessage = await login.getErrorMessage();
        expect(errorMessage).toContain("Username is a required field");
    });

    test('Login with blank username', async ({ page }) => {
        await login.clickLoginButton();
        await login.enterPassword("anyPassword123");
        await login.clickLoginToQKartButton();
        
        const errorMessage = await login.getErrorMessage();
        expect(errorMessage).toContain("Username is a required field");
    });

    test('Login with blank password', async ({ page }) => {
        await login.clickLoginButton();
        await login.enterUsername("testuser123");
        await login.clickLoginToQKartButton();
        
        const errorMessage = await login.getErrorMessage();
        expect(errorMessage).toContain("Password is a required field");
    });

    test('Login with incorrect username', async ({ page }) => {
        await login.clickLoginButton();
        await login.enterUsername("nonexistentuser");
        await login.enterPassword("anyPassword123");
        await login.clickLoginToQKartButton();
        
        const errorMessage = await login.getErrorMessage();
        expect(errorMessage).toContain("Username does not exist");
    });

    test('Login with incorrect password', async ({ page }) => {
        await login.clickLoginButton();
        await login.enterUsername("Admin10000");
        await login.enterPassword("wrongPassword123");
        await login.clickLoginToQKartButton();
        
        const errorMessage = await login.getErrorMessage();
        expect(errorMessage).toContain("Password is incorrect");
    });

});
