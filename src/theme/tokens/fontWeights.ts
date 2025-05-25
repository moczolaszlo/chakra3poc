import { defineTokens } from "@chakra-ui/react";
import object from "./fontWeights.json" assert { type: "json" };

export const fontWeights = defineTokens.fontWeights(object)
