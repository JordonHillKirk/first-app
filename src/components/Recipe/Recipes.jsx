import ShowMore from "../ShowMore";
import RecipeCard from "./RecipeCard";
import { useState } from "react";
import recipeList from "../../assets/recipies.json";

const Recipes = () => {

    const shortList = recipeList.slice(0, 4);

    const [recipes, setRecipes] = useState(shortList);
    const [short, setShort] = useState(false);

    const toggleRecipeCount = () => {
        setShort(!short)
        if (short)
            setRecipes(shortList)
        else
            setRecipes(recipeList)
    }
    
    return (
        <div className="recipes">
            <h1 className="recipes__title">Recipe Showcase</h1>
            <div className="recipes__grid">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} title={recipe.title} description={recipe.description} link={recipe.link} />
                ))}
            </div>
            <ShowMore func={toggleRecipeCount} />
        </div>
    );
}

export default Recipes;