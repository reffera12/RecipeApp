import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RecipeComponent } from './RecipeBook/recipe.component'
import { RecipeDetailsComponent } from './RecipeBook/recipe-details/recipe-details.component'
import { ShoppingListComponent } from './Shopping/shopping-list/shopping-list.component'
import { ShoppingEditComponent } from './Shopping/shopping-edit/shopping-edit.component'
import { RecipeStartComponent } from './RecipeBook/recipe-start/recipe-start.component'
import { EditRecipeComponent } from './RecipeBook/edit-recipe/edit-recipe.component'

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/recipes',
        pathMatch: 'full',
    },
    {
        path: 'recipes',
        component: RecipeComponent,
        children: [
            {
                path: '',
                component: RecipeStartComponent,
            },
            {
                path: 'new',
                component: EditRecipeComponent,
            },
            {
                path: ':id/edit',
                component: EditRecipeComponent,
            },
            {
                path: ':id',
                component: RecipeDetailsComponent,
            },
        ],
    },
    {
        path: 'shopping-list',
        component: ShoppingListComponent,
        children: [
            {
                path: 'edit',
                component: ShoppingEditComponent,
            },
        ],
    },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
