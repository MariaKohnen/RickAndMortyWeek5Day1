import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import GalleryPage from "./pages/GalleryPage";
import Title from "./component/Title";
import Homepage from "./pages/Homepage";
import Impressum from "./pages/Impressum";
import CharacterDetailsPage from "./pages/CharacterDetailsPage";
import useCharacters from "./hooks/useCharacters";

export default function App() {

    const {characters, setCharacters} = useCharacters();

    return (
        <BrowserRouter>
            <Title/>
            <Routes>
                <Route path={"/"} element={<Homepage/>}/>
                <Route path={"/gallery"} element={<GalleryPage characters={characters}/>}/>
                <Route path={"/impressum"} element={<Impressum/>}/>
                <Route path={"/character/:id"} element={<CharacterDetailsPage characters={characters}/>}/>
            </Routes>
        </BrowserRouter>
    )

}

