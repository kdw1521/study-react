import React, { useState } from "react";
import Header from "./Header";

function Index(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onSignOut = () => {
        setIsLoggedIn(false);
    }

    const onSignIn = () => {
        setIsLoggedIn(true);
    }

    return (
       <div>
        <Header 
            isLoggedIn={isLoggedIn} 
            onSignOut={onSignOut} 
            onSignIn={onSignIn} 
        />
       </div> 
    )
}

export default Index;