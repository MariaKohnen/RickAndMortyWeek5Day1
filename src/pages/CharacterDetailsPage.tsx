import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Character} from "../model/Character";
import "./CharacterDetailsPage.css"

export default function CharacterDetailsPage() {

    const [currentCharacter, setCurrentCharacter] = useState<Character>(Object);
    const param = useParams();
    const id = param.id

    useEffect(() => {
        fetchSingleCharacter()
            .then(body => setCurrentCharacter(body))
    }, [])

    const fetchSingleCharacter = () => {
        return fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Error while loading characters from Rick and Morty API!")
            })
            .catch(console.error)
    }

    return (
        <div className="containerDetailPage">
            <div><img src={currentCharacter.image} alt={"Picture of " + currentCharacter.name}/></div>
            <div><h1>{currentCharacter.name}</h1>
            </div>
        </div>
    )
}

/* useEffect () => {
axios.get(`https://rickandmortyapi.com/api/character`)
.then(response => response.date)
.then(body => setCharacters(body.results))
.catch(console.error)
}, [])
 */