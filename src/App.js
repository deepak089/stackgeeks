import './App.css';
import Login from './component/Login/Login';
import Reset from './component/Reset/Reset';
import SideBar from './component/SideBar/SideBar';
import Signup from './component/Signup/Signup';
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';

import DeliveryCity from './component/DeliveryCity/DeliveryCity';
import DeliveryLocation from './component/DeliveryLocation/DeliveryLocation';
import DeliveryZone from './component/DeliveryZone/DeliveryZone';
import Product from './component/Product/Product';
import CountryDelight from './component/CountryDelight/countryDelight';
import Settings from  './component/Settings/Settings';
import MarketPlace from './component/MarketPlace/MarketPlace';
import StockManagement from './component/StockManagement/StockManagement';
import OfferManagement from './component/OfferManagement/OfferManagement';

function App() {
  const [inactive,setinactive] =useState();
  const [show,setshow]=useState(true);
 
   useEffect(() => {
      const Token=localStorage.getItem('status');
      if(Token=='1')
      {
       setshow(false);
      }
   }, []);
   
  const Dashboard=()=>{
    return  <h1>Dashboard</h1>
  }
  return (
    <BrowserRouter>
    <div className="App">

      {show ?
      <>
       <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/reset" element={<Reset/>}></Route>
      </Routes>
      </>
        :
        <>
      <SideBar onCollapse={(inactive)=>{
      setinactive(inactive);
      }}
      />
      <div className={`container ${inactive ? "inactive": ""}`}>
       <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/delivery/city" element={<DeliveryCity inactive={inactive}/>}></Route>
        <Route path="/delivery/location" element={<DeliveryLocation inactive={inactive}/>}></Route>
        <Route path="/delivery/zone" element={<DeliveryZone inactive={inactive}/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/stockmanagement" element={<StockManagement/>}></Route>
        <Route path="/settings" element={<Settings/>}></Route>
        <Route path="/sarketplace" element={<MarketPlace/>}></Route>
        <Route path="/countrydelight" element={<CountryDelight/>}></Route>
        <Route path="/offermanagement" element={<OfferManagement/>}></Route>
      </Routes>
      </div>
        </>
      }
    </div>
    </BrowserRouter>
    
  );
}

export default App;
