import { createSlice } from '@reduxjs/toolkit';
import { fetchAutos } from './operations';

const autosSlice = createSlice({
  name: 'autos',
  initialState: {
    autos: {
      items: [],
      isLoading: false,
      error: null,
    },
    filters: {
      brandFilter: '',
      priceFilter: null,
      fromMileage: null,
      toMileage: null,
    },
    favorites: [],
  },
  extraReducers: {
    [fetchAutos.pending](state, action) {
      state.autos.isLoading = true;
    },
    [fetchAutos.fulfilled](state, action) {
      state.autos.isLoading = false;
      state.autos.error = null;
      state.autos.items = action.payload;
    },
    [fetchAutos.rejected](state, action) {
      state.autos.isLoading = false;
      state.autos.error = action.payload;
    },
  },
  reducers: {
    setBrandFilter(state, action) {
      state.filters.brandFilter = action.payload;
    },
    setPriceFilter(state, action) {
      state.filters.priceFilter = action.payload;
    },
    setFromMileage(state, action) {
      state.filters.fromMileage = action.payload;
    },
    setToMileage(state, action) {
      state.filters.toMileage = action.payload;
    },
    addToFavorites(state, action) {
      state.favorites.push(action.payload);
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(
        auto => auto.id !== action.payload.id
      );
    },
    setFavorites(state, action) {
      state.favorites = action.payload; // установка списка избранных автомобилей из локального хранилища
    },
  },
});
export const autosReducer = autosSlice.reducer;
export const {
  setBrandFilter,
  setPriceFilter,
  setFromMileage,
  setToMileage,
  addToFavorites,
  removeFromFavorites,
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  setFavorites,
} = autosSlice.actions;
