import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

export type ButtonProps = ChakraButtonProps & {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary' | 'tertiary' | 'danger-primary' | 'danger-secondary' | 'danger-tertiary';
}

const Button = (props: ButtonProps) => {
    return (
        <ChakraButton {...props} />
    );  
};

export default Button;