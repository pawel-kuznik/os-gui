import React from "react";
import './Window.css';

export interface WindowProps {
    title:string,
    x:number,
    y:number,
    width:number,
    height:number
}

export interface WindowState {
    x:number,
    y:number,
    width:number,
    height:number
};

export default class Window extends React.Component<WindowProps, WindowState> {

    constructor(props:WindowProps) {
        super(props);

        this.state = props;
    }

    public render() {

        const styles = {
            top:    this.state?.y,
            left:   this.state?.x,
            with:   this.state?.width,
            height: this.state?.height
        };

        return (
            <div className="window" style={styles} />
        );
    }

    public move(x:number, y:number) {

        this.setState(Object.assign({ }, this.state, { x, y }));
    }

    public resize(width:number, height:number) {

        this.setState(Object.assign({ }, this.state, { width, height }));
    }
};