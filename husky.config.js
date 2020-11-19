module.exports = {
    "hooks": {
      "pre-commit": "npm run test && npm run stylelint && npm run tslint"
    }
  }