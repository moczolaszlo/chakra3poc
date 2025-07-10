import { defineSlotRecipe } from "@chakra-ui/react"
import { rem } from "../themeUtils";
import { nativeSelectAnatomy } from "@chakra-ui/react/anatomy";

const select = defineSlotRecipe({
  className: 'select',
  slots: nativeSelectAnatomy.keys(),
  base: {
    root: {
        height: "fit-content",
        display: "flex",
        width: "100%",
        position: "relative",  
    },
    field: {
        width: "100%",
        minWidth: "0",
        appearance: "none",
        borderRadius: '4',
        borderWidth: rem(1),
        borderColor: 'border/strong',
        background: 'background/primary',
        transition: '200ms',
        color: 'input/text/inputValue',
        _hover: {
          borderColor: 'border/hover',
        },
        _invalid: {
          borderColor: 'border/error',
        },
        _disabled: {
          _hover: {
            borderColor: 'border/disabled',
          },
          _placeholder: {
            color: 'text/disabled',
          },
          color: 'text/disabled',
          background: 'background/disabled',
          cursor: 'not-allowed',
        },
        _placeholderShown: {
            color: 'input/text/placeholder'
        }
    },
    indicator: {
        position: "absolute",
        top: "50%", 
        right: rem(15),
        transform: "translateY(-50%)",
        pointerEvents: "none",
        color: 'icon/secondary',
        transition: '200ms',
        _groupFocusWithin: {
            color: 'icon/primary',
        },
        _groupHover: {
            color: 'icon/primary',
        },
        _disabled: {
          color: 'icon/on-disabled',
        },
    },
  },
  variants: {
    size: {
        md: {
            field: { paddingInline: rem(11), paddingBlock: rem(7) },
        },
        lg: {
            field: { paddingInline: rem(15), paddingBlock: rem(11) },
        },
    },
  },
  defaultVariants: {
    size: 'lg',
  },
});

export default select;
