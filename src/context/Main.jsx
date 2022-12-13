import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Main(props) {

    const [theme, toggleTheme] = useContext(ThemeContext);

    return (
        <div style={{
            backgroundColor: theme === "light" ? "white" : "#000000",
            color: theme === "light" ? "#000000" : "white"
        }}>
            <h3>Main</h3>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default Main;