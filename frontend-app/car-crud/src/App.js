import logo from './logo.svg';
import './App.css';
import React from 'react';
import CarList from './pages/CarList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment>
      <CarList />
    </React.Fragment>
  );
}

export default App;
