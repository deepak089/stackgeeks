import React, { useState } from 'react';
import './Login.css';
import stackgeeks_logo from '../../assets/stackgeeks_logo.png';
import onboarding_image from '../../assets/onboarding_image.png';
import {Link, useNavigate} from 'react-router-dom';

const Login = () => {
    
    const navigate =useNavigate();

    const HandleToken=()=>{
     localStorage.setItem('status','1');
     navigate('/');
    }

    return (
        <div className='main-divvv'>
            <header className='rectangle-11vv'>
                <div className='logovv maskvv'>
                    <img src={stackgeeks_logo} alt="" className='bitmapvv' />
                </div>
            </header>
            <div className='row'>
                <div className="left-imagevv">
                    <div >
                        <img src={onboarding_image} className="bitmapvv"  alt="" />
                    </div>
                </div>
                <div className="right-loginvv">
                    <div className="login-your-accountvv">
                        Login your account
                    </div>
                    <div className="login-formvv col">
                        <div className="input-fieldvv">
                            <div className="emailvv">
                            <input type="text" placeholder='Enter your Email ID' className='input-emailvv' name="" id="" />
                            </div>
                            <div className="passwordvv">
                                <div className="input-passvv">
                                    <input type="password" placeholder='Enter Password' className='input-passwordvv' name="" id="" />
                                </div>
                                <div className="showvv">
                                    <p>Show</p>
                                </div>
                            </div>
                        </div>
                        <div className="forgot-passwordvv">
                         <Link to="/reset"> <p>Forgot password?</p></Link> 
                        </div>
                        <br />
                        <div className="login-buttonvv">
                            <Link to="/dashboard"><button className='loginvv' onClick={HandleToken}>Login</button></Link>
                        </div>
                    </div>

                 <div className="dont-accountvv">
                    <p className="dont-have-an-accountvv">
                      Don't have an account? <Link to="/signup">SignUp</Link>
                    </p> 
                 </div>
                </div>
            </div>

        </div>
    )
}

export default Login