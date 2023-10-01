import React from "react";
import { Link,NavLink } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
const Menu=()=>{
return <div><Link to={"/about"}>Link about </Link>
            <Link to={"/home"}>Link home </Link>
            <Link to={"/contact"}>Link contact</Link>
        </div>;
}
export default Menu ; 