import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar';

const OfferManagement = () => {  
    const [inactive, setinactive] = useState(false);
  return (
     <>
     <SideBar  onCollapse={(inactive)=>{
       setinactive(inactive);
       }}/>
      <div className={`container ${inactive ? "inactive": ""}`}>
       OfferManagement
      </div>
      </>
  )
}

export default OfferManagement