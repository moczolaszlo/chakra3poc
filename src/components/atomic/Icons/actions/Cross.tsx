import { Icon, type IconProps as ChakraIconProps } from "@chakra-ui/react";

export interface IconProps extends Omit<ChakraIconProps, 'size'> {
    size?: '16' | '24' | '32';
}

const Cross = (props: IconProps) => {
    const { size = '24', ...rest } = props;
    return (
        <Icon {...rest} width={size} height={size} asChild>
            {size === '16' ?
                <svg viewBox="0 0 16 16">
                    <path
                        d="M7.99996 6.93954L4.99474 3.93433L3.93408 4.99499L6.9393 8.0002L3.9341 11.0054L4.99476 12.0661L7.99996 9.06086L11.0051 12.0661L12.0658 11.0054L9.06062 8.0002L12.0658 4.99499L11.0052 3.93433L7.99996 6.93954Z"
                        fill="currentColor"
                    />
                </svg>
            :
                <svg viewBox="0 0 24 24">
                    <path
                        d="M12 13.4143L16.5426 17.9569C16.5426 17.9569 16.5428 17.9572 17.25 17.2501C17.9571 16.543 17.957 16.5429 17.957 16.5429L13.4142 12.0001L17.9571 7.45718L16.5428 6.04297L12 10.5859L7.45706 6.04297L6.04285 7.45718L10.5857 12.0001L6.04285 16.543L7.45706 17.9572L12 13.4143Z"
                        fill="currentColor"
                    />
                </svg>
            }
        </Icon>
    )
}

export default Cross;