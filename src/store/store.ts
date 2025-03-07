import { configureStore } from '@reduxjs/toolkit';
import casinoGamesReducer from './slices/casinoGames/casinoGamesSlice';

export const store = configureStore({
  reducer: {
    casinoGames: casinoGamesReducer, 
  },
});