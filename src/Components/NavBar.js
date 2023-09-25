import React from "react";
import Cart from "./CartWidget";
import {Link} from "react-router-dom";

const NavBar = () => {

    
    return(
        <div>  
            <nav id="Navigation" >
                <Link to="/"><h1 id="Logo">FreeApp</h1></Link>
                <Link to="/category/smartphone" id="link">Smartphone</Link>
                <Link to="/category/notebook" id="link">Notebooks</Link>
                <Link to="/category/gamming" id="link">Gamming</Link>
                <Cart/>
            </nav>

        </div>
    );
}

export default NavBar