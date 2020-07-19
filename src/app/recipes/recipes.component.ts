import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  RecipesDetailArray :Recipe[]=[];
  recipeDetail:Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  AddToD(recipe:Recipe){
    console.log('from recipe',recipe)
    this.RecipesDetailArray.push(recipe)
  }
}
