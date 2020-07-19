import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  constructor() { }

  @Input() RecipeD:Recipe;

  ngOnInit(): void {
    console.log('from recipe details', this.RecipeD) 
  }

}
