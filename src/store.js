import { createStore, applyMiddleware } from 'redux';

import { reducers } from "./reducers/combinedReducers";

import logger from 'redux-logger';

let middleware = applyMiddleware(logger);

export const store = createStore(reducers, middleware);