import logo from './logo.svg';
import './App.css';
import React from 'react';

// Создаем контекст для текущего года
const YearContext = React.createContext();

export const App = () => {
  const currentYear = new Date().getFullYear();

  return (
    <YearContext.Provider value={currentYear}>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>Hello, World & welcome !</h1>
          <CurrentYear />
        </header>
      </div>
    </YearContext.Provider>
  );
};

const CurrentYear = () => {
  const year = React.useContext(YearContext);
  return <p>Сейчас: {year} год.</p>;
};
