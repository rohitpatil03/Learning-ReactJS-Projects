import React from 'react'
import { useRef } from 'react';
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  const valueGrabber = useRef();

  function searchCocktail() {
    setSearchTerm(valueGrabber.current.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text" name='name' id='name' ref={valueGrabber} onChange={searchCocktail}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
