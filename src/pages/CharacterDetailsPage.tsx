import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Character} from "../model/Character";
import "./CharacterDetailsPage.css"

type CharacterGalleryProps = {
    characters: Character[]
}

export default function CharacterDetailsPage({characters}: CharacterGalleryProps) {

    const navigate = useNavigate();
    const param = useParams();
    const id = param.id

    if (id === undefined) {
        navigate("/gallery")
        return (<div></div>)
    }

    const character = characters.find(obj => obj.id.toString() === id)

    if (character === undefined) {
        return (<div></div>)
    }

    const onButtonClick = () => {
        navigate("/gallery")
    }

    return (
        <div className="detailPage"><h1>{character.name}</h1>
            <div className="containerDetailPage">
                <img src={character.image} alt={"Picture of " + character.name}/>
                <div className="details"><p>Status:</p><p> {character.status}</p>
                    <p>Species:</p><p> {character.species}</p>
                    <p>Gender: </p><p>{character.gender}</p>
                    <p>Location: </p><p>{character.location.name}</p>
                    <button onClick={onButtonClick}>Back to Gallery</button>
                </div>
            </div>

        </div>
    )
}

