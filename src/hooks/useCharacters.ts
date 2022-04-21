import {useEffect, useState} from "react";
import {Character} from "../model/Character";
import axios from "axios";

export default function useCharacters (){

const [characters, setCharacters] = useState<Character[]>([])

useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character`)
        .then(response => response.data)
        .then(body => setCharacters(body.results))
        .catch(console.error)
},[])

    return {characters, setCharacters}
}