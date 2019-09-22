import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Apple Pie',
      'Really nice.',
      'https://images-gmi-pmc.edge-generalmills.com/173da066-c6b4-45dd-9b28-0d459cf6f169.jpg'
    ),
    new Recipe(
      'Chocolate Cake',
      'Very sweet!',
      'https://natashaskitchen.com/wp-content/uploads/2019/05/Chocolate-Cake-Recipe-3.jpg'
    )
  ];

  constructor() {}

  getRecipes() {
    // slice returns exact copy of the array
    return this.recipes.slice();
  }
}
