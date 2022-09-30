import empcrudReducer from './empcrud-reducer';
import todosReducer from './todo-reducer';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
  employee: empcrudReducer,
  todo: todosReducer,
});
export default allReducer;
