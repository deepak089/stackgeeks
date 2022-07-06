import React from 'react';
import './Signup.css';
import stackgeeks_logo from '../../assets/stackgeeks_logo.png';
import onboarding_image from '../../assets/onboarding_image.png';
import free_trail from '../../assets/free_trail.png';
import flag from '../../assets/m.jpg';
import  {Link} from 'react-router-dom';
 
const Login = () => {
    return (
        <div className='main-div-signss'>
            <header className='rectangle-11ss'>
                <div className='logoss maskss'>
                    <img src={stackgeeks_logo} alt="" className='bitmapss' />
                </div>
            </header>
            <div className='sgddhf'>
                <div className="left-imagess">
                    <div >
                        <img src={onboarding_image} className="bitmapss" alt="" />
                    </div>
                </div>
                <div className="right-signupss">
                    <header >
                        <img src={free_trail} className='free_trail-imgss' alt="" />
                    </header>
                    <div className="signup-your-accountss">
                        Sign Up your account
                    </div>
                    <div className="signup-formss col">
                        <div className="input-fieldss">

                            <div className="namess">
                                <input type="text" placeholder='Enter your Name' className='input-namess' name="" id="" />
                            </div>

                            <div className="emailss">
                                <input type="email" placeholder='Enter your Email ID' className='input-emailss' name="" id="" />
                            </div>

                            <div className="phoness d-flex">
                                    <div class="phone-flagss d-flex">
                                        <img src={flag} alt="" class="flagss"/>
                                        <select class="flag-codess">
                                            <option value="">+1</option>
                                        </select>
                                    </div>

                                    <div class="phone-fieldss">
                                        <input type="text" className='input-phoness' placeholder="Enter Phone number"/>
                                    </div>
                            </div>

                            <div className="passwordss">
                                <div className="input-passss">
                                    <input type="password" placeholder='Enter Password' className='input-passwordss' name="" id="" />
                                </div>

                                <div className="showss">
                                    <p>Show</p>
                                </div>
                            </div>
                        </div>
                        <div className="input-checkbookss d-flex">
                            <input type="checkbox" className="checkbookss" name="" id="" />
                            <p  className='dfhfjkj'>By clicking Sign Up,you agree to our <span style={{ color: "#007AFF" }}>Terms </span >and <span style={{ color: "#007AFF" }}>Privacy Policy</span></p>
                        </div>
                        <br />
                        <div className="signup-buttonss">
                           <Link to="/login"><button className='signupss'>Sign Up</button></Link> 
                        </div>
                    </div>

                    <div className="already-havess">
                        <p className="already-have-accountss">
                            Already have an account? <Link to="/login">Login </Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login