import "./Application.css";

/**
 *  A component to show the application item inside the start menu.
 *  @todo add handling for icon
 */
export default function Application({ appName, onClick }:ApplicationProps) {
    return (
        <div className="startbar-startmenu-application" onClick={() => onClick && onClick(appName)}>
            {appName}
        </div> 
    );
}

export interface ApplicationProps {
    appName:string,
    onClick?:(name:string) => void
};
