import './App.css';
import Login from './component/Login/Login';
import Reset from './component/Reset/Reset';
import SideBar from './component/SideBar/SideBar';
import Signup from './component/Signup/Signup';
import {BrowserRouter ,Route,Routes, useLocation} from 'react-router-dom';
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
import Dashboard  from './component/Dashboard/Dashboard';

function App() {
  const [inactive,setinactive] =useState();
  const [show,setshow]=useState(false);
  const  pathNamelocation=window.location.pathname;
  const [pathName, setpathName] = useState(false);


   const getToken=()=>{
    const Token=localStorage.getItem('token');
      if(Token)
      {
       setshow(false);
      }
   }
     useEffect(() => {
    getToken();
       
  });

  useEffect(() => {
    if(pathNamelocation === '/signup' || '/login' || 'reset')
    {
    setpathName(true);
    }
     
  })

  return (
    <BrowserRouter>
    <div className="App">
      
      {/* <div style={pathName ? {display:"none"}:{display:"block"}}>
      <SideBar onCollapse={(inactive)=>{
      setinactive(inactive);
      }}/>
      </div> */}

      {/* <div className={`${inactive ? "inactive": ""}`}> */}
        <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/reset" element={<Reset/>}></Route>
        <Route path="/dashboard" element={<Dashboard inactive={inactive} setinactive={setinactive}/>}></Route>
        <Route path="/delivery/city" element={<DeliveryCity inactive={inactive}/>}></Route>
        <Route path="/delivery/location" element={<DeliveryLocation inactive={inactive}/>}></Route>
        <Route path="/delivery/zone" element={<DeliveryZone inactive={inactive}/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/stockmanagement" element={<StockManagement/>}></Route>
        <Route path="/settings" element={<Settings/>}></Route>
        <Route path="/marketplace" element={<MarketPlace/>}></Route>
        <Route path="/countrydelight" element={<CountryDelight/>}></Route>
        <Route path="/offermanagement" element={<OfferManagement/>}></Route>
        </Routes>
       </div>
    {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
