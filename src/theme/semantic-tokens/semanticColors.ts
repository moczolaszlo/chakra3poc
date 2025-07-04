import { defineSemanticTokens } from "@chakra-ui/react";
import dataObject from "./semanticColors.json";
import { withSlashes } from "../themeUtils";

const semanticColors = defineSemanticTokens.colors(withSlashes(dataObject));

export default semanticColors;
