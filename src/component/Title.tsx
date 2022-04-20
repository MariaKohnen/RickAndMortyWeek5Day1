import "./Title.css";
import {Link} from "react-router-dom";

export default function Title() {
    return <header>
        <div className="logoTitle">
            <img alt="Rick and Morty Icon" src="https://rickandmortyapi.com/icons/icon-512x512.png"/>
            <h1>Rick and Morty</h1>
        </div>
        <div className="menu">
            <Link className="link" to={"/"}> Home </Link>
            <Link className="link" to={"/gallery"}> Gallery </Link>
            <Link className="link" to={"/impressum"}> Impressum </Link>
        </div>
    </header>
}