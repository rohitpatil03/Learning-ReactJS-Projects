const reducer = (state, action) => {
    switch (action.type) {
        case 'count':
            
            let total_items = 0;
            state.cart.forEach(item => {
                total_items = total_items + item.amount;
            });
            return {
                ...state,
                amount : total_items
            }

        case 'increase':
            
            const tempCart = state.cart.map((item)=>{
                if (item.id === action.payload){
                    return { ...item, amount: item.amount + 1 }
                }
                return item
            })
            return {
                ...state,
                cart : tempCart
            }
            
        case 'decrease':
            
            const tempcart = state.cart
                .map((cartItem) => {
                  if (cartItem.id === action.payload) {
                    return { ...cartItem, amount: cartItem.amount - 1 }
                  }
                  return cartItem
                })
                .filter((cartItem) => cartItem.amount !== 0)
            return { ...state, cart: tempcart }

        case 'total':
            
            let total_amount = 0;
            state.cart.forEach(item => {
                total_amount = total_amount + (item.amount * item.price)
            });
            return {
                ...state,
                total : total_amount
            }

        case 'clear':
            
            return {
                ...state, cart : []
            }
        case 'remove':
            
            return {
              ...state,
              cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
            }
        case 'loading':
            
            return {
              ...state,
              loading:false
            }
        case 'cart':
            
            return {
              ...state,
              cart:action.payload,
              loading:false
            }
        default:
            break;
    }
}

export default reducer