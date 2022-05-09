import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    const response = await fetch(url);
    const tours = await response.json();
    console.log(tours);
    setLoading(false);
    setTours(tours);
  }

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  useEffect(()=>{
    fetchTours();
  }, []);

  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    );
  }
  if (tours.length == 0){
    return(
      <main>
        <div className='title'>
          <h2>No Tours Left</h2>
          <button className='btn' onClick={fetchTours}>Refresh</button>

        </div>
      </main>
    );
  }
  return(
    <main>
      <Tours tours={tours} removeTours={removeTours}/>
    </main>
  );
}

export default App
