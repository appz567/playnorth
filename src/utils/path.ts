import { CategoryProps } from "@/store/slices/casinoGames/types";

export const getPageByCategoryName = ( categories: CategoryProps[], slug: string ) => {
  const category = categories.find( cat => cat.name.toLowerCase() === slug?.toLowerCase() );
  return category ? category.getPage : '';
}

export const getGameCollection = (categories: CategoryProps[], slug: string ) => {
    const category = categories.find( cat => cat.name.toLowerCase() === slug.toLowerCase() );
    return category ? category.path : '';
}