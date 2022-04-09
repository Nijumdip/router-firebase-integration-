import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from "./Components/Register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>} > </Route>
          <Route path='/register' element={<Register/>} > </Route>
          <Route path='/login' element={<Login/>} > </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
