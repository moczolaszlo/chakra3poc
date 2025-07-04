import { defineSemanticTokens } from "@chakra-ui/react";
import dataObject from "./shadows.json";

const shadows = defineSemanticTokens.shadows(dataObject);

export default shadows;
