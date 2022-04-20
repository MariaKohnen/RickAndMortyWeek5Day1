import "./Homepage.css"
import {Link} from "react-router-dom";

export default function Homepage () {
    return <div className="homepage">
        <Link className="link" to={"/gallery"}>
            <img className="header" src="Rick_and_Morty_title_card.png" alt="Rick and Morty Card" /></Link>

    </div>
}