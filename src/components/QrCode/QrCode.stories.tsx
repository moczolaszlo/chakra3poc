import { Meta } from "@storybook/react-webpack5";
import QrCode, { type QrCodeProps } from "./QrCode";

const meta: Meta<QrCodeProps> = {
    component: QrCode,
    args: {
        color: 'brand/primary',
        size: '128',
        value: 'https://www.bitrise.io',
    }
};

export default meta;

export const Default = {}