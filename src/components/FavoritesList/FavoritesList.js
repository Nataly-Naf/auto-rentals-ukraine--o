import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectFavorites } from 'redux/selectors';
import { AutoCard } from 'components/AutoCard/AutoCard';
import { AutoList } from './FavoriteList.styled';
import { setFavorites } from 'redux/autosSlice';
import { FilterForm } from 'components/FormikForm/FormikForm';
import {
  selectBrandFilter,
  selectMaxMileageFilter,
  selectMinMileageFilter,
  selectPriceFilter,
} from 'redux/selectors';
export const FavoritesList = () => {
  const dispatch = useDispatch();

  const favoritesAutos = useSelector(selectFavorites);
  useEffect(() => {
    const favoritesFromStorage =
      JSON.parse(localStorage.getItem('favorites')) || [];
    dispatch(setFavorites(favoritesFromStorage));
  }, [dispatch]);

  const brandFilter = useSelector(selectBrandFilter);
  const priceFilter = useSelector(selectPriceFilter);
  const minMileage = useSelector(selectMinMileageFilter);
  const maxMileage = useSelector(selectMaxMileageFilter);
  const filteredAutos = favoritesAutos.filter(auto => {
    if (brandFilter && auto.make !== brandFilter) {
      return false;
    }
    if (priceFilter) {
      const autoPrice = parseFloat(auto.rentalPrice.replace('$', ''));
      if (autoPrice > parseFloat(priceFilter)) {
        return false;
      }
    }
    if (minMileage && auto.mileage < parseInt(minMileage, 10)) {
      return false;
    }
    if (maxMileage && auto.mileage > parseInt(maxMileage, 10)) {
      return false;
    }
    return true;
  });

  return (
    <>
      <FilterForm />
      <AutoList>
        {filteredAutos.map(auto => {
          return <AutoCard key={auto.id} onCard={auto} />;
        })}
      </AutoList>
    </>
  );
};
