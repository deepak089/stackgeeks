import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar';

const MarketPlace = () => {
      const [inactive, setinactive] = useState(false);
  return (
    <>
     <SideBar  onCollapse={(inactive)=>{
       setinactive(inactive);
       }}/>
      <div className={`container ${inactive ? "inactive": ""}`}>
        MarketPlace
      </div>
      </>
    
     
      
  )
}

export default MarketPlace