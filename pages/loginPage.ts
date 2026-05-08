import { Page } from "@playwright/test";

export class loginPage{

    constructor(private page : Page){
        this.page = page;
    };

    async navigateToURL(url : string){
        await this.page.goto(url)
    }

    async loginWithValidCred(username : string, password :string){

        await this.page.getByRole("button", {name:'Login'}).click();

        await this.page.locator("#username").fill(username);

        await this.page.locator("#password").fill(password);

        await this.page.getByRole('button',{name:"Login to QKart"}).click();
        
    }

    async clickLoginButton(){
        await this.page.getByRole("button", {name:'Login'}).click();
    }

    async enterUsername(username: string){
        await this.page.locator("#username").fill(username);
    }

    async enterPassword(password: string){
        await this.page.locator("#password").fill(password);
    }

    async clickLoginToQKartButton(){
        await this.page.getByRole('button',{name:"Login to QKart"}).click();
    }

    async getErrorMessage(): Promise<string> {
        const errorElement = await this.page.getByText(/required field|does not exist|incorrect/i);
        return await errorElement.textContent() || "";
    }
}