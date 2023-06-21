import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  id:number
  constructor(private recipeService: RecipeService, private route:ActivatedRoute){}
  
  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  addToShoppingList(){
    this.recipeService.addToShoppingCart(this.recipe);
    alert('Added to shopping list');
  }
}
