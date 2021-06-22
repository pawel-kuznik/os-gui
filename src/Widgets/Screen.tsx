import './Screen.css';
import { useState } from 'react';
import StartBar from "./StartBar";
import RunningApplication from "./RunningApplication";
import Window from './Window';

/**
 *  The component responsible for showing a screen.
 */
export default function Screen() {

    const [ apps, setApplications ] = useState<Array<RunningApplication>>([ ]);

    function handleAppStart(name:string) {

        console.log('start app', name);

        setApplications([...apps, new RunningApplication() ]);

        // @todo handle an app start. We will write it in a way that it updates
        // start with Window instance. This window instance will be provisioned
        // with application uuid which will point to a special object containing
        // an iframe with the application running. We will make sure that we can
        // detach thes iframes and then attach them when needed again. Communication
        // between the application and the main one will be done via message
        // port api.
    };

    return (
        <div className="screen">
            <StartBar onAppStart={handleAppStart}/>
            {[...apps].map(w => (<Window app={w} />) )}
        </div>
    );
};