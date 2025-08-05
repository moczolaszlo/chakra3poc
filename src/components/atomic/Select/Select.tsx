"use client"

import { forwardRef } from "react"
import { NativeSelect } from "@chakra-ui/react"
import Icons from "../Icons"

type FieldProp = "name" | "value" | "onChange" | "defaultValue"

export interface SelectProps
    extends Omit<NativeSelect.RootProps, FieldProp>,
    Pick<NativeSelect.FieldProps, FieldProp> {
        loading?: boolean
        placeholder?: string
        size?: "md" | "lg"
    }

const Select = forwardRef<
    HTMLSelectElement,
    SelectProps
>(function Select(props, ref) {
    const {
        children,
        name,
        value,
        defaultValue,
        loading,
        onChange,
        placeholder,
        ...rest
    } = props;

    return (
        <NativeSelect.Root {...rest} className="group">
            <NativeSelect.Field
                ref={ref}
                name={name}
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                placeholder={placeholder}
                data-placeholder-shown={!!placeholder && !value ? 'true' : undefined}
            >
                {children}
            </NativeSelect.Field>
            <NativeSelect.Indicator>
                {loading ? 'e' : <Icons.SelectChevron />}
            </NativeSelect.Indicator>
        </NativeSelect.Root>
    )
});

export default Select
