import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Whoweare from './components/page_2/Whoweare';
import './App.css'
import Images1 from './components/page_2/Images1';
import Ca from './components/page_2/Ca.jsx';

import Trustee1 from './components/page_2/Trustee1';
import Cards1 from './components/page_2/Cards1';


const Whoare_we = () => {
  return (
    <div>
       
       <div className='Headerpage' style={{color:'#f60838', textAlign:'center'}}><h1> Sanidhya Foundation</h1><br></br></div>
      <Images1/> 
      <Trustee1/>
      <Ca/>

      {/* <Whoweare/> */}
      {/* <Trustee1/> */}
      {/* <Cards1/>      */}
       </div>
        
     

  
  )
}

export default Whoare_we