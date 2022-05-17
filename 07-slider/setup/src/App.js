import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    const lastIndex = data.length - 1;
    if(index<0){
      setIndex(lastIndex);
    }
    if(index>data.length - 1){
      setIndex(0);
    }
  }, [index])

  useEffect(()=>{
    let slider = setInterval(()=>{
      setIndex(index+1);
    }, 3000)
    
    return () => clearInterval(slider);
  }, [index])

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>
          Reviews
        </h2>
      </div>
      <div className='section-center'>
        {data.map((dat, personIndex)=>{
          const {id, image, name, title, quote} = dat;
          let position = "nextSlide";
          if (personIndex === index){
            position = "activeSlide";
          }
          if(personIndex === index-1 || (index === 0 && personIndex === data.length - 1)){
            position = "lastSlide";
          }
          return(
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img"/>
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className='icon'/>
            </article>
          );
        })}
        <button className="prev" onClick={()=>setIndex(index-1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={()=>setIndex(index+1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
