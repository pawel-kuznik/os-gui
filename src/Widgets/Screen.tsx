import './Screen.css';
import React, { useState } from 'react';
import StartBar from "./StartBar";
import RunningApplication from "./RunningApplication";
import Window from './Window';

/**
 *  The context providing all children information about the number of applications
 *  running right now.
 */
export const RunningApplicationsContext = React.createContext({ applications: 0 });

/**
 *  An internal provider telling how many applications are running right now.
 */
const RunningApplicationsProvider = function({ children } : { children: JSX.Element }) {

    return (
        <RunningApplicationsContext.Provider value={{ applications: 0 }}>
            {children}
        </RunningApplicationsContext.Provider>
    );
};

/**
 *  The component responsible for showing a screen.
 */
export default function Screen() {

    const [ apps, setApplications ] = useState<Array<RunningApplication>>([ ]);

    function handleAppStart(name:string) {

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
        <RunningApplicationsProvider>
            <div className="screen">
                <StartBar onAppStart={handleAppStart}/>
                {[...apps].map(w => (<Window app={w} />) )}
            </div>
        </RunningApplicationsProvider>
    );
};