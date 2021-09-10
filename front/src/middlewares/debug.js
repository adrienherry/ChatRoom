const debugMiddleware = (store) => (next) => (action) => {
  console.log('DEBUG: ', action);
  next(action);
};

export default debugMiddleware;
