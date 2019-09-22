import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinglistService } from 'src/app/services/shoppinglist.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private shoppingListService: ShoppinglistService) {}

  ngOnInit() {}

  onAddToShoppingList(ingredients: Ingredient[]) {
    ingredients.forEach(ing => {
      this.shoppingListService.addIngredientToShoppingList(ing);
      console.log('added: ' + ing.name + ' ' + ing.amount);
    });
  }
}
