import {Character} from "../model/Character";
import "./CharacterCard.css"
import React, {useState} from "react";

type CharacterProps = {
    character : Character;
}


export default function CharacterCard({character} : CharacterProps) {
/*
    const [count, setCount] = useState<number>(0);

    console.log(count);

    const onButtonClick = () => {
        console.log("Click me!");
        setCount(count + 1);
    }

 */
    return <div id="CharacterCard"><div className="characterText">{character.name}</div>
        <img src={character.image} alt={"Picture of " + character.name}/>
        <div className="characterText">{character.location.name}</div>


    </div>
}

//<div><button onClick={onButtonClick}>{count} likes</button></div>