import './App.css';
import './switcher.scss';
import Card from './components/Card';
import ThemeButtons from './components/ThemeButtons';
import { useState, useEffect } from 'react';

function App() {
  //state
  const [theme, setTheme] = useState('white-theme')

  useEffect(()=>{
    //check current theme store in cache/local storage
    const currentTheme = localStorage.getItem('theme');

    //if found some value, set it to default
    if(currentTheme){
      setTheme(currentTheme);
    }
  }, []);

  const handleThemeClick = (theme) => {
    setTheme(theme.target.id);
    localStorage.setItem('theme', theme.target.id);
  }

  return (
    <div className={`App ${theme}`}>
      <ThemeButtons theme = {theme} handleThemeClick={ ()=>handleThemeClick}/>
      <section className='section'>
        <Card />
      </section>
    </div>
  );
}

export default App;
