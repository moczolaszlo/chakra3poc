'use client'

import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react'
import bitkitTheme from '../../theme';

import '@fontsource-variable/figtree/index.css';
import '@fontsource-variable/source-code-pro/index.css';

const Provider = (props: Omit<ChakraProviderProps, 'value'>) => {
    return (
        <ChakraProvider {...props} value={bitkitTheme} />
    );
};

export default Provider;
