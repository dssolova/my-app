import React from "react";
import { Link,NavLink } from "react-router-dom";
const Menu=()=>{
return <div><Link to={"/about"}>Link about </Link>
            <Link to={"/"}>Link home </Link>
            <Link to={"/contact"}>Link contact</Link>
        </div>;
}
export default Menu ; 