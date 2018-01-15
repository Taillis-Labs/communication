const path = require("path")

module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "globals": {
    "CONFIG": true
  },
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "promise",
    "import"
  ],
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "react/display-name": "off",
    "react/prop-types": "off",
    "react/jsx-uses-react": "error",
    "no-eval": ["error", {"allowIndirect": true}],
    "no-console": "off",
    "no-unneeded-ternary": "off",
    "promise/always-return": "error",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    "promise/no-native": "off",
    "promise/no-nesting": "warn",
    "promise/no-promise-in-callback": "off",
    "promise/no-callback-in-promise": "off",
    "promise/avoid-new": "warn",
    "react/no-unescaped-entities": "off",
    "indent": [ "error", 2, { "SwitchCase": 1 } ],
    "linebreak-style": [ "error", "unix" ],
    "quotes": [ "error", "double" ],
    "semi": [ "error", "never" ],
    "object-curly-spacing": [ "error", "always" ],
    "array-bracket-spacing": [ "error", "never" ],
    "computed-property-spacing": [ "error", "never" ],
    "brace-style": [ "error", "1tbs", { "allowSingleLine": true } ]
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": path.resolve("./webpack/webpack.config.js")
      }
    }
  }
}
