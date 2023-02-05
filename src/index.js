import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore, createSlice} from "@reduxjs/toolkit";
import { Provider } from 'react-redux';



const initialState = {
  value: 0,
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    set: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    }
  },
})
export const store = configureStore({
  reducer: {favorite: favoriteSlice.reducer},
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


