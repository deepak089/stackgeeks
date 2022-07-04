import React from 'react'
import "./ThreeDot.css";
const ThreeDot = ({Block}) => {
    return (
        <>
            
            
            <div className="dropdown">
                <ul>
                    <li>{Block ? "UnBlock User" :"Block User"}</li>
                    <li>Edit</li>
                    <li><span className='delete-3'> Delete</span></li>
                </ul>
            </div>
        </>


    )
}

export default ThreeDot