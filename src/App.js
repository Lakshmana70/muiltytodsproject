import logo from './logo.svg';
import './App.css';
import Boardtodos from './features/muiltytodos/board';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <Outlet></Outlet>
  );
}

export default App;