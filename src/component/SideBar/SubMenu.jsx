import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';                   
import unselect from '../../assets/un-select.png';

const SubMenu = (props) => {
    const {name,subMenus,onClick}=props;
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
            <li className='list-data' onClick={props.onClick}>
                <p  onClick={ () => setexpand(!expand) } className='menu-item'>
                    <div className="menu-icon">
                        <img src={props.location_button} alt="" />
                    </div>

                    <span>{name}</span>
                </p>

                {subMenus && subMenus.length>0 ? (
                    <>
                    <ul className={`sub-menu ${expand ? 'active': ''}`}>
                        {subMenus.map((menu,index)=>{
                       return (<>
                        <li>
                        <div className="menu-icon">

                        <Link to={`/delivery/${menu.name}`}>
                        <img src={unselect} className="fa fa-circle-o sub-menu-icon "/>                        <span className="zvxbvnv">{menu.name}</span> </Link>
                        </div>
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