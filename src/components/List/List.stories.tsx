import { Meta } from "@storybook/react-webpack5";
import { LuCircleCheck } from "react-icons/lu"
import List, { ListItem, type ListProps } from "./List";

const meta: Meta<ListProps> = {
    component: List,
    args: {
        children: (
            <>
                <ListItem>Item 1</ListItem>
                <ListItem>Item 2</ListItem>
                <ListItem>Item 3</ListItem>
            </>
        ),
        colorScheme: "neutral",
        variant: "unstyled",
    },
};

export default meta;

export const Default = {}

export const WithIcons = {
    args: {
        children: (
            <>
                <ListItem icon={<LuCircleCheck />} iconColor='red.50'>Item 1</ListItem>
                <ListItem icon={<LuCircleCheck />}>Item 2</ListItem>
                <ListItem icon={<LuCircleCheck />}>Item 3</ListItem>
            </>
        ),
    },

}