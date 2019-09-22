import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeRecieved = new EventEmitter<Recipe>();

  recipes: Recipe[];

  constructor(private recipieService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipieService.getRecipes();
  }

  onRecipeRecieved(recipeElement: Recipe) {
    this.recipeRecieved.emit(recipeElement);
  }
}
