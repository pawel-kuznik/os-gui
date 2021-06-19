import React from "react";
import "./Application.css";

export interface ApplicationProps {
    appName:string,
    onClick?:(name:string) => void
};

export default class Application extends React.Component<ApplicationProps> {

    public render() {
        return (
            <div className="startbar-startmenu-application" onClick={this.handleClick.bind(this)}>
                {this.props.appName}
            </div> 
        );
    }
    
    private handleClick() {
        if (this.props.onClick) this.props.onClick(this.props.appName);
    }
};