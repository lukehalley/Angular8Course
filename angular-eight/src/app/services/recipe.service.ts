import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Apple Pie',
      'Really nice.',
      'https://images-gmi-pmc.edge-generalmills.com/173da066-c6b4-45dd-9b28-0d459cf6f169.jpg',
      [new Ingredient('Apples', 4), new Ingredient('Flour', 1)]
    ),
    new Recipe(
      'Chocolate Cake',
      'Very sweet!',
      'https://natashaskitchen.com/wp-content/uploads/2019/05/Chocolate-Cake-Recipe-3.jpg',
      [new Ingredient('Chocolate', 5), new Ingredient('Baking Soda', 1)]
    )
  ];

  constructor() {}

  getRecipes() {
    // slice returns exact copy of the array
    return this.recipes.slice();
  }
}
