import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import reducers from './reducers';
import triangleValidationMiddleware from './middlewares/triangleValidationMiddleware';

const middleware = applyMiddleware(triangleValidationMiddleware, logger);
export default createStore(reducers, middleware);