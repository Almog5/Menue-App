import { Injectable,EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'



export class ShoppingListService{
    ingredientsChanged=new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 3)
      ];

      getIngredients(){
          return this.ingredients.slice()
      }

      AddToIngredients(ingredient: Ingredient) {
        console.log('Ingredient', ingredient)
        this.ingredients.push(ingredient)
        this.ingredientsChanged.emit(this.ingredients.slice())
        console.log('from shooping service ',this.ingredients.slice())
      }
}