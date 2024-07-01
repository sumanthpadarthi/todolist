// src/App.js
import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddingTask from './components/AddingTask';
import EditTask from './components/EditTask';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>To-Do List</h1>
        <AddingTask/>
        <EditTask />
      </div>
    </Provider>
  );
};

export default App;
