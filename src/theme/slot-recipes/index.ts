import field from "./Field.recipe"
import list from "./List.recipe"
import select from "./Select.recipe"

const slotRecipes = {
  field,
  list,
  nativeSelect: select
};

export default slotRecipes;