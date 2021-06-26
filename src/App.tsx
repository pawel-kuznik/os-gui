import React, { useState } from 'react';
import './App.css';
import PackagesProvider from './State/PackagesProvider';
import Screen from './Widgets/Screen';

/**
 *  The context responsible for sharing information about the packages
 *  for the whole application.
 */
export const PackagesContext = React.createContext({
  packages: 0
});

/**
 *  An internal state provider to supply information about the packages and make sure
 *  that this information is always up to date for whole application.
 */
const StateProvider = function ({ children }: { children: JSX.Element}) {
  
  const [ packages, setPackages ] = useState(PackagesProvider.getInstance().size);

  PackagesProvider.getInstance().on('change', () => {

    setPackages(PackagesProvider.getInstance().size);    
  });

  return (
    <PackagesContext.Provider value={{ packages }}>
      {children}
    </PackagesContext.Provider>
  )
};

/**
 * The actual application component.
 */
export default function App() {

  return (
    <StateProvider>
        <Screen/>
    </StateProvider>
  );
}



 