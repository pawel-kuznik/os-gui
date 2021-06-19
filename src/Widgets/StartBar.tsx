import React from "react";
import AppsBar from "./StartBar/AppsBar";
import StartButton from './StartBar/StartButton';
import StartMenu from "./StartBar/StartMenu";
import './StartBar.css';

export default class StartBar extends React.Component {

    private _menu:React.RefObject<StartMenu> = React.createRef<StartMenu>();


    public render() {
        return (
            <div className="startbar">
                <StartButton onClick={this.handleButtonClick.bind(this)} />
                <AppsBar/>
                <StartMenu ref={this._menu} onStart={this.handleAppStart.bind(this)} />
            </div> 
        );
    }

    private handleButtonClick() {

        this._menu.current?.toggle();
    }

    private handleAppStart(name:string) {

        this._menu.current?.hide();

    }
};