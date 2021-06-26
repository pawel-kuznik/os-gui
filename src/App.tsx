import React, { useContext, useState } from 'react';
import './App.css';
import PackagesProvider from './State/PackagesProvider';
import Screen from './Widgets/Screen';

const StateContext = React.createContext({
  packages: 0
});

export default function App() {

  return (
    <StateProvider>
        <Screen/>
    </StateProvider>
  );
}

const StateProvider = ({ children }: { children: JSX.Element}) => {
  
  const [ packages, setPackages ] = useState(PackagesProvider.getInstance().size);

  /*
  // @todo use iventy for event system of package provider (or some kind of observer pattern)
  PackagesProvider.getInstance().on('change', () => {

    setPackages(PackagesProvider.getInstance().size);    
  });
  */

  return (
    <StateContext.Provider value={{ packages }}>
      {children}
    </StateContext.Provider>
  )
}
 