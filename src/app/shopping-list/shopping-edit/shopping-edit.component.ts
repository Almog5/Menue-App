import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() AddToIn = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const ing = new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value);
    this.AddToIn.emit(ing)
  }

}
