import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//Initial State
const initialState= {
    transactions: [
       { id:1, text: 'Flower',amount: -20},
       { id:2, text: 'Fruit',amount: 300},
       { id:3, text: 'Vegetable',amount: -10},
    ]
}


//create Context
export const GlobalContext = createContext(initialState);


//Other componets to access to our store,global state we need a provider
//provider component
export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
          type: 'DELETE_TRANSACTION',
          payload: id
        });
      }
    
      function addTransaction(transaction) {
        dispatch({
          type: 'ADD_TRANSACTION',
          payload: transaction
        });
      }
    return(<GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>
        {children}
    </GlobalContext.Provider>);

}
