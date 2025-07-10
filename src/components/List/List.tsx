import { ReactNode } from "react"
import { List as ChakraList, type ListRootProps, type ListItemProps as ChakraListItemProps } from "@chakra-ui/react"

export type ListProps = ListRootProps & {
    colorScheme?: 'neutral' | 'purple'
    variant?: 'ordered' | 'simple-ordered' | 'unordered' | 'unstyled'
}

const List = (props: ListProps ) => {
    const {variant} = props
    const as = variant === 'ordered' || variant === 'simple-ordered' ? 'ol' : 'ul'
    return <ChakraList.Root as={as} {...props} />
}

export type ListItemProps = ChakraListItemProps & {
    icon?: ReactNode
}

export const ListItem = (props: ListItemProps) => {
    const { children, icon, ...rest } = props
    return (
        <ChakraList.Item {...rest}>
            {!!icon && <ChakraList.Indicator asChild>{icon}</ChakraList.Indicator>}
            {children}
        </ChakraList.Item>
    )
}

export default List