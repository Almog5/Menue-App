import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  constructor() { }
  recipes: Recipe[] = [
    new Recipe('tuna', 'tuna with spicy', 'https://c1.wallpaperflare.com/preview/896/3/821/tuna-grilled-bbq-food.jpg'),
    new Recipe('chicken', 'salty tasty chicken', 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Roast_chicken.jpg'),
    new Recipe('rice', 'rice with onion and mushrooms', 'https://live.staticflickr.com/1827/42935315011_8556b74ab1_b.jpg')
  ]
  @Output() AddToD = new EventEmitter<Recipe>();

  ngOnInit(): void {
  }

  AddToDetail(recipe: Recipe) {
    this.AddToD.emit(recipe)
    console.log('from recipe list', recipe)
  }

}
