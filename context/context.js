import React,{createContext,useReducer} from 'react';
import { originReducer,destinationReducer } from '../reducers/reducers';


export const OriginContext =createContext();
export const DestinationContext =createContext();


//defining how the context should look like 

export const OriginContextProvider=(props)=>{
    const [origin,dispatchOrigin]=useReducer(originReducer,{
        latitude:null,
        longitude:null,
    })
    return(
        <OriginContextProvider.Provider
        value={{origin,dispatchOrigin}}>
            {props.children}
        </OriginContextProvider.Provider>
    )
}


export const DestinationContextProvider = (props)=>{
    const[destination,dispatchDestination] =useReducer(destinationReducer,{
                latitude:null,
                longitude:null,
    })
    return(
        <DestinationContext.Provider
                value ={{destination,dispatchDestination}}
            >
            {props.children}
        </DestinationContext.Provider>
    )
}