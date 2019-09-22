import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../services/shoppinglist.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppinglistService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getRecipes();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  // onIngredientAdded(ing: Ingredient) {
  //   this.shoppingListService.addIngredientToShoppingList(ing);
  // }
}
