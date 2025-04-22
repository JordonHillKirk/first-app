import { useState } from "react";
import { Link } from "react-router-dom";
import ShowMore from "../ShowMore";

function RecipeCard(props) {
    const [showMore, setShowMore] = useState(false);

    const toggleText = () => {
        setShowMore(!showMore);
    }

    return (
        <div className="card card--recipe">
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description">{showMore ? props.description : props.description.slice(0, 50) + "..."}</p>
            <ShowMore func={toggleText} text="Read"/>
            <Link to={props.link} className="card__link">View Recipe</Link>
        </div>
    );
}

export default RecipeCard;