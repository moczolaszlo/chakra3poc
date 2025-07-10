import { Icon, type IconProps as ChakraIconProps } from "@chakra-ui/react";

export interface IconProps extends ChakraIconProps {
    size?: '16' | '24' | '32';
}

const CheckCircle = (props: IconProps) => {
    const { size = '24', ...rest } = props;
    return (
        <Icon {...rest} width={size} height={size} asChild>
            {size === '16' ?
                <svg viewBox="0 0 16 16">
                    <path
                        d="M11.5644 6.49388L10.4356 5.50612L7.40814 8.96604L5.46852 7.41435L4.53148 8.58565L7.59186 11.034L11.5644 6.49388Z"
                        fill="currentColor"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8Z"
                        fill="currentColor"
                    />
                </svg>
            :
                <svg viewBox="0 0 24 24">
                    <path
                        d="M17.2372 9.67572L15.7628 8.32428L10.9164 13.6113L8.15079 11.2407L6.84921 12.7593L11.0836 16.3887L17.2372 9.67572Z"
                        fill="currentColor"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
                        fill="currentColor"
                    />
                </svg>
            }
        </Icon>
    )
}

export default CheckCircle;