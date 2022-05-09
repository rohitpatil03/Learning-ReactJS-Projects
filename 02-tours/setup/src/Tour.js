import React, { useState } from 'react';

const Tour = ({tours, removeTour}) => {
  return(
    tours.map((tour)=>{
      const {id, image, info, name, price} = tour;
      return(
        <article key={id} className='single-tour'>
          <img src={image} />
          <footer>
            <div className='tour-info'>
              <h4>{name}</h4>
              <h4 className='tour-price'>{price}</h4>
            </div>
            <p>{info}</p>
            <button className='delete-btn' onClick={() => removeTour(id)}>
              Not Interested
            </button>
          </footer>
          
        </article>
      );
    })
  );
};

export default Tour;
