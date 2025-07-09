import { defineGlobalStyles } from "@chakra-ui/react"

const globalCss = defineGlobalStyles({
  body: {
    color: 'text.body',
    textStyle: 'body/lg/regular',
  },
  "a, summary, button, input, textarea, select, [tabindex]:not([tabindex='-1'])": {
    outline: 'none',
    _focusVisible: {
      outline: '3px',
      outlineColor: 'sys.interactive.highlight',
      outlineOffset: '0',
      outlineStyle: 'solid',
    },
  },
});

export default globalCss;