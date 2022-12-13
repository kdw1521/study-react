import React, { useState } from "react";

function useCount() {
    const [count, setCount] = useState(0);

    const plus = () => setCount(count => count + 1);
    const minus = () => setCount(count => count - 1);

    return [count, plus, minus];
}

export default useCount;