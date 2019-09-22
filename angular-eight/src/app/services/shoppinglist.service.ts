import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Eggs', 2),
    new Ingredient('Milk', 1)
  ];

  constructor() {}

  getRecipes() {
    // slice returns exact copy of the array
    return this.ingredients.slice();
  }

  addIngredientToShoppingList(ing: Ingredient) {
    this.ingredients.push(ing);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
