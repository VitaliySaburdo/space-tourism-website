// import './App.scss';
// import { Navigate, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout';
import { Home } from '../../pages';

// const Home = lazy(() => import('../pages/Home'));
// const Register = lazy(() => import('../pages/Register'));
// const Login = lazy(() => import('../pages/Login'));
// const Contacts = lazy(() => import('../pages/Contacts'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/destination" />
        <Route path="/crew" />
        <Route path="/technologies" />
      </Route>
    </Routes>
  );
}

export default App;
