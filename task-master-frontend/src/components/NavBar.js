import React from "react";
import { NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <>
        <header>
            <nav>
                <NavLink to ='/home'>Home</NavLink>
                <NavLink to ='/tasks'>Tasks</NavLink>
                <NavLink to ='/projects'>Projects</NavLink>
                <NavLink to ='/profile'>Profile</NavLink>
                <NavLink to ='/contact'>Contact</NavLink>
                <NavLink to ='/login'>Login</NavLink>
                
            </nav>
        </header>
        </>
    )
}

export default NavBar;