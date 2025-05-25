const colors = require('../src/theme/tokens/colors.json');
const fonts = require('../src/theme/tokens/fonts.json');
const fontSizes = require('../src/theme/tokens/fontSizes.json');
const fontWeights = require('../src/theme/tokens/fontWeights.json');
const sizesAndSpacing = require('../src/theme/tokens/sizesAndSpacing.json');
const radii = require('../src/theme/tokens/radii.json');
const zIndex = require('../src/theme/tokens/zIndex.json');

const shadows = require('../src/theme/semantic-tokens/shadows.json');

const variables = {
    semanticTokens: {
        _dark: [],
        _light: []
    },
    tokens: [],
};

function tokensToVariables(name, obj) {
    Object.entries(obj).forEach(([key, value]) => {
        if (Object.keys(value)[0] === 'value') {
            if (typeof value.value === 'string' || typeof value.value === 'number') {
                variables.tokens.push(`--${name}-${key}: ${value.value};`);
            }
            else if (value.value._dark) {
                variables.semanticTokens._dark.push(`--${name}-${key}: ${value.value._dark};`);
            }
            else if (value.value._light) {
                variables.semanticTokens._light.push(`--${name}-${key}: ${value.value._light};`);
            }
        }
        else {
            tokensToVariables(`${name}-${key}`, value)
        }
      }
    );
}

tokensToVariables('colors', colors);
tokensToVariables('fonts', fonts);
tokensToVariables('font-sizes', fontSizes);
tokensToVariables('font-weights', fontWeights);
tokensToVariables('sizes', sizesAndSpacing);
tokensToVariables('spacing', sizesAndSpacing);
tokensToVariables('radii', radii);
tokensToVariables('z-index', zIndex);

tokensToVariables('shadows', shadows);

console.log(variables);
