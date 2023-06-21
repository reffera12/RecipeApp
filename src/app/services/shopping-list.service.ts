import { Injectable } from '@angular/core'
import { Ingredient } from '../models/ingredient'
import { Subject } from 'rxjs/internal/Subject'

@Injectable({
    providedIn: 'root',
})
export class ShoppingListService {
    constructor() {}
    ingredientsChanged = new Subject<Ingredient[]>()

    ingredients: Ingredient[] = [
        new Ingredient('banana', 10),
        new Ingredient('apple', 20),
    ]

    getIngredients() {
        return this.ingredients.slice()
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChanged.next(this.ingredients.slice())
    }
}
