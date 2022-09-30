import { createStore, compose, applyMiddleware } from 'redux';
import allReducer from '../reducers';
import thunk from 'redux-thunk';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(allReducer, composeEnhancer(applyMiddleware(thunk)));
export default store;
