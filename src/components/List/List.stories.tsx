import { Meta } from "@storybook/react-webpack5";
import List, { ListItem, type ListProps } from "./List";
import Icons from "../Icons";

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
                <ListItem icon={<Icons.CheckCircle color='icon/interactive' />}>Item 1</ListItem>
                <ListItem icon={<Icons.CheckCircle />}>Item 2</ListItem>
                <ListItem icon={<Icons.CheckCircle color='icon/negative' />}>Item 3</ListItem>
            </>
        ),
    },

}