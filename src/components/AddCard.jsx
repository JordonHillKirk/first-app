

function AddCard(props) {
    return (
        <div>
            <button onClick={props.add}>Add Card</button>
            <button onClick={props.sub}>Remove Card</button>
        </div>
    )
}

export default AddCard;