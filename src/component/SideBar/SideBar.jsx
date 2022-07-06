import React, { useEffect, useState } from 'react';
import stackgeeks_logo from '../../assets/stackgeeks_logo.png';
import stackgeeks_symbol from '../../assets/stackgeeks_symbol.png';
import side_menu_open from '../../assets/side_menu_open.png';
import country_delight_logo from '../../assets/country_delight_logo.png';
import next from '../../assets/next.png';
import dashboard from '../../assets/dashboard.png';
import product from '../../assets/product.png';
import setting from '../../assets/setting.png';
import stock_management from '../../assets/stock_management.png';
import location_button from '../../assets/location_button.png';
import market_place from '../../assets/market_place.png';
import offer_management from '../../assets/offer_management.png';
import logout from '../../assets/logout.png';
import side_menu_close from '../../assets/side_menu_close.png';
import drop_down_open from '../../assets/drop_down_open.png';
import './SideBar.css';
import SubMenu from './SubMenu';
import notification from '../../assets/notification.png';
import m from '../../assets/m.jpg';
import {Link, useNavigate} from 'react-router-dom';


const SideBar = ({ onCollapse }) => {
    const [inactive, setinactive] = useState(false);
    const { navigate } = useNavigate();

    const HandleLogout=()=>{
     localStorage.setItem('status','0');
     navigate('/login');
    }

    

    return (
        <>
            <div className={`side-menu ${inactive ? "inactive" : ""}`}>
                <div className="top-section">
                    <header>
                        <div className='row'>
                            <div className="logo">
                                <img src={inactive ? stackgeeks_symbol : stackgeeks_logo} alt="stackgeeks_logo" />
                            </div>
                            <div className="profile-details">
                                {/* notification icon */}
                                <div className="notify-1">
                                    <img src={notification} className="notification-1" alt="" />
                                </div>
                                
                                <div className="login-icon-1">
                                    <img src={m} alt="" className='login-icon-image-1' />
                                    <div className="login-username">
                                        <p className='login-username-p'>Deeapk</p>

                                    </div>
                                    <div className="drop-img-2">
                                        <img src={drop_down_open} className="drop-down-open-1" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </header>

                    <div className="toggle-menu-btn">
                        <img src={inactive ? side_menu_open : side_menu_close} onClick={() => { setinactive(!inactive) }} className="backarrow" alt="close" />
                    </div>

                </div>
                <div className="main-menu">
                    <ul>
                        <li className='list-data list-1'  >
                            <Link to ="/countrydelight" className='menu-item'>
                                <div className="menu-icon">
                                    <img src={country_delight_logo} alt="" />
                                </div><span>Country delight </span></Link>
                            <div className="menu-icon-next">
                                <img src={next} alt="next" />
                            </div>

                        </li>

                        <li className='list-data'>
                            <Link to="/dashboard" className='menu-item'>
                                <div className="menu-icon">
                                    <img src={dashboard} alt="" />
                                </div><span>Dashboard</span> </Link>
                            <div className="menu-icon-next">
                                <img src={next} alt="next" />
                            </div>

                        </li>
                        <SubMenu
                            name="Delivery location"
                            subMenus={[{ name: "city" }, { name: "location" }, { name: "zone" }]}
                            location_button={location_button} next={next} drop_down_open={drop_down_open} inactive={inactive} onCollapse={onCollapse}
                            onClick={()=>{
                                if(inactive)
                                {
                                    setinactive(false);
                                }
                            }} />

                        <li className='list-data'>
                            <Link to="/product" className='menu-item'>
                                <div className="menu-icon">
                                    <img src={product} alt="" />
                                </div><span>Product</span></Link>
                            <div className="menu-icon-next">
                                <img src={next} alt="next" />
                            </div>
                        </li>
                        <li className='list-data'>
                            <Link to="/settings" className='menu-item'>
                                <div className="menu-icon">
                                    <img src={setting} alt="" />
                                </div><span>Settings</span></Link>
                            <div className="menu-icon-next">
                                <img src={next} alt="next" />
                            </div>

                        </li>
                        <li className='list-data'>
                            <Link to="/stockmanagement" className='menu-item'>
                                <div className="menu-icon">
                                    <img src={stock_management} alt="" />
                                </div><span>Stock Management</span> </Link>
                            <div className="menu-icon-next">
                                <img src={next} alt="next" />
                            </div>

                        </li>
                        <li className='list-data'>
                            <Link to="/marketplace" className='menu-item'>
                                <div className="menu-icon">
                                    <img src={market_place} alt="" />
                                </div><span>Marketplace</span> </Link>
                            <div className="menu-icon-next">
                                <img src={next} alt="next" />
                            </div>

                        </li>
                        <li className='list-data'>
                            <Link to="/offermanagement" className='menu-item'>
                                <div className="menu-icon">
                                    <img src={offer_management} alt="" />
                                </div><span>Offer management</span> </Link>
                            <div className="menu-icon-next">
                                <img src={next} alt="next" />
                            </div>

                        </li>

                    </ul>
                </div>

                {/* menu-footer */}
                <div className="side-menu-foot">
                    <div className="avatar" onClick={HandleLogout}>
                        <img src={logout} alt="logout" /> 
                        <p className='footer-logout' >Logout</p>
                    </div>

                </div>
            </div>
        </>

    )
}

export default SideBar