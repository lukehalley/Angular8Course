import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinglistService } from 'src/app/services/shoppinglist.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppinglistService) {}

  ngOnInit() {}

  onAddIngredient() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmnt = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmnt);
    this.shoppingListService.addIngredientToShoppingList(newIngredient);
  }
}
