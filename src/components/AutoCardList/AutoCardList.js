import { useDispatch, useSelector } from 'react-redux';
import {
  selectAutos,
  selectBrandFilter,
  selectMaxMileageFilter,
  selectMinMileageFilter,
  selectPriceFilter,
  selectTotalAutos,
} from 'redux/selectors';
import { AutoCard } from 'components/AutoCard/AutoCard';
import { AutoList, LoadButton } from './AutoCardList.styled';
import { FilterForm } from 'components/FormikForm/FormikForm';
import { fetchNextAutos } from 'redux/operations';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const AutosList = () => {
  const autos = useSelector(selectAutos);
  const total = useSelector(selectTotalAutos);
  const brandFilter = useSelector(selectBrandFilter);
  const priceFilter = useSelector(selectPriceFilter);
  const minMileage = useSelector(selectMinMileageFilter);
  const maxMileage = useSelector(selectMaxMileageFilter);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const handleLoadMore = async () => {
    try {
      await dispatch(fetchNextAutos(page + 1));
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error fetching autos:', error);
    } finally {
    }
  };

  const filteredAutos = autos.filter(auto => {
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
  const hasMoreAutos = autos.length < total.length;

  return (
    <div>
      <FilterForm />
      <AutoList>
        {filteredAutos.map(auto => {
          return <AutoCard onCard={auto} key={nanoid()} />;
        })}
      </AutoList>

      {filteredAutos.length > 0 && hasMoreAutos && (
        <LoadButton onClick={handleLoadMore}>Load</LoadButton>
      )}
    </div>
  );
};
