import React from "react";
import { Link,NavLink } from "react-router-dom";
import image from "../pictures/1.jpg";
const Menu=()=>{
return <div><Link to={"/about"}>Link about </Link>
            <Link to={"/"}>Link home </Link>
            <Link to={"/contact"}>Link contact</Link>
            <img src={image} alt="Image" />;
        </div>;
}
export default Menu ; 