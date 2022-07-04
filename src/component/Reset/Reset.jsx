import React from 'react';
import './Reset.css';
import stackgeeks_logo from '../../assets/stackgeeks_logo.png';
import onboarding_image from '../../assets/onboarding_image.png';
import  {Link} from 'react-router-dom';

const Login = () => {
    return (
        <div className='main-divrr'>
            <header className='rectangle-11rr'>
                <div className='logorr maskrr'>
                    <img src={stackgeeks_logo} alt="" className='bitmaprr' />
                </div>
            </header>
            <div className='row'>
                <div className="left-imagerr">
                    <div >
                        <img src={onboarding_image} className="bitmaprrleft" alt="" />
                    </div>
                </div>
                <div className="right-resetrr">
                    <div className="reset-your-accountrr">
                        <p>Reset Password</p>
                        <span>Enter your email to receive instructions on how to reset your password</span>
                    </div>

                    <div className="reset-formrr col">
                        <div className="input-fieldrr">
                            <div className="emailrr">
                                <input type="text" placeholder='Enter your Email ID' className='input-emailrr' name="" id="" />
                            </div>
                        </div>

                        <div className="reset-buttonrr">
                            <button className='resetrr'>Reset</button>
                        </div>
                    </div>

                    <div className="reset-accountrr">
                        <Link to="/login">Back to Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login