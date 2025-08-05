import { forwardRef } from "react"
import { Text as ChakraText, type TextProps } from "@chakra-ui/react"
import { getTextStyle } from "../../../theme/themeUtils";

export type { TextProps }

const Text = forwardRef<HTMLParagraphElement, TextProps>(({as, ...rest}, ref) => {
    return <ChakraText as={as} textStyle={getTextStyle(as)} {...rest} ref={ref} />
})

export default Text
