import React, { createContext, useContext, useReducer } from 'react'


const MainContext = createContext()

const initialState = {
  background: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_URL':
      return {...state,
              background: 'http://image.tmdb.org/t/p/original/' + action.data
              }
    default:
      return state
  }
}

export const Provider = ({children}) => (
    <MainContext.Provider value={useReducer(reducer,initialState)}>
      {children}
    </MainContext.Provider>
  )


export const useData = () => useContext(MainContext)
