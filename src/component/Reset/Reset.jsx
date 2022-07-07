import React, { useState } from 'react';
import './Reset.css';
import stackgeeks_logo from '../../assets/stackgeeks_logo.png';
import onboarding_image from '../../assets/onboarding_image.png';
import  {Link, useNavigate} from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { FORGET_USER } from '../graphql/mutation';

const Login = () => {
    const navigate=useNavigate();
    const [email, setEmail] = useState("");
    const [reset, setreset] = useState();
   
   
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
   

    const [Admin_forgot_password, { data, loading,error}] = useMutation(FORGET_USER);
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
        const ResetMsg = data.admin_forgot_password.msg;
        setTimeout(() => {
            setreset(ResetMsg)
        }, 1000);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const Form = { email };
        Admin_forgot_password({
            variables: Form
        }) 
        Form.email = "";
    }
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
                    { 
                    !!reset && 
                      <div class="alert alert-success alert-dismissible fade show my-2" role="alert">
                       <h6 className='text-center'>{reset}</h6>
                        </div>  
                    }
                    <div className="reset-formrr col">
                        <div className="input-fieldrr">
                            <div className="emailrr">
                                <input type="text" placeholder='Enter your Email ID' onChange={handleEmail} className='input-emailrr' name="email" id="" />
                            </div>
                        </div>

                        <div className="reset-buttonrr">
                            <button className='resetrr' onClick={handleSubmit}>Reset</button>
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