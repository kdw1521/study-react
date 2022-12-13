import React from "react";

function Header(props) {

    const {isLoggedIn, onSignOut, onSignIn} = props;

    return (
        <div>
            <h3>Header Title</h3>

            {isLoggedIn ? (
                <button onClick={onSignOut}>Sign Out</button>
            ) : (
                <button onClick={onSignIn}>Sign In</button>
            )}
        </div>
    );
}

export default Header;