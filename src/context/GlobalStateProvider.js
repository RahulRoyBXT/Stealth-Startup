import {useState, createContext, useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
// Custom hook to use the global state
const GlobalStateContext = createContext();

export const useGlobalState = () => {
    return useContext(GlobalStateContext)
}


// Provider component

export const GlobalStateProvider = ({children }) =>{
    const [state, setState] = useState();
    return(
        // Pass the state and the setState function to the provider
        <GlobalStateContext.Provider value = {{state, setState}}>
        {children }
        </GlobalStateContext.Provider>
    )
}

// Prop types validation for the provider component
GlobalStateProvider.propTypes = {
    children : PropTypes.node.isRequired, // Children is a required node
}
