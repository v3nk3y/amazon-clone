import React, { createContext, useContext, useReducer } from "react";

// Prep the DataLayer
export const StateContext = createContext();

// Wrap the app and provide the DataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull the info from the DataLayer
export const useStateValue = () => useContext(StateContext);
