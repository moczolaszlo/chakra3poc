import { defineSlotRecipe } from "@chakra-ui/react"
import { rem } from "../themeUtils";

export const list = defineSlotRecipe({
  className: "list",
  slots: ['root', 'item', 'indicator'],
  base: {
    root: {
      "--list-gap": rem(8),
      display: "flex",
      flexDirection: "column",
      gap: "var(--list-gap)",
      "& :where(ul, ol)": {
        marginTop: "var(--list-gap)",
        color: 'blue'
      },
    },
    item: {
      whiteSpace: "normal",
      display: "list-item",
    },
    indicator: {
      marginInlineEnd: "8",
      flexShrink: 0,
      display: "inline-block",
      width: '24',
      height: '24',
    },
  },
  variants: {
    colorScheme: {
      neutral: {
        item: {
          _before: {
            backgroundColor: 'sys/neutral/subtle',
            color: 'sys/neutral/strong',
          },
        },
      },
      purple: {
        item: {
          _before: {
            backgroundColor: 'sys/interactive/subtle',
            color: 'sys/interactive/strong',
          },
        },
      },
    },
    variant: {
      ordered: {
        root: {
          counterReset: 'count',
          marginInlineStart: rem(36),    
        },
        item: {
          position: 'relative',
          counterIncrement: 'count',
          _before: {
            content: 'counter(count)',
            position: 'absolute',
            textAlign: 'center',
            textStyle: 'comp/badge/sm',
            borderRadius: '50%',
            left: `-${rem(36)}`,
            top: 0,
            paddingY: '4',
            width: '24',
          },
    
        }
      },
      'simple-ordered': {
        root: {
          listStyle: "decimal",
          marginInlineStart: '16',
        },
      },
      unordered: {
        root: {
          listStyle: "inherit",
          marginInlineStart: '16',
        },
      },
      unstyled: {
        root: {
          listStyle: "none",
        },
      },
    },
  },

  defaultVariants: {
    colorScheme: "neutral",
    variant: "unordered",
  },
})

export default list