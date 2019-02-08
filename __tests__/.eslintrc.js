// ESLint config for jest tests in the magic-script-cli project.
module.exports = {
    "plugins": ["jest"],
    "env": {
        "jest/globals": true,
        "es6": true,
        "node": true
    },
    "extends": ["plugin:jest/recommended"],
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};