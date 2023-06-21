import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { Ingredient } from 'src/app/models/ingredient'
import { ShoppingListService } from 'src/app/services/shopping-list.service'

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[]
    private igSubs:Subscription

    constructor(private shoppingService: ShoppingListService){}

    ngOnInit(){
        this.ingredients = this.shoppingService.getIngredients()
        this.igSubs = this.shoppingService.ingredientsChanged.subscribe((ingredients:Ingredient[])=>{
            this.ingredients = ingredients;
        });
    }
    ngOnDestroy(): void {
        this.igSubs.unsubscribe();
    }
}
