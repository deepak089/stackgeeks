import React, { useState } from 'react';
import './Login.css';
import stackgeeks_logo from '../../assets/stackgeeks_logo.png';
import onboarding_image from '../../assets/onboarding_image.png';
import {Link, useNavigate} from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphql/mutation';

const Login = () => {
    
    const navigate=useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
   
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const [Admin_login, { data, loading,error}] = useMutation(LOGIN_USER);
    if(error)
      {

        // console.log(error.graphQLErrors[0].message,'error here')
        // alert(error.custom_msg)
        // setTimeout(() => {
        //     setError('bav')
        // }, 1000);
    }

    if (loading) {
        return (<>
            <div className="d-flex justify-content-center rstdgttfhf">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </>)
    }
    if (data) {
        const TokenData = data.admin_login.accessToken;
        localStorage.setItem('token',`${TokenData}`);
        if(TokenData)
        {
            navigate('/dashboard');
        }     
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const Form = { email ,password };
        Admin_login({
            variables: Form
        }) 
        Form.email = "";
        Form.password = "";
    }

    return (
        <div className='main-divvv'>
            <header className='rectangle-11vv'>
                <div className='logovv maskvv'>
                    <img src={stackgeeks_logo} alt="" className='bitmapvv' />
                </div>
            </header>
            <div className='dfgdhfh'>
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
                                <input type="text" placeholder='Enter your Email ID' onChange={handleEmail} className='input-emailvv' name="email" id="" />
                                </div>
                                <div className="passwordvv">
                                    <div className="showvv">
                                        <p>Show</p>
                                    </div>
                                    <div className="input-passvv">
                                        <input type="password" placeholder='Enter Password' onChange={handlePassword} className='input-passwordvv' name="password" id="" />
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="forgot-passwordvv">
                            <Link to="/reset"> <p>Forgot password?</p></Link> 
                            </div>
                            <br />
                            <div className="login-buttonvv">
                                <button className='loginvv' onClick={handleSubmit}>Login</button>
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