import React, {MouseEventHandler} from "react";
import {ChangeEventHandler} from "react";
import "./ActionBar.css"

export type ActionBarProps = {
    onSearchTextChange : ChangeEventHandler<HTMLInputElement>
    onButtonClick : MouseEventHandler;
}


export default function ActionBar({onSearchTextChange, onButtonClick} : ActionBarProps) {
    return <div className="actionBar"><input onChange={onSearchTextChange}/>
        <button onClick={onButtonClick}>Charackter filtern</button>
    </div>
}