import React, { useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  loading: true,
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({type:'loading'})
    dispatch({type:'cart', payload:cart})
    dispatch({type:'total'});
    dispatch({type:'count'});
  }

  useEffect(()=>{
    fetchData();
  }, [])
  
  

  const increaseItemCount = (id) => {
    dispatch({type:'increase', payload:id})
    dispatch({type:'count'});
    dispatch({type:'total'});
  }

  const decreaseItemCount = (id) => {
    dispatch({type:'decrease', payload:id})
    dispatch({type:'count'});
    dispatch({type:'total'});
  }


  const clearCart = () => {
    dispatch({type:'clear'})
    dispatch({type:'count'});
    dispatch({type:'total'});
  }

  const removeItem = (id) => {
    dispatch({type:'remove', payload:id})
    dispatch({type:'count'});
    dispatch({type:'total'});
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        increaseItemCount,
        decreaseItemCount,
        clearCart,
        removeItem
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
