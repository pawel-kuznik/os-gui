import { useState } from "react";
import RunningApplication from "./RunningApplication";
import './Window.css';

export interface WindowProps {
    app:RunningApplication,
    box?:WindowBox
}

export interface WindowBox {
    top:number,
    left:number,
    width:number,
    height:number,
};

interface WindowState {
    box:WindowBox
};

export default function Window(props:WindowProps) {

    const [ state, setState ] = useState<WindowState>({ 
        box: props.box || { 
            top: 50,
            left: 50,
            width: 640,
            height: 480
        }
    });

    const styles = {
        top:    state.box.top,
        left:   state.box.left,
        with:   state.box.width,
        height: state.box.height
    };

    return (
        <div className="window" style={styles}/>
    );
};
