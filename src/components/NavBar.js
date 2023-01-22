import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkBtns = links.map((link) =>{
    return <a key={link} href={"#" + link}>{link}</a>
  })

  return <nav>{linkBtns}</nav>
}

export default NavBar;
