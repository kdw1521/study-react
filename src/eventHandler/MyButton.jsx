import React, { useState } from "react";

function MyButton(props) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        console.log('handle')
        setIsClicked(true)
    }

    return (
        <div>
            <button onClick={handleClick} disabled={isClicked}>Button</button>
        </div>
    )
}

export default MyButton;