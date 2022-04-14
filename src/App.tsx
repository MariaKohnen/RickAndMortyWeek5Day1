import React from 'react';
import './App.css';
import Title from "./component/Title";
import {exportedDatas} from "./repo/Datas";
import Gallery from "./component/Gallery";

export default function App() {
  return (
    <div>

      <Title />
        <Gallery characters = {exportedDatas} />

    </div>
  );
}

