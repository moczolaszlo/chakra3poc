import { defineTokens } from "@chakra-ui/react";
import dataObject from "./colors.json";
import { withSlashes } from "../themeUtils";

const colors = defineTokens.colors(withSlashes(dataObject));

export default colors;
