import { Meta, StoryObj } from '@storybook/react-webpack5';
import Field from './Field';
import Input from '../Input/Input';
import Select from '../Select/Select';
import Textarea from '../Textarea/Textarea';
import { useState } from 'react';

type StoryArgs = {
    autoresize?: boolean;
    disabled?: boolean;
    errorText?: string;
    helperText?: string;
    invalid?: boolean;
    label?: string;
    loading?: boolean;
    placeholder?: string;
    readOnly?: boolean;
    renderChildren?: (args: StoryArgs, value?: string, setValue?: (value: string) => void) => React.ReactNode;
    required?: boolean;
    size?: 'md' | 'lg';
    setValue?: (value: string) => void;
    value?: string;
};

const StoryComponent = (args: StoryArgs) => {
    const { disabled, errorText, helperText, invalid, label, readOnly, renderChildren, required } =
        args;
        const [value, setValue] = useState('');
    return (
        <Field.Root disabled={disabled} invalid={invalid} data-loading="true" readOnly={readOnly} required={required}>
            <Field.Label>{label}</Field.Label>
            {renderChildren?.(args, value, setValue)}
            {!invalid && <Field.HelperText>{helperText}</Field.HelperText>}
            <Field.ErrorText>{errorText}</Field.ErrorText>
        </Field.Root>
    );
};

const meta: Meta<StoryArgs> = {
    args: {
        disabled: false,
        errorText: 'Error Info',
        helperText: 'Some additional Info',
        invalid: false,
        label: 'Label',
        loading: false,
        placeholder: 'Placeholder text',
        readOnly: false,
        required: false,
        size: 'lg',
    },
    component: Field.Root,
    render: (args) => <StoryComponent {...args} />,
};

export default meta;

export const WithInput: StoryObj<StoryArgs> = {
    args: {
        renderChildren: ({ placeholder, size }) => <Input placeholder={placeholder} size={size} />,
    },
};

export const WithTextarea: StoryObj<StoryArgs> = {
    args: {
        renderChildren: ({ placeholder }) => (
            <Textarea placeholder={placeholder} />
        ),
    },
};

export const WithSelect: StoryObj<StoryArgs> = {
    args: {
        renderChildren: ({ placeholder, size }, value, setValue) => (
            <Select disabled placeholder={placeholder} size={size} onChange={(e) => setValue?.(e.target.value)} value={value}>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
            </Select>
        ),
        size: 'lg'
    },
};
