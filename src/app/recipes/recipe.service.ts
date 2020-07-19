import { Injectable,EventEmitter } from "@angular/core";
import { Recipe } from '../recipes/recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service'

@Injectable()
export class RecipeService {
    recipes: Recipe[] = [
        new Recipe('tuna', 'tuna with spicy', 'https://c1.wallpaperflare.com/preview/896/3/821/tuna-grilled-bbq-food.jpg',[new Ingredient('tuna',2),new Ingredient('salt',0.25)]),
        new Recipe('chicken', 'salty tasty chicken', 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Roast_chicken.jpg',[new Ingredient('chiken',4),new Ingredient('peper',0.75)]),
        new Recipe('rice', 'rice with onion and mushrooms', 'https://live.staticflickr.com/1827/42935315011_8556b74ab1_b.jpg',[new Ingredient('rice',3),new Ingredient('turmerc',0.10)])
    ];
    SelectedRecipe = new EventEmitter<Recipe>();

    constructor(private ShoppingListService:ShoppingListService){}

    getRecipes() {
        return this.recipes.slice();
    }
    AddToShoppingListFromRecipe(ingredients:Ingredient[]){
        for (let index = 0; index < ingredients.length; index++) {
            console.log('from recipe service',ingredients[index])
            this.ShoppingListService.AddToIngredients(ingredients[index]);      
        }
        
    }

}