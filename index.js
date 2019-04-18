var TestingBot = require('testingbot-api');

class TestingBotHelper extends Helper {

    constructor(config) {
        super(config);
        this.api = new TestingBot({
          api_key: this.config.user,
          api_secret: this.config.key
        });
    }

    /**
     * Sends test meta data to TestingBot
     */
    _updateJob(sessionId, data) {
        this.api.updateTest(data, sessionId, function(error) {

        });
    }

    /**
     * This helper function gets called when a test succeeds.
     * Send the test status to TestingBot
     */
    _passed(test) {
        const sessionId = this._getSessionId();
        this._updateJob(sessionId, { 'test[success]': true, 'test[name]': test.title });
    }

    /**
     * This helper function gets called when a test fails.
     * Send the test status to TestingBot
     */
    _failed(test, error) {
        const sessionId = this._getSessionId();
        this._updateJob(sessionId, { 'test[success]': false, 'test[name]': test.title });
    }

    _getSessionId() {
        if (this.helpers['WebDriver']) {
            return this.helpers['WebDriver'].browser.sessionId;
        }
        if (this.helpers['Appium']) {
            return this.helpers['Appium'].browser.sessionId;
        }
        if (this.helpers['WebDriverIO']) {
            return this.helpers['WebDriverIO'].browser.requestHandler.sessionID;
        }
        throw new Error('No matching helper found. Supported helpers: WebDriver/Appium/WebDriverIO');
    }
}

module.exports = TestingBotHelper;
