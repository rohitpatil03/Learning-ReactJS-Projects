import React, { useContext, useEffect, useReducer } from 'react'

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions'
import reducer from './reducer'

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const initialState = {nbpages:0, pages:0, hits:[], loading:true, query:"REACT"}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  
  const [state, dispatch] = useReducer(reducer, initialState);


  const fetchData = async (url) => {
    setLoading(true);
    const resp = await fetch(url);
    const resData = await resp.json();
    dispatch({type:SET_STORIES, payload: {hits: resData.hits, nbpages: resData.nbPages} });
    setLoading(false)
  }

  const setLoading = (change) =>{
    dispatch({type:SET_LOADING, payload:change})
  }

  const removeStory = (id) =>{
    dispatch({type:REMOVE_STORY, payload:id})
  }

  const handleSearch = (string) =>{
    dispatch({type:HANDLE_SEARCH, payload:string})
  }

  const handlePage = (pageNum) =>{
    dispatch({type:HANDLE_PAGE, payload:pageNum})
  }

  useEffect(()=>{
    fetchData(`${API_ENDPOINT}query=${state.query}&page=${state.pages}`);
  }, [state.query, state.pages])

  return <AppContext.Provider value={{...state, removeStory, handlePage, handleSearch}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
