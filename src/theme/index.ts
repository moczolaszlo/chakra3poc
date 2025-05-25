import { createSystem, defaultBaseConfig, defineConfig } from "@chakra-ui/react"
import { breakpoints } from "./breakpoints"
import { globalCss } from "./global-css"
import { layerStyles } from "./layer-styles"
import { recipes } from "./recipes"
import { semanticTokens } from "./semantic-tokens"
import { slotRecipes } from "./slot-recipes"
import { textStyles } from "./text-styles"
import { tokens } from "./tokens"

const themeConfig = defineConfig({
  preflight: true,
  cssVarsPrefix: "bitkit",
  cssVarsRoot: ":where(:root, :host)",
  globalCss,
  theme: {
    breakpoints,
    tokens,
    semanticTokens,
    recipes,
    slotRecipes,
    textStyles,
    layerStyles,
  },
})

export const bitkitTheme = createSystem(defaultBaseConfig, themeConfig)
