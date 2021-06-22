import './StartMenu.css';
import Application from "./StartMenu/Application";

/**
 *  Properties for the component.
 */
export interface StartMenuProps {
    onStart?:(name:string) => void,
    shown?:boolean
};

/**
 *  A component responsible for showing a list of installed applications that user can run.
 */
export default function StartMenu(props:StartMenuProps) {

    const classes = [ 'startbar-startmenu' ];
    if (props.shown) classes.push('startbar-startmenu-shown');

    return (
        <div className={classes.join(' ')}>
            <Application appName="console" onClick={(name:string) => props.onStart && props.onStart(name)}/>
        </div> 
    );
};
