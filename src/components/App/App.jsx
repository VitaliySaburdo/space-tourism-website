import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout';
import {
  HomePage,
  DestinationPage,
  CrewPage,
  TechnologyPage,
  NotFoundPage,
} from '../../pages';
import data from '../../db/data.json';

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
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
