import PackagesProvider from '../../State/PackagesProvider';
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

    const apps = PackagesProvider
        .getInstance()
        .listApplications()
        .map((name:string) => (
            <Application key={name} appName={name} onClick={(name:string) => props.onStart && props.onStart(name)}/>
        ));


    // @todo make sure that we can update the list when we need (when a list of applications changes).

    return (
        <div className={classes.join(' ')}>
            {apps}
        </div> 
    );
};
