import React from "react"
//module Link de gatsby pour les liens entre les pages
import { Link } from "gatsby"

export default function Page2() {
  return (
    <div>
    	<h1>Page 2</h1>
    	<Link to="/">Accueil</Link>
  	</div>
  );
}