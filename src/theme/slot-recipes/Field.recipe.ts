import { defineSlotRecipe } from "@chakra-ui/react"
import { fieldAnatomy } from "@chakra-ui/react/anatomy";

const field = defineSlotRecipe({
  className: 'field',
  slots: fieldAnatomy.keys(),
  base: {
    root: {},
    label: {
      display: 'block',
      color: 'input/text/label',
      textStyle: 'comp/input/label',
      marginBlockEnd: '4',
      '& span': {
        marginInlineStart: '2',
        color: 'input/text/helper',
        fontWeight: 'normal',
      },
      '[data-disabled] &': {
        color: 'text/disabled',
        '& span': {
          color: 'text/disabled',
        },
      },
    },
    errorText: {
      display: 'block',
      marginBlockStart: '4',
      textStyle: 'comp/input/helperText',
      color: 'input/text/error',
    },
    helperText: {
      display: 'block',
      marginBlockStart: '4',
      textStyle: 'comp/input/helperText',
      color: 'input/text/helper',
      '[data-disabled] &': {
        color: 'text/disabled',
      },
    },
  },
});

export default field;
