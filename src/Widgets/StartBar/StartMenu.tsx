import React from "react";
import Application from "./StartMenu/Application";
import './StartMenu.css';

export interface StartMenuProps {
    onStart?:(name:string) => void
};

interface StartMenuState {
    shown:boolean
};

export default class StartMenu extends React.Component<StartMenuProps, StartMenuState> {

    constructor(props:StartMenuProps) {
        super(props);

        this.state = { shown: false };
    }

    public render() {
        return (
            <div className={this.state.shown ? 'startbar-startmenu startbar-startmenu-shown' : 'startbar-startmenu'}>
                <Application appName="console" onClick={this.handleApplicationClick.bind(this)}/>
            </div> 
        );
    }

    public toggle() {

        return this.state.shown ? this.hide() : this.show();
    }

    public show() {

        this.setState(Object.assign({ }, this.state, {
            shown: true
        }));
    }

    public hide() {

        this.setState(Object.assign({ }, this.state, {
            shown: false
        }));
    }

    private handleApplicationClick(name:string) {

        if (this.props.onStart) this.props.onStart(name);
    }
};