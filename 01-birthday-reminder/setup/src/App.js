import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  function to_clear(){
    setPeople([]);
  }
  return (
    <React.Fragment>
      <main>
        <section className='container'>
          <h3>{people.length} Birthdays Today</h3>
          <List people={people}/>
          <button onClick={() => to_clear()}> Clear All </button>
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;
