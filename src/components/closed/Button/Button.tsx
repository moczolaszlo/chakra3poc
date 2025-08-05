import { forwardRef } from "react"
import { Button as ChakraButton, type ButtonProps as ChakraButtonProps } from "@chakra-ui/react"
import Icons, { TypeIconName } from "../../atomic/Icons";

export type ButtonProps = Omit<ChakraButtonProps, "loading"> & {
    leftIconName?: TypeIconName;
    rightIconName?: TypeIconName;
    state?: 'disabled' | 'loading';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({children, leftIconName, rightIconName, state, ...rest}, ref) => {
    const LeftIcon = leftIconName && Icons[leftIconName]
    const RightIcon = rightIconName && Icons[rightIconName]

    return (
        <ChakraButton loading={state === 'loading'} disabled={state === 'disabled'} {...rest} ref={ref}>
            {LeftIcon && <LeftIcon size={rest.size === 'sm' ? '16' : '24'} />}
            {children}
            {RightIcon && <RightIcon size={rest.size === 'sm' ? '16' : '24'} />}  
        </ChakraButton>
    );
})

export default Button
