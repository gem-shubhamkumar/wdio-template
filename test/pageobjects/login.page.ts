import locator from "../locators/locator";
import { expect as chaiExpect } from "chai";

class LoginPage {

    public async launchApplication () {
        await browser.url("");
        await browser.maximizeWindow();
        await browser.setTimeout({ 'implicit': 20000 });
    }

    public async login (username: string, password: string) {
        await (await locator.input_username).setValue(username);
        await (await locator.input_password).setValue(password);
        await (await locator.button_login).click();
    }

    public async verifyTitle (title: string) {
        const actualTitle:string = await (await locator.title_products).getText();
        chaiExpect(actualTitle).equal(title);
    }

}

export default new LoginPage();
