import React, { useState } from 'react'
import SideBar from '../SideBar/SideBar'

const Dashboard = () => {
  const [inactive, setinactive] = useState(false);
  return (
    <>
     <SideBar  onCollapse={(inactive)=>{
       setinactive(inactive);
       }}/>
      <div className={`container ${inactive ? "inactive": ""}`}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos reprehenderit fuga illo vero hic consequatur rem natus harum et quis, accusantium ratione perspiciatis blanditiis voluptatem dolore omnis obcaecati, nobis quasi.
    </div>
    </>
   
  )
}
export default Dashboard
  