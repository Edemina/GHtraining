describe.skip('test drop down',function (){
    it('should check drop down',function (){
        browser.url('https://www.amazon.com/Hanes-Sleeve-Beefy-T-Pocket-X-Large/dp/B01NBY5PSY/ref=sr_1_1?dchild=1&keywords=tshort&qid=1592270942&sr=8-1&th=1&psc=1')
        const select = "//span[@id='dropdown_selected_size_name']//span[@role='button']"
        $(select).click();
        const sizeDropDown= $$("//li[@tabindex = '0']");
        sizeDropDown.shift();
        sizeDropDown.forEach(el => expect(el.isClickable()).toEqual(true));
    });

    it(' should check all images for item', function (){
        const tshirts = "//img[@class='imgSwatch']";
        $$(tshirts).forEach(el=>el.click());
    });
});
describe.skip('Registration Page', () => {
    it('should verify the title of the page', function () {
        browser.url('https://www.amazon.com/ap/register?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3F_encoding%3DUTF8%26ref_%3Dnav_newcust&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&');
        const text = browser.getTitle();
        expect(text).toEqual('Amazon Registration');
    });

    it('should verify that the page has Create Account', function () {
        const createAccountText = '//h1';
        const expected =$(createAccountText).getText();
        expect(expected).toEqual('Create account');
    });

    it('should verify the label of Your name is present', function () {
        const yourNameText ='[for="ap_customer_name"]';
        const expected = $(yourNameText).getText();
        expect(expected).toEqual('Your name');
    });

    it('should verify the valid input in Your name', function () {
        const inputField = $('#ap_customer_name');
        inputField.setValue('Ekaterina');
        browser.pause(3000);
        const text = inputField.getValue();
        expect(text).toEqual('Ekaterina');
    });

    it('should verify that Email is present', function () {
        const yourEmailText = '//label[@for="ap_email"]';
        const text = $(yourEmailText).getText();
        expect(text).toEqual('Email');
    });

    it('should verify the valid input in Email', function () {
        const inputFieldEmail = $('#ap_email');
        inputFieldEmail.setValue('katavdeeva@gmail.com');
        browser.pause(3000);
        const text = inputFieldEmail.getValue();
        expect(text).toEqual('katavdeeva@gmail.com');
    });

    it('should verify that password label is present', function () {
        const passwordText = '//label[@for="ap_password"]';
        const text = $(passwordText).getText();
        expect(text).toEqual('Password');
    });

    it('should verify the correct input in the email field', function () {
        const inputFieldPassword = $('#ap_password');
        inputFieldPassword .setValue('111111');
        browser.pause(3000);
        const text = inputFieldPassword .getValue();
        expect(text).toEqual('111111');
    });

    it('should verify that i label is present', function () {
        const iText = $('//div[@class="a-box a-alert-inline a-alert-inline-info auth-inlined-information-message a-spacing-top-mini"]/div/i');
        expect(iText.isDisplayed()).toEqual(true);
    });
});

describe('Create a New Account', () => {
    before(() => {
        browser.maximizeWindow();
        browser.deleteAllCookies();
        browser.url('https://www.amazon.com/ap/register?showRememberMe=true&openid.pape.max_auth_age=0&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=usflex&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26action%3Dsign-out%26path%3D%252Fgp%252Fyourstore%252Fhome%26ref_%3Dnav_AccountFlyout_signout%26signIn%3D1%26useRedirectOnSuccess%3D1&prevRID=PJDHPNBMDQ9FNZZJM1RN&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&prepopulatedLoginId=&failedSignInCount=0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0');
        });

    it('should verify the title Create Account is present', function () {
        const title = $('[class="a-spacing-small"]'); // Create account
        const expected = title.isDisplayed();
        expect(expected).toEqual(true);
    });

    it('should fill out a field with valid name', function () {
        const inputFirstName = $("//input[@id='ap_customer_name']");
        inputFirstName.setValue('Ekaterina');
    });

    it('should fill out a field with valid email', function () {
        const inputEmail = $("//input[@id='ap_email']");
        inputEmail.setValue('katavdeeva@gmail.com');
    });

    it('should verify that an error throws up when Password is less than 6 characters', function () {
        const inputFirstName = $("//input[@id='ap_password']");
        inputFirstName.setValue('11111');
        const errorText = $('//div[@class="a-box a-alert-inline a-alert-inline-info auth-inlined-information-message a-spacing-top-mini"]//div[@class="a-box-inner a-alert-container"]//div[@class="a-alert-content"]');
        const expected = errorText.isDisplayed();
        expect(expected).toEqual(true);
    });

    it('should reinput the Password ', function () {
        const inputPassword = $("//input[@id='ap_password']");
        inputPassword.setValue('111111');
    });


});
