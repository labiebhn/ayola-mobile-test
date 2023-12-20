import ActivateAccount from '../features/auth/screens/activate-account';
import Login from '../features/auth/screens/login';
import Register from '../features/auth/screens/register';
import Home from '../features/core/screens/home';

export const publicRoutes = [
  {
    key: 'login',
    name: 'login',
    component: Login,
    options: {headerShown: false},
  },
  {
    key: 'register',
    name: 'register',
    component: Register,
    options: {title: 'Daftar'},
  },
  {
    key: 'activate-account',
    name: 'activate-account',
    component: ActivateAccount,
    options: {title: 'Aktivasi Akun'},
  },
];

export const privateRoutes = [
  {
    key: 'home',
    name: 'home',
    component: Home,
    options: {headerShown: false},
  },
];
