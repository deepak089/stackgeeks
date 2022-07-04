import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const SubMenu = (props) => {
    const {name,subMenus}=props;
    const [expand,setexpand]=useState(false);


    const {inactive} =props;

    useEffect(() => {
       if(inactive)
       {
        document.querySelectorAll('.sub-menu').forEach((el) =>{
            el.classList.remove('active');
        })
       }
        props.onCollapse(inactive);  
     }, [inactive]);
     
    return (
        <>
            <li className='list-data'>
                <p  onClick={()=>setexpand(!expand)} className='menu-item'>
                    <div className="menu-icon">
                        <img src={props.location_button} alt="" />
                    </div><span>{name}</span>
                </p>

                {subMenus && subMenus.length>0 ? (
                    <>
                     <ul className={`sub-menu ${expand ? 'active': ''}`}>
                        {subMenus.map((menu,index)=>{
                       return (<>
                        <li>
                            <Link to={`/delivery/${menu.name}`}> <input type="radio" name="drop" key={index}/></Link>
                            <label >{menu.name}</label>
                        </li>
                       </>)
                        })}
                </ul>
                    </>
                ):
                null}
               
                <div className="menu-icon-next">
                    <img src={expand ? props.drop_down_open : props.next} alt="next" />
                </div>
            </li>
        </>
    )
}

export default SubMenu