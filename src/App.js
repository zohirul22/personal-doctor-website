import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Home/About/About';
import Contract from './Home/Contract/Contract';
import Header from './Home/Header/Header';
import Footer from './Home/Footer/Footer';
import Home from './Home/Home/Home';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
       
   
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contract' element={<Contract></Contract>}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
