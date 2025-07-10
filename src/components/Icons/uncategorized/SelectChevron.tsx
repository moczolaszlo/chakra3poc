import { Icon, type IconProps as ChakraIconProps } from "@chakra-ui/react";

export interface IconProps extends ChakraIconProps {
    size?: '16' | '24' | '32';
}

const CheckCircle = (props: IconProps) => {
    const { size = '24', ...rest } = props;
    return (
        <Icon {...rest} width={size} height={size} asChild>
            <svg viewBox="0 0 24 24">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.29285 10.2071L7.70706 8.79289L12 13.0858L16.2928 8.79289L17.7071 10.2071L12 15.9142L6.29285 10.2071Z"
                    fill="currentColor"
                />
            </svg>
        </Icon>
    )
}

export default CheckCircle;