import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
    const { id } = useParams();

    return (
        <div className="recipe-detail">
            <h1 className="recipe-detail__title">Recipe {id}</h1>
            <p className="recipe-detail__text">More details about recipe {id}...</p>
            <Link to="/" className="recipe-detail__link">Back to Recipes</Link>
        </div>
    );
}

export default RecipeDetail;