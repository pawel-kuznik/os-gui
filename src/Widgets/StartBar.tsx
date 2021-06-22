import './StartBar.css';
import { useState } from "react";
import AppsBar from "./StartBar/AppsBar";
import StartButton from './StartBar/StartButton';
import StartMenu from "./StartBar/StartMenu";

/**
 *  Properties for the component.
 */
export interface StartBarProps {
    onAppStart?: (name:string) => void
};

/**
 *  The state object.
 */
interface State {
    menuShown: boolean
};

/**
 *  The component representing a start bar. A bar that holds an icon that shows a list of applications,
 *  and besides this icon a list of currently running applications.
 */
export default function StartBar(props:StartBarProps) {

    const [ state, setState ] = useState<State>({ 
        menuShown: false
    });

    function handleButtonClick() {

        // toggle the menu
        setState(Object.assign({ }, state, { menuShown: !state.menuShown }));
    };

    return (
        <div className="startbar">
            <StartButton onClick={handleButtonClick} />
            <AppsBar/>
            <StartMenu shown={state.menuShown} onStart={(name:string) => props.onAppStart && props.onAppStart(name)} />
        </div> 
    );
};
