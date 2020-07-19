import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service'
import {RecipeService} from '../recipe.service'

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  constructor(private ShoppingListService: ShoppingListService, private RecipeService:RecipeService) { }

  @Input() RecipeD: Recipe;

  ngOnInit(): void {
    console.log('from recipe details', this.RecipeD)
  }

  AddToIng() {
    this.RecipeService.AddToShoppingListFromRecipe(this.RecipeD.ingredients)
  }

}
