import { useContext } from 'react';
import { PackagesContext } from '../../App';
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

    // @todo this shouldn't use PackagesContext. Instead it should use a registry of installed applications.

    const apps = useContext(PackagesContext).listApplications().map((name:string) => (<Application key={name} appName={name} onClick={(name:string) => props.onStart && props.onStart(name)}/>));

    return (
        <div className={classes.join(' ')}>
            {apps}
        </div> 
    );
};
