import { createBrowserRouter } from 'react-router';
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Pages/Home/Home';
import Service from '../Pages/Services/Service';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Registration/Register';
import ServiceDetails from '../Pages/Service Details/ServiceDetails';
import MyProfile from '../Pages/My Profile/MyProfile';
import PrivateRoutes from '../Private Routes/PrivateRoutes';
import ForgetPassword from '../Pages/ForgetPassword/ForgetPassword';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/service',
        Component: Service,
      },
      {
        path: '/services/:id',
        element: (
          <PrivateRoutes>
            <ServiceDetails></ServiceDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register,
      },
      {
        path: '/myProfile',
        element: (
          <PrivateRoutes>
            <MyProfile></MyProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: '/forget-password',
        Component: ForgetPassword
      },
    ],
  },
]);
