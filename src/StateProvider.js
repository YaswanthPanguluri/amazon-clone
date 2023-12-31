//Setup Data Layer
// We need this to track the basket
import { createContext,useContext,useReducer } from "react";

// This is the Data Layer
export const StateContext = createContext();

// build a provider 
export const StateProvider = ({reducer , initialState, children}) => 
 <StateContext.Provider value={useReducer(reducer,initialState)} >
    {children}
 </StateContext.Provider>

 export const useStateValue = () => useContext(StateContext);