import React from 'react';
import './App.css';
import Console from './Apps/Console';
import PackagesProvider from './PackagesProvider';
import Screen from './Widgets/Screen';

const packagesProvider = PackagesProvider.getInstance();
packagesProvider.register(new Console());

export const PackagesContext = React.createContext(packagesProvider);

export default function App() {
  return (
    <PackagesContext.Provider value={packagesProvider}>
      <Screen/>
    </PackagesContext.Provider>
  );
}
