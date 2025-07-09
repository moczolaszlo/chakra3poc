import { TextProps } from "@chakra-ui/react";

export function withSlashes(dataObject: Record<string, any>, prefix: string = ''): Record<string, any> {
    const delimiter = '/';
    const result: Record<string, any> = {};

    Object.keys(dataObject).forEach((key) => {
        const value = (dataObject as any)[key];

        const prefixedKey = prefix ? `${prefix}${delimiter}${key}` : key;

        if (!value.value) {
            Object.assign(result, withSlashes(value, prefixedKey));
        }
        else {
            result[prefixedKey] = value;
        }
    });

    return {...result, ...dataObject};
}

export const rem = (input: number | string): number | string => {
    const value = typeof input === 'string' ? parseInt(input, 10) : input;
    if (Number.isNaN(value)) {
      return input;
    }
    return `${value / 16}rem`;
  };
  
export const getTextStyle = (as: TextProps['as']) => {
    if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(as as string)) {
        console.log(`heading/${as}`)
        return `heading/${as}`
    }
    return undefined
}