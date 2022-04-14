import {Character} from "../model/Character";
import "./CharacterCard.css"

type CharacterProps = {
    character : Character;
}

export default function CharacterCard({character} : CharacterProps) {
    return <div id="CharacterCard"><div className="characterText">{character.name}</div>
        <img src={character.image} alt={"Picture of " + character.name}/>
        <div className="characterText">{character.location.name}</div>
    </div>
}