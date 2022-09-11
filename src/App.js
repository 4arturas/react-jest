import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import UserDetailsPage from "./pages/UserDetailsPage";
import Users from "./users/Users";
import AppRouter from "./routes/AppRouter";
import NavBar from "./components/NavBar/NavBar";

/*function App() {
  const [data, setData] = useState( null );
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');
  const onClick = () => setToggle( prev => !prev );
  useEffect( () => {
    setTimeout( () => {
      setData( {} );
    }, 100 );
  }, [] );
  return (
    <div>
        <h1 data-testid='value-elem'>{value}</h1>
      { toggle===true && <div data-testid='toggle-elem'>toggle</div>}
      { data && <div>data</div> }
      <h1>Hello world</h1>
      <button data-testid='toggle-btn' onClick={onClick}>Click me</button>
      <input type='text' onChange={ e => setValue( e.target.value ) } placeholder={'input value...'}/>
    </div>
  );
}*/

const App = () => {
    return (
        <div>
            <NavBar />
            <AppRouter/>
        </div>
    );
}

export default App;
