import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Title from "./component/Title";
import Gallery from "./component/Gallery";
import {Character} from "./model/Character";

export default function App() {

    const [count, setCount] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [characters, setCharacters] = useState<Character[]>([]);


    const fetchCharacters = () => {
        return fetch('https://rickandmortyapi.com/api/character')
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Network error")
            })
            .catch(console.error)
    }

    useEffect(() => {
        fetchCharacters()
            .then(body => setCharacters(body.results))
    }, [])

    const onButtonClick = () => {
        setCount(text);
    }

    const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setText(event.target.value);
    }

    const filterCharacter = characters.filter(obj => obj.name.toLocaleLowerCase().includes(count.toLocaleLowerCase()));

    return (
        <div>
            <Title/>
            <div><input onChange={onTextChange}/>
                <button onClick={onButtonClick}>Charackter filtern</button>
            </div>
            {filterCharacter.length
                ? <Gallery characters={filterCharacter}/>
                : <div>Deine Suche ergab kein Ergebnis
                    <Gallery characters={characters}/></div>
            }
        </div>
    );
}

