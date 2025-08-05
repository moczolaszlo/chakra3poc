import { Heading as ChakraHeading, type HeadingProps } from "@chakra-ui/react";
import { getTextStyle } from "../../../theme/themeUtils";
import { forwardRef } from "react";

export type { HeadingProps }

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({as, ...rest}, ref) => {
    return <ChakraHeading as={as} textStyle={getTextStyle(as)} {...rest} ref={ref} />
})

export default Heading
