import {Character} from "../model/Character";
import "./CharacterCard.css"

type CharacterProps = {
    character : Character;
}



export default function CharacterCard({character} : CharacterProps) {
    return <div id="CharacterCard"><div>{character.name}</div>
        <img src={character.image} alt={character.image}/>
        <div>{character.location.name}</div>
    </div>
}