
import './App.css';
import Courosel from './components/Courosel';


import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './components/Welcome';
import Counter from './components/Counter.jsx';
import './index.js';
import Api from './components/circle/Api.js';
import{BrowserRouter, Routes, Route} from "react-router-dom";
import Whoare_we from './Whoare_we.js';
import Footer1 from './components/Footer1.js';
import Home from './components/Home.js';
import Our_work from './Our_work.js';

import Media from './Media.js';
import LoginForm from './components/Forms/LoginForm.jsx';


const App = () => {
   return (

    <>
  <BrowserRouter>
   <Navbar/>
  <Routes>
   
  <Route path="/" element={<Home/>}/>
  <Route path="/whoare_we" element={<Whoare_we/>}/>
  <Route path="/our_work" element={<Our_work/>}/>
  <Route path="/media" element={<Media/>}/>
  
  

  </Routes>
  
   <Footer1/>

    </BrowserRouter>

    
    



    </>
   );
 }

export default App;
