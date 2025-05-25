import { defineSemanticTokens } from "@chakra-ui/react";
import object from "./shadows.json" assert { type: "json" };

export const shadows = defineSemanticTokens.shadows(object);
