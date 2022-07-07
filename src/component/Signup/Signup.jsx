import React, { useState } from 'react';
import './Signup.css';
import stackgeeks_logo from '../../assets/stackgeeks_logo.png';
import onboarding_image from '../../assets/onboarding_image.png';
import free_trail from '../../assets/free_trail.png';
import flag from '../../assets/m.jpg';
import { Link } from 'react-router-dom';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { SIGNUP_USER } from '../graphql/mutation';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [value, setValue] = useState("");
    const [Error,setError ] = useState('');

    const navigate = useNavigate();


    if (value) {
        const phoneNumber = value;
        const countryCodeLength = phoneNumber.length - 10;
        var countryCode = phoneNumber.substr(0, countryCodeLength);
        var phoneNo = phoneNumber.substr(countryCodeLength, phoneNumber.length);
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const [Admin_registration, { data, loading,error}] = useMutation(SIGNUP_USER);
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
        const TokenData = data.admin_registration.accessToken;
        localStorage.setItem('token',`${TokenData}`);
        navigate('/dashboard');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const Form = { email, phoneNo, countryCode, password, name };
        Admin_registration({
            variables: Form
        }) 
        Form.email = "";
        Form.phoneNo = "";
        Form.password = "";
        Form.name = "";
        setValue("");
    }

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

                    <div className="error-msg">

                    </div>

                    <div className="signup-your-accountss">
                        Sign Up your account
                    </div>

                    {/* {!!Error && <div className="signup-your-accountss">
                        {Error}
                    </div>} */}
                   
                    <div className="signup-formss col">
                        <div className="input-fieldss">

                            <div className="namess">
                                <input type="text" name="name" placeholder='Enter your Name' onChange={handleName} className='input-namess' id="" />
                            </div>

                            <div className="emailss">
                                <input type="email" name="email" placeholder='Enter your Email ID' onChange={handleEmail} className='input-emailss' id="" />
                            </div>

                            <div className="phoness d-flex">
                                {/* <div className="phone-fieldss">
                                        <input type="text" onChange={handleChange} name="phoneNo" className='input-phoness' placeholder="Enter Phone number"/>
                                    </div> */}
                                <div className="phone-fieldss">
                                    <PhoneInput
                                        placeholder="Enter phone number"
                                        value={value}
                                        onChange={setValue} name="phoneNo" className='input-phoness' />
                                </div>

                            </div>

                            <div className="passwordss">
                                <div className="input-passss">
                                    <input type="password" onChange={handlePassword} name="password" placeholder='Enter Password' className='input-passwordss' id="" />
                                </div>

                                <div className="showss">
                                    <p>Show</p>
                                </div>
                            </div>
                        </div>
                        <div className="input-checkbookss d-flex">
                            <input type="checkbox" className="checkbookss" name="" id="" />
                            <p className='dfhfjkj'>By clicking Sign Up,you agree to our <span style={{ color: "#007AFF" }}>Terms </span >and <span style={{ color: "#007AFF" }}>Privacy Policy</span></p>
                        </div>
                        <br />
                        <div className="signup-buttonss">
                            <Link to="/login"><button className='signupss' onClick={handleSubmit}>Sign Up</button></Link>
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

export default Signup