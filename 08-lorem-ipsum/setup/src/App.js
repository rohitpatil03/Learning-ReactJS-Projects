import React, { useRef, useState } from 'react';
import data from './data';
function App() {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState([]);
  
  
  const number_id = useRef(0)

  const clickHandler = (e) => {
    e.preventDefault();
    let value = number_id.current.value;
    if (value < 0 || value > 8){
      setShowModal(true);
      value = 0;
    }
    else {
      setShowModal(false);
    }
    setText(data.slice(0, value));
    console.log(number_id.current.value);
  }

  
  return (
    <>
      
      <section className="section-center">
        {showModal && <Modal />}
        <h3>TIRED OF BORING LOREM IPSUM?</h3>
      </section>
      <form className="lorem-form"  onSubmit={clickHandler}>
        <label>Paragraph : </label>
        <input type="number" ref={number_id} />
        <button className="btn">Generate</button>
      </form>
      <section className="lorem-text">
        {text.map((para, index)=>{
          return(
            <p key={index}>{para}</p>
          );
        })}
      </section>
    </>
  );
}

function Modal(){
  return(
    
    <h4 className='modal'>Enter the number in the range (0 to 8)</h4>
    
  );
}

export default App;
