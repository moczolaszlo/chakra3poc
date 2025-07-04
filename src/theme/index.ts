import { createSystem, defaultBaseConfig, defineConfig } from "@chakra-ui/react"
import breakpoints from "./breakpoints"
import globalCss from "./global-css"
import recipes from "./recipes"
import semanticTokens from "./semantic-tokens"
import textStyles from "./text-styles"
import tokens from "./tokens"

const themeConfig = defineConfig({
  preflight: true,
  cssVarsPrefix: "",
  cssVarsRoot: ":where(:root, :host)",
  globalCss,
  theme: {
    breakpoints,
    tokens,
    semanticTokens,
    recipes,
    textStyles,
  },
})

const bitkitTheme = createSystem(defaultBaseConfig, themeConfig)

export default bitkitTheme
