import React from 'react';

const List = ({people}) => {
  function to_seperate(person){
    const {id, name, age, image} = person;
    return(
      <article key={id} className='person'>
        <img src={image} />
        <div>
          <h2>{name}</h2>
          <h3>{age}</h3>
        </div>
      </article>
    )
  }
  
  return (
    <React.Fragment>
      {people.map(to_seperate)}
    </React.Fragment>
  );
};

export default List;
