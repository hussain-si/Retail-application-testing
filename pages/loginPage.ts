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
}