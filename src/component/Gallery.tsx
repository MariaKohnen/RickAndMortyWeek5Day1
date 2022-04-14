import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard";

type characterGalleryProps = {
    characters : Character[]
}
export default function Gallery({characters}:characterGalleryProps){
    return <div> {characters.map( obj => <CharacterCard character={obj} />)} </div>
}

