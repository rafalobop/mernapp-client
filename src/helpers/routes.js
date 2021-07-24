const routes = {
  home: '/',
  login: '/login',
  register: '/register',
  account: '/account',
  proyects: '/proyects',
  proyect: (proyectId) =>
    proyectId ? `/proyects/:${proyectId}` : '/proyects/:proyectId',
  admin: {
    users: '/admin/users',
  },
};

export default routes;
