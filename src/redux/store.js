// src/redux/store.js
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import taskReducer from './reducers';

const store = createStore(taskReducer);

export default store;
