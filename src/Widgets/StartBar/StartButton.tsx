import React, { SyntheticEvent } from "react";
import './StartButton.css';

export interface StartButtonProps {
    onClick?:() => void
};

export default class StartButton extends React.Component<StartButtonProps> {

    public render() {
        return (
            <button className="startbar-startbutton" onClick={this.handleClick.bind(this)}>
                Start
            </button>
        );
    }

    private handleClick(e:SyntheticEvent) {

        if (this.props.onClick) this.props.onClick();
    }
};