import { Heading as ChakraHeading, type HeadingProps } from "@chakra-ui/react"
import { getTextStyle } from "../../theme/themeUtils";

export type { HeadingProps }

const Heading = ({as, ...rest}: HeadingProps) => {
    return <ChakraHeading as={as} textStyle={getTextStyle(as)} {...rest}  />
}

export default Heading
