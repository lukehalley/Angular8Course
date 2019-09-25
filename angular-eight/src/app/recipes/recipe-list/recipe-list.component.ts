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
      'Butter',
      'Really creamy',
      'https://www.abelandcole.co.uk/media/7574_17265_z.jpg'
    ),
    new Recipe(
      'Milk',
      'Not so creamy',
      'https://upload.wikimedia.org/wikipedia/commons/0/0e/Milk_glass.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {}
}
