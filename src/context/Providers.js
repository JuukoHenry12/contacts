import React, {createContext, useReducer} from 'react';
import authInitialState from './initialsStates/authState'
import ContactInitialState from './initialsStates/ContactState'

import auth from './reducers/auth'
import contacts from './reducers/Contact'

export const GlobalContext=createContext({});

const GlobalProvider=({children})=>{
  const [authState,authdispatch]=useReducer(auth,authInitialState)
  const [contactState,contactdispatch]=useReducer(contacts, ContactInitialState)
  return(
    <GlobalContext.Provider value={{authState,contactState,authdispatch,contactdispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}
export default GlobalProvider;