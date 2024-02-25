import { createSlice } from '@reduxjs/toolkit';
import { fetchAutos, fetchNextAutos, fetchTotalAutos } from './operations';

const autosSlice = createSlice({
  name: 'autos',
  initialState: {
    autos: {
      total: [],
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
    [fetchTotalAutos.pending](state) {
      state.autos.isLoading = true;
    },
    [fetchTotalAutos.fulfilled](state, action) {
      state.autos.isLoading = false;
      state.autos.error = null;
      state.autos.total = action.payload;
    },
    [fetchTotalAutos.rejected](state, action) {
      state.autos.isLoading = false;
      state.autos.error = action.payload;
    },
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

    [fetchNextAutos.pending]: state => {
      state.loading = true;
    },
    [fetchNextAutos.fulfilled]: (state, action) => {
      state.loading = false;
      state.autos.items.push(...action.payload);
    },
    [fetchNextAutos.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
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
      state.favorites = action.payload;
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
