import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
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

  ngOnInit() {}
}
