import {Page  } from "@playwright/test";

export class homePage{

    constructor(private page : Page) {};

    async search_product(){
        await this.page.getByRole('textbox',{name : "Search for items/categories"}).waitFor();
        await this.page.getByRole('textbox',{name : "Search for items/categories"}).fill("shoe");
        await this.page.keyboard.press("Enter");


    }

    
}