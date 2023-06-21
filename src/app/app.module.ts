import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { RecipeListComponent } from './RecipeBook/recipe-list/recipe-list.component'
import { RecipeDetailsComponent } from './RecipeBook/recipe-details/recipe-details.component'
import { RecipeItemComponent } from './RecipeBook/recipe-list/recipe-item/recipe-item.component'
import { ShoppingListComponent } from './Shopping/shopping-list/shopping-list.component'
import { ShoppingEditComponent } from './Shopping/shopping-edit/shopping-edit.component'
import { RecipeComponent } from './RecipeBook/recipe.component'
import { DropdownDirective } from './shared/dropdown.directive'
import { HeaderComponent } from './header/header.component'
import { RecipeService } from './services/recipe.service'
import { ShoppingListService } from './services/shopping-list.service'
import { RecipeStartComponent } from './RecipeBook/recipe-start/recipe-start.component'
import { EditRecipeComponent } from './RecipeBook/edit-recipe/edit-recipe.component'

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        RecipeComponent,
        RecipeListComponent,
        RecipeDetailsComponent,
        RecipeItemComponent,
        ShoppingListComponent,
        ShoppingEditComponent,
        DropdownDirective,
        RecipeStartComponent,
        EditRecipeComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule, AppRoutingModule],
    providers: [RecipeService, ShoppingListService],
    bootstrap: [AppComponent],
})
export class AppModule {}
