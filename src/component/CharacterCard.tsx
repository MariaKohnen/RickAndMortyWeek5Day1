import {Character} from "../model/Character";
import "./CharacterCard.css"
import React, {MouseEventHandler, useState} from "react";
import {useNavigate} from "react-router-dom";

type CharacterProps = {
    character: Character;
}

export default function CharacterCard({character}: CharacterProps) {

    const [count, setCount] = useState<number>(0);
    const navi = useNavigate();

    const onCardClick = () => {
        navi(`/character/${character.id}`);
    }

    const onButtonClick : MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        setCount(count + 1);
    }

    return <div id="CharacterCard" onClick={onCardClick}>
        <div className="characterText">{character.name}</div>
        <img src={character.image} alt={"Picture of " + character.name}/>
        <div className="characterText">{character.location.name}</div>
        <div>
            <button onClick={onButtonClick}>{count} likes</button>
        </div>
    </div>
}