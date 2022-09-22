import { Routes, Route } from 'react-router-dom';

import { HomePage } from '../pages/HomePage';
import { RentPage } from '../pages/RentPage';
import { SalePage } from '../pages/SalePage';
import { AboutPage } from '../pages/AboutPage';
import { PropertyPage } from '../pages/PropertyPage';

import { Layout } from './Layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/App.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='rent' element={<RentPage />} />
        <Route path='sale' element={<SalePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='properties/:id' element={<PropertyPage />} />
      </Route>
    </Routes>
  );
}

export { App };
