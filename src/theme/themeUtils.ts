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
  