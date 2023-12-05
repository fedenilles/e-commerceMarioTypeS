import { Dispatch, createContext } from 'react'
import { CartAccion, CartState } from './cartReducer'

interface CartContextType{
    state: CartState;
    dispatch: Dispatch<CartAccion>
}

export const CartContext = createContext({} as CartContextType)