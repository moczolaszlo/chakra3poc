import { forwardRef } from "react"
import { QrCode as ChakraQrCode } from "@chakra-ui/react"

export type QrCodeProps = Omit<ChakraQrCode.RootProps, 'size'> & {
    size?: string | number;
}

const QrCode = forwardRef<HTMLDivElement, QrCodeProps>(
    (props, ref) => {
        const { color, size, ...rest } = props;
        return (
            <ChakraQrCode.Root ref={ref} width={size} height={size} {...rest}>
                <ChakraQrCode.Frame fill={color}>
                    <ChakraQrCode.Pattern />
                </ChakraQrCode.Frame>
            </ChakraQrCode.Root>
        )
    },
)

export default QrCode