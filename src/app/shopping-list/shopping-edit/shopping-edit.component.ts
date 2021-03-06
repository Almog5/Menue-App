import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service'
 

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  

  constructor(private ShoppingListService:ShoppingListService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const ing = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.ShoppingListService.AddToIngredients(ing)
  }

}
