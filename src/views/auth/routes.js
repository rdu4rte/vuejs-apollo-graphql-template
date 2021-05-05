export default [
  {
    path: '/signup',
    name: 'Register',
    component: () => import('./pages/Register')
  },
  {
    path: '/signin',
    name: 'Login',
    component: () => import('./pages/Login')
  }
]
