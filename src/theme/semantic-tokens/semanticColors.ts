import { defineSemanticTokens } from "@chakra-ui/react";
import object from "./semanticColors.json";

export const colors = defineSemanticTokens.colors(object);
