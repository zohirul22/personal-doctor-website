import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Home/About/About';
import Contract from './Home/Contract/Contract';
import Header from './Home/Header/Header';

import Home from './Home/Home/Home';
import Login from './SocialPage/Login/Login';
import SignUp from './SocialPage/SignUp/SignUp';


function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contract' element={<Contract></Contract>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
   
    </div>
  );
}

export default App;
