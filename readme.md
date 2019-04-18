# codeceptjs-tbhelper
CodeceptJS TestingBot helper, which will update test meta data on TestingBot (status, name, ...).

NPM package: https://www.npmjs.com/package/codeceptjs-tbhelper

### Installation
`npm install codeceptjs-tbhelper --save-dev`

### Configuration

Add the helper to your codecept config file `codecept.json/codecept.conf.js`

Example:

```json
{
   "helpers": {
     "TestingBotHelper": {
      "require": "codeceptjs-tbhelper",
      "user": "TB_KEY",
      "key": "TB_SECRET"
    }
   }
}
```
You can get the TestingBot Key and Secret from [TestingBot](https://testingbot.com/).