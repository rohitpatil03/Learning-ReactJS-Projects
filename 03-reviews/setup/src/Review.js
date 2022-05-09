import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);

  const {name, job, image, text} = people[index];
  

  function forward(index){
    if ((index+1) <= (people.length-1)){
      setIndex(index+1);
    }
    else{
      setIndex(0);
    }
  }

  function backward(index){
    if ((index-1) >= 0){
      setIndex(index-1);
    }
    else{
      setIndex((people.length-1));
    }
  }

  function random(index){
    let randomNumber = Math.floor(Math.random()*people.length);
    if (index === randomNumber){
      random(index);
    }
    else{
      setIndex(randomNumber);
    }
  }


  return (
    <article className='review'>
      <div className="img-container">
        <img src={image}  alt={name} className="person-img"/>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h3>{name}</h3>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className="button-container">
        <button className='prev-btn' onClick={()=>backward(index)}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={()=>forward(index)}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={()=>random(index)}>Surprise Me</button>
    </article>
  );
};

export default Review;
