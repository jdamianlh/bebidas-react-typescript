import axios from "axios";
import { CategoriesAPIResponseSchema, DrinksAPIResponse, RecipeAPIResponseSchema } from "../utils/recipes-schema";
import { SearchFilter, Drink } from "../types";

const urlCocktail = 'https://www.thecocktaildb.com/api/json/v1/1/'

export async function getCategories() {
    const url = `${urlCocktail}list.php?c=list`
    const {data} = await axios(url)
    const result = CategoriesAPIResponseSchema.safeParse(data)
    
    if(result.success){
        return result.data
    }
}

export async function getRecipes(filters: SearchFilter){
    const url = `${urlCocktail}filter.php?c=${filters.category}&i=${filters.ingredient}`
    const {data} = await axios(url)
    const result = DrinksAPIResponse.safeParse(data)
    if(result.success){
        return result.data
    }
}

export async function getRecipeById(id: Drink['idDrink']){
    const url = `${urlCocktail}lookup.php?i=${id}`
    const {data} = await axios(url)
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
    
    if(result.success){
        return result.data
    }
        
}