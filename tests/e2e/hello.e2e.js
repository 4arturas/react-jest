const HelloPage = require('../pages/hello.page');
const SecurePage = require('../pages/secure.page');

describe('My Hello World page', () => {

    it('should toggle', async () => {
        await HelloPage.open();

        await HelloPage.toggleTitleWithInput('hello');
        await expect(HelloPage.helloTitle).toBeExisting();
        await HelloPage.toggleBtn.click();
        await expect(HelloPage.helloTitle).not.toBeExisting();
    });

    // https://youtu.be/y2emL1fMRyY?t=5900
    it('should not toggle', async () => {
        await HelloPage.open();

        await HelloPage.toggleTitleWithInput('hello 1');
        await expect(HelloPage.helloTitle).not.toBeExisting();
    });

});


