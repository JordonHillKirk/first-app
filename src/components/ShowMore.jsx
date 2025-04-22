import { useState } from "react";

const ShowMore = (props) => {
    const [showMore, setShowMore] = useState(props.state ? props.state : false);

    const toggleShowMore = () => {
        setShowMore(!showMore)
        props.func()
    }

    return (
        <button
            onClick={toggleShowMore}
            className="card__button card__button--toggle"
        >
            {showMore ? (props.text ? props.text + " Less": "Show Less") : (props.text ? props.text + " More": "Show More")}
        </button>
    );
};

export default ShowMore;
