import Card from "./Card";
import AddCard from "./AddCard";
import { useState } from "react";

function CardBox(props) {
  const [count, setCount] = useState(props.count);

  const countUp = () => {
    setCount((count) => count + 1);
  }
  const countDown = () => {
    if (count > 0) {
        setCount((count) => count - 1);
    }
  }

  let cards = [];
  for (let i = 0; i < count; i++) {
    if (props.card == "joker") {
      cards.push(<Card key={i} card={props.card} />);
    } else {
      cards.push(<Card key={i} />);
    }
  }

  return (
    <div>
      <div className="CardBox-div">{cards}</div>
      <AddCard add={countUp} sub={countDown} />
    </div>
  );
}

export default CardBox;
