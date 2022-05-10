import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({details, question}) => {
  const [moreinfo, setMoreinfo] = useState(false);

  console.log(question);

  if (moreinfo){
    return (
      <article className='question'>
        <header>
          <h4>{question}</h4>
          <button className='btn' onClick={()=>setMoreinfo(false)}>
            <AiOutlineMinus />
          </button>
        </header>
        <p>{details}</p>
      </article>
    );
  }

  return (
    
      <article className='question'>
        <header>
          <h4>{question}</h4>
          <button className='btn' onClick={()=>setMoreinfo(true)}>
            <AiOutlinePlus />
          </button>
        </header>
        
      </article>
    
  );
};

export default Question;
