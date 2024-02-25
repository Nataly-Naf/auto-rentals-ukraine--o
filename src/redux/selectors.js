export const selectAutos = state => state.autos.autos.items;
export const selectTotalAutos = state => state.autos.autos.total;

export const selectFavorites = state => state.autos.favorites;

export const selectIsLoading = state => state.autos.autos.isLoading;
export const selectError = state => state.autos.autos.error;
export const selectBrandFilter = state => state.autos.filters.brandFilter;
export const selectPriceFilter = state => state.autos.filters.priceFilter;
export const selectMinMileageFilter = state => state.autos.filters.fromMileage;
export const selectMaxMileageFilter = state => state.autos.filters.toMileage;
