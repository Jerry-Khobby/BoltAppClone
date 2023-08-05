import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { originReducer, destinationReducer } from './reducers';
import ReduxThunk from 'redux-thunk';

const middleware =[ReduxThunk];
const store = configureStore({
  reducer: {
    origin: originReducer,
    destination: destinationReducer
  },
},middleware);

export default store;
