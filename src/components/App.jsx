import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layot';
import { FavoritesList } from './FavoritesList/FavoritesList';

const HomePage = lazy(() => import('../pages/Home'));
const CatalogPage = lazy(() => import('../pages/Catalog'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
