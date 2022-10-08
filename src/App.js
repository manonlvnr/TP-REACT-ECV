import { createContext, useState } from 'react';
import './App.css';
import './styles/lightMode.css';
import './styles/darkMode.css';
import Header from './components/layout/Header';

export  const ModeContext = createContext(null);

function App() {
  const [mode, setMode] = useState("light")

  const toggleMode = () => {
    setMode((curr) => (curr === "light" ? "dark" : "light"))
  }
  return (
    <ModeContext.Provider value={{mode, toggleMode}}>
      <div className="App" id={mode}>
        <Header toggleMode={toggleMode} mode={mode} />
      </div>
    </ModeContext.Provider>
  );
}

export default App;
