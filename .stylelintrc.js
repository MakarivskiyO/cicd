module.exports = {
  extends: [
    'stylelint-config-sass-guidelines',
    'stylelint-config-idiomatic-order',
    'stylelint-config-prettier',
  ],
  rules: {
    'order/properties-alphabetical-order': null,
    'max-nesting-depth': 5,
    'selector-class-pattern': null,
    'selector-max-compound-selectors': 5,
    'scss/no-global-function-names': 'off',
    'selector-no-qualifying-type': 'off',
    'property-no-vendor-prefix': 'off'
  },
};