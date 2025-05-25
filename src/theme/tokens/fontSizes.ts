import { defineTokens } from "@chakra-ui/react";
import object from "./fontSizes.json" assert { type: "json" };

export const fontSizes = defineTokens.fontSizes(object);
