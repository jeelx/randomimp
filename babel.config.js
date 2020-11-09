const testConfig = {
    "presets": [
        [
          "@babel/preset-env",
          {
            "useBuiltIns": "usage",
            "corejs": 3
          }
        ],
        "@babel/preset-typescript"
      ],
      "plugins": [
        [
          "@babel/plugin-proposal-decorators",
          {
            "decoratorsBeforeExport": true
          }
        ],
        "@babel/proposal-class-properties"
      ]
};

const config = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "browsers": ['last 2 versions']
                }
            }
        ],
        "@babel/preset-typescript"
    ],
    "plugins": [
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-proposal-nullish-coalescing-operator",
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        "@babel/plugin-transform-runtime"
    ]
}

module.exports = api => {
    const isTest = api.env('test');
    return isTest ? testConfig : config;
};