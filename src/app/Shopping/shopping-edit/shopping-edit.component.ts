import { Component } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  name:string;
  quantity:number;
  ingredient: Ingredient;

  constructor(private shoppingService: ShoppingListService){}
  

  onAdded(){
    this.ingredient = new Ingredient(this.name, this.quantity)
    this.shoppingService.addIngredient(this.ingredient)
    
  }
}
