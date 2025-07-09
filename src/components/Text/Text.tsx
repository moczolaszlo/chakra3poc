import { Text as ChakraText, type TextProps } from "@chakra-ui/react"
import { getTextStyle } from "../../theme/themeUtils";

export type { TextProps }

const Text = ({as, ...rest}: TextProps) => {
    return <ChakraText as={as} textStyle={getTextStyle(as)} {...rest}  />
}

export default Text
