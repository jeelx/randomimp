const testConfig = {
  "presets": [
    [
      "@babel/preset-env",
    ],  
    "@babel/preset-typescript"
  ],
  "plugins": [
    "@babel/syntax-dynamic-import",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    ["@babel/plugin-proposal-decorators",{"legacy": true}],
    ["@babel/plugin-proposal-class-properties", {"loose": true}],
    "syntax-async-functions",
    "@babel/proposal-async-generator-functions",
    "@babel/plugin-transform-async-to-generator",
    "@babel/plugin-transform-runtime"
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
      "@babel/syntax-dynamic-import",
      "@babel/plugin-proposal-optional-chaining",
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-nullish-coalescing-operator",
      ["@babel/plugin-proposal-decorators",{"legacy": true}],
      ["@babel/plugin-proposal-class-properties", {"loose": true}],
      "syntax-async-functions",
      "@babel/proposal-async-generator-functions",
      "@babel/plugin-transform-async-to-generator",
      "@babel/plugin-transform-runtime"
    ]
}

module.exports = api => {
    const isTest = api.env('test');
    return isTest ? testConfig : config;
};