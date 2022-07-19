import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const {pages, nbpages, handlePage} = useGlobalContext();

  const handlePrev = () =>{
    if (pages==0){
      handlePage(nbpages-1)
    }
    else{
      handlePage(pages-1);
    }
  }

  const handleNext = () =>{
    if (pages+1==nbpages){
      handlePage(0)
    }
    else{
      handlePage(pages+1);
    }
  }

  return (
    <div className="btn-container">
      <button onClick={handlePrev}>Prev</button>
      <p>{pages+1} of {nbpages}</p>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Buttons
