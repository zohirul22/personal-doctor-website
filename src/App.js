import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Home/About/About';
import Contract from './Home/Contract/Contract';
import Header from './Home/Header/Header';
import Home from './Home/Home/Home';
import Reviews from './Home/Reviews/Reviews';
import Services from './Home/Services/Services';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contract' element={<Contract></Contract>}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
