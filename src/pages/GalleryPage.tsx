import React, {ChangeEvent, useEffect, useState} from "react";
import {Character} from "../model/Character";
import ActionBar from "../component/ActionBar";
import Gallery from "../component/Gallery";

export type GalleryPageProps = {
    characters : Character[]
}

export default function GalleryPage({characters} : GalleryPageProps) {

    const [count, setCount] = useState<string>("");
    const [searchText, setSearchText] = useState<string>("");


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

