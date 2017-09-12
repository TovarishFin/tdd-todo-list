import { combineReducers, createStore } from 'redux';
import todoListApp from './reducers/root';

const reducers = combineReducers({
  todoListApp,
});

export default createStore(reducers);
