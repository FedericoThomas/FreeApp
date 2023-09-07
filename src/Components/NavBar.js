import React from "react";
import Cart from "./CartWidget";

const NavBar = () => {

    
    return(
        <div>  
            <nav id="Navigation" >
                <h1 id="Logo">FreeApp</h1>
                <a href="#" id="link">Smartphone</a>
                <a href="#" id="link">Notebooks</a>
                <a href="#" id="link">Gamming</a>
                <Cart/>
            </nav>

        </div>
    );
}

export default NavBar