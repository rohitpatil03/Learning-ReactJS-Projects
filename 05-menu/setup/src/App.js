import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menu, setMenu] = useState(items);
  const [category, setCategory] = useState('');
  

  

  const button_handler = (event) => {
    if (event === 'all'){
      setMenu(items);
    }
    else{
      const newCategory= items.filter((item)=>item.category === event);
      console.log(newCategory);
    
      setMenu(newCategory);
    }
    
    
  }
  
  return (
    <main>
      <section className='menu section'>
        <div className="title">
          <h3>Our Menu</h3>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
            <button className='filter-btn' onClick={()=>button_handler('all')}>All</button>
            <button className='filter-btn' onClick={()=>button_handler('breakfast')}>Breakfast</button>
            <button className='filter-btn' onClick={()=>button_handler('lunch')}>Lunch</button>
            <button className='filter-btn' onClick={()=>button_handler('shakes')}>Shakes</button>
          </div>
          
          <Menu display={menu} />
          
      </section>
    </main>
  );
}

export default App;
