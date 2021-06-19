import React from "react";
import StartBar from "./StartBar";
import './Screen.css';
import Window from './Window';

interface ScreenState {
    apps:Set<Window>;
};

export default class Screen extends React.Component<any, ScreenState> {

    constructor(props:any) {
        super(props);

        this.state = {
            apps: new Set()
        };
    }

    public render() {
        return (
            <div className="screen">
                <StartBar onAppStart={this.handleAppStart.bind(this)}/>
            </div>
        );
    };

    private handleAppStart(name:string) {

        // @todo handle an app start. We will write it in a way that it updates
        // start with Window instance. This window instance will be provisioned
        // with application uuid which will point to a special object containing
        // an iframe with the application running. We will make sure that we can
        // detach thes iframes and then attach them when needed again. Communication
        // between the application and the main one will be done via message
        // port api.
    }
};