# eslint-plugin-jsx-advanced

[![npm package](https://nodei.co/npm/eslint-plugin-jsx-advanced.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/eslint-plugin-jsx-advanced)

> A eslint plugin for using [babel-plugin-jsx-advanced](https://www.npmjs.com/package/babel-plugin-jsx-advanced)

## Usage

**.eslintrc**

```js
{
  "extends": [
    "plugin:jsx-advanced/recommended"
  ]
}
```

**if `prefix` is not `x-` or `elifAlias` is not `elif`**

```js
{
  "settings": {
    "jsx-advanced": {
      "prefix": "v-",
      "elifAlias": "else-if"
    }
  },
  "extends": [
    "plugin:jsx-advanced/recommended"
  ]
}
```
