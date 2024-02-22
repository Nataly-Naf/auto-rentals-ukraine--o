import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectFavorites } from 'redux/selectors';
import { AutoCard } from 'components/AutoCard/AutoCard';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import { AutoList } from './FavoriteList.styled';
import { setFavorites } from 'redux/autosSlice';
// import { selectFilteredContacts } from 'redux/selectors';
export const FavoritesList = () => {
  const dispatch = useDispatch();

  const favoritesAutos = useSelector(selectFavorites);
  console.log(favoritesAutos);
  useEffect(() => {
    const favoritesFromStorage =
      JSON.parse(localStorage.getItem('favorites')) || [];
    dispatch(setFavorites(favoritesFromStorage));
  }, [dispatch]);

  return (
    <>
      <AutoList>
        {favoritesAutos.map(auto => {
          return <AutoCard onCard={auto} />;
        })}
      </AutoList>
      <LoadMoreButton />
    </>
  );
};
