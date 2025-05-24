const fonts = require('../src/theme/tokens/fonts.json');
const variables = [];

function tokensToVariables(name, obj) {
    Object.entries(obj).forEach(([key, value]) => {
        if (Object.keys(value)[0] === 'value') {
            variables.push(`--${name}-${key}: ${value.value};`);
        }
        else {
            tokensToVariables(`${name}-${key}`, value)
        }
      }
    );
}

tokensToVariables('fonts', fonts);

console.log(variables);
