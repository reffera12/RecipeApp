import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Ingredient } from 'src/app/models/ingredient'
import { Recipe } from 'src/app/models/recipe'
import { RecipeService } from 'src/app/services/recipe.service'

class ImageSnippet {
    constructor(public src: string, public file: File) {}
}

@Component({
    selector: 'app-edit-recipe',
    templateUrl: './edit-recipe.component.html',
    styleUrls: ['./edit-recipe.component.css'],
})
export class EditRecipeComponent implements OnInit {
    recipes: Recipe[]
    id:number
    title: string
    description: string
    imagePath: string
    ingredients: Ingredient[]
    editMode: boolean

    selectedFile: ImageSnippet
    file: File

    constructor(private recipeService: RecipeService, private route:ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe((params:Params)=>{
            this.id = params['id'];
            this.editMode = params['id'] != null
        });
        console.log(this.id);
    }

    addRecipeItem() {
        this.recipeService.addRecipe(
            this.title,
            this.description,
            this.imagePath,
            this.ingredients
        )
        this.recipes = this.recipeService.getRecipes()
    }

    onFileUpload(event) {
        this.file = event.target.files[0]
        const reader = new FileReader()

        reader.readAsDataURL(this.file)

        reader.onload = (event) => {
            this.imagePath = reader.result.toString()
        }
    }
}
