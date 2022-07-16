import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

const getStorageTheme = () =>{
  let theme = 'light-theme';
  if (localStorage.getItem('theme')){
    theme = localStorage.getItem('theme');
  }
  return theme
}

function App() {
  const [info, setInfo] = useState(data);
  const [theme, setTheme] = useState(getStorageTheme());

  const handleClick = () =>{
    if (theme === "light-theme"){
      setTheme('dark-theme');
    }
    else{
      setTheme('light-theme');
    }
  }

  useEffect(()=>{
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme])

  return (
    <main>
      <nav className="nav-center">
        <h1>Overreacted</h1>
        <button className="btn" onClick={handleClick}>Toggle</button>
      </nav>
      <div className='articles'>
          {info.map((item)=>{
            return(
              <Article key={item.id} {...item}/>
            );
          })}
      </div>
    </main>
  );
}

export default App
