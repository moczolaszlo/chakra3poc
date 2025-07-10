import { defineRecipe, RecipeDefinition, SystemStyleObject } from "@chakra-ui/react"
import { rem } from "../themeUtils";
import { inputConfig } from './Input.recipe';

const config: RecipeDefinition<Record<'size', Record<any, SystemStyleObject>>> = {
  className: 'textarea',
  base: {
    ...inputConfig.base,
    display: 'block',
    minHeight: '96',
  },
  defaultVariants: {
    size: 'lg',
  },
  variants: {
    size: {
      md: { paddingInline: rem(11), paddingBlock: rem(7) },
      lg: { paddingInline: rem(15), paddingBlock: rem(11) },
    },
  },
};

const textarea = defineRecipe(config);

export default textarea;
