import React from "react";
import Cart from "./CartWidget";

const NavBar = () => {

    
    return(
        <div>
            
            <nav id="Navigation" >
                <h1 id="Logo">FreeApp</h1>
                <a id="link">Smartphone</a>
                <a id="link">Notebooks</a>
                <a id="link">Gamming</a>
                <Cart/>
            </nav>

        </div>
    );
}

export default NavBar