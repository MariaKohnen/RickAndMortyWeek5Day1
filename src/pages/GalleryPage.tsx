import React, {ChangeEvent, useEffect, useState} from "react";
import {Character} from "../model/Character";
import {fetchCharacters} from "../services/RickAndMortyApiService";
import Title from "../component/Title";
import ActionBar from "../component/ActionBar";
import Gallery from "../component/Gallery";

export default function GalleryPage() {

    const [count, setCount] = useState<string>("");
    const [searchText, setSearchText] = useState<string>("");
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        getCharactersFromApi()
    }, [])

    const getCharactersFromApi = () => {
        fetchCharacters('https://rickandmortyapi.com/api/character')
            .then(response => {
                setCharacters(response.results)
            })
            .catch(console.error)
    }

    const onButtonClick = () => {
        setCount(searchText);
    }

    const onSearchTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    }

    const filterCharacter = characters.filter(obj => obj.name.toLocaleLowerCase().includes(count.toLocaleLowerCase()));

    return (
        <div>
            <ActionBar onSearchTextChange={onSearchTextChange} onButtonClick={onButtonClick} />
            <Gallery characters={filterCharacter}/>
        </div>
    );
}

