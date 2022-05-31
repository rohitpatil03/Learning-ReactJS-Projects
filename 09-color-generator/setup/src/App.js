import React, { useRef, useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

let initial_color = new Values("#f15025").all(10);

function App() {
  const [list, setList] = useState(initial_color);
  const [error, setError] = useState(false);

  const value_grab = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(value_grab.current.value).all(10);
      //console.log(colors);
      setError(false);
      setList(colors);
    } catch (error) {
      setError(true);
    }
    
    //console.log(value_grab.current.value);
  }

  return (
    <>
      <section className="section-center">
        <h2>Colour Generator</h2>
        <input type="text" placeholder='#f15025'ref={value_grab} className={`${error ? 'error':null}`}/>
        <button className='btn' onClick={(e)=>handleSubmit(e)}>Submit</button>
      </section>
      <br/>
      <section className='colors'>
        {list.map((color, index)=>{
          return(
            <SingleColor key={index} index={index} color_obj={color}/>
          );
        })}
      </section>
    </>
  );
}

export default App
