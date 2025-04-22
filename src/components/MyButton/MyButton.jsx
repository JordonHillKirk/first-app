import { useState } from 'react'
import "./MyButton.css"

function MyButton({ start }) {
    const [count, setCount] = useState(start)
    
    return <button class="myButton" onClick={() => setCount((count) => count += 1)}>
        {count}
    </button>
}

export default MyButton;