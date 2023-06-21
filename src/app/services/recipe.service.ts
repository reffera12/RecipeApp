import { Injectable } from '@angular/core'
import { Recipe } from '../models/recipe'
import { Ingredient } from '../models/ingredient'
import { ShoppingListService } from './shopping-list.service'

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    recipes: Recipe[] = [
        new Recipe(
            'Meatballs',
            'A delicious and simple recipe for meatballs!',
            'https://th.bing.com/th/id/OIP.0SDnsm5Frgq42vcZFx3RUwHaHa?pid=ImgDet&rs=1',
            [
                { name: 'mincedmeat', quantity: 500 },
                { name: 'eggs', quantity: 2 },
                { name: 'onion', quantity: 1 },
                { name: 'spices', quantity: 1 },
                { name: 'bread', quantity: 2 },
            ]
        ),
    ]

    constructor(private shoppingService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice()
    }

    getRecipe(id: number) {
        return this.recipes[id]
    }

    addRecipe(
        title: string,
        description: string,
        imagePath: string,
        ingredients: Ingredient[]
    ) {
        this.recipes.push(
            new Recipe(title, description, imagePath, ingredients)
        )
    }

    addToShoppingCart(recipe: Recipe) {
        recipe.ingredients.forEach((ingredient) => {
            this.shoppingService.addIngredient(ingredient)
        })
    }
}
