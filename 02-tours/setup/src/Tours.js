import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTours}) => {
  return(
    <>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        <Tour tours={tours} removeTour={removeTours}/>
      </div>
    </>
  );
};

export default Tours;
