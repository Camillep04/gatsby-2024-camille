import React from "react"
import camille from "../images/camille.png";
import github from "../images/github.png";
import insta from "../images/insta.png";
import discord from "../images/discord.png";
//module Link de gatsby pour les liens entre les pages
import { Link } from "gatsby"

export default function Page2() {
  return (
    <div className="body">
        <div className="test">
            <div className="conteneur">
                <h1 className="titre">Camille Prothin</h1>
                <img src={camille} alt="camille" className="img" />
                <p className="texte">Je suis actuellement en 3ème année de BUT MMI en spécialité développement web. Alternante chez <Link className="lien" to="https://www.ciweb.nc/">Ciweb</Link></p>
                <div className="reseaux">
                    <p>Retrouvez-moi sur mes réseaux</p>
                    <div className="logos">
                        <a href="https://www.instagram.com/p___camille/?igshid=NGVhN2U2NjQ0Yg%3D%3D"><img src={insta} alt="insta logo" className="logo" /></a>
                        <a href="https://discord.com/"><img src={discord} alt="discord logo" className="logo" /></a>
                        <a href="https://github.com/Camillep04"><img src={github} alt="github logo" className="logo" /></a>
                    </div>
                </div>
            </div>
            <div>
                <p className="acc">Clique <Link className="lien" to="/"> ICI </Link> pour voir ce que le monde veut dire haut et fort</p>
            </div>
        </div>
  	</div>
  );
}