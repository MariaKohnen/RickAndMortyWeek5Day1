import {Character} from "../model/Character";

type CharacterProps = {
    character : Character;
}



export default function CharacterCard({character} : CharacterProps) {
    return <div><div>{character.name}</div>
        <img src={character.image} alt={character.image}/>
        <div>{character.location.name}</div>
    </div>
}