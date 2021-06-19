import React from "react";
import StartBar from "./StartBar";
import './Screen.css';

export default class Screen extends React.Component {

    public render() {
        return (
            <div className="screen">
                <StartBar/>
            </div>
        );
    };

};