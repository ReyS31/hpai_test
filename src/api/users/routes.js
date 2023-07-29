const routes = (handler) => [
  {
    method: 'POST',
    path: '/api/users',
    handler: handler.postUserHandler,
  },
  {
    method: 'GET',
    path: '/api/users',
    handler: handler.getUsers,
  },
  {
    method: 'GET',
    path: '/api/users/{id}',
    handler: handler.getUserByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/api/users/{id}',
    handler: handler.deleteUserByIdHandler,
  },
];

module.exports = routes;
