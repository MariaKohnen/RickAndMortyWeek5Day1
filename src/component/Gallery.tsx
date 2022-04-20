import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard";
import "./Gallery.css"

type characterGalleryProps = {
    characters : Character[]
}

export default function Gallery({characters}:characterGalleryProps){
    return <div id="gallery">
        {characters.length
            ? characters.map( obj => <CharacterCard character={obj} />)
            : <div> Deine Suche ergab kein Ergebnis!</div>
        }
    </div>
}

