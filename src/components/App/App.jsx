// import './App.scss';
// import { Navigate, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout';
import {
  HomePage,
  DestinationPage,
  CrewPage,
  TechnologyPage,
  NotFound,
} from '../../pages';
import data from '../../db/data.json';

// const Home = lazy(() => import('../pages/Home'));
// const Register = lazy(() => import('../pages/Register'));
// const Login = lazy(() => import('../pages/Login'));
// const Contacts = lazy(() => import('../pages/Contacts'));

function App() {
  const { destinations, crew, technology } = data;
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="destination"
            element={<DestinationPage data={destinations} />}
          />
          <Route path="crew" element={<CrewPage data={crew} />} />
          <Route
            path="technology"
            element={<TechnologyPage data={technology} />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
