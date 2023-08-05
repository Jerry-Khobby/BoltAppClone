 import {createSlice} from '@reduxjs/toolkit'
 
 
 
 
 const initialState ={
    latitude:null,
    longitude:null,
};
 

//the reducer for the origin ; where the user is standing 
const originSlice = createSlice({
  name: 'origin',
  initialState,
  reducers: {
    setOriginLocation: (state, action) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});
  

//currently when you suing redux, we dont create reducers  oo
// we create slides 

  // the destination reducers , where the user is heading towards 
  const destinationSlice = createSlice({
    name: 'destination',
    initialState,
    reducers: {
      setDestinationLocation: (state, action) => {
        state.latitude = action.payload.latitude;
        state.longitude = action.payload.longitude;
      },
    },
  });


export const { setOriginLocation } = originSlice.actions;
export const { setDestinationLocation } = destinationSlice.actions;

export const originReducer = originSlice.reducer;
export const destinationReducer = destinationSlice.reducer;