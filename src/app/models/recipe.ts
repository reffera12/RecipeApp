import { Ingredient } from "./ingredient";

export class Recipe{
    title:string;
    description:string;
    imagePath:string;
    ingredients:Ingredient[];

    constructor(title:string,description:string,imagePath:string, ingredients:Ingredient[]){
        this.title = title;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}