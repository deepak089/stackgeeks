import React, { useEffect, useState } from 'react';
import './DeliveryCity.css'
import search from '../../assets/search.png';
import filter from '../../assets/filter.png'
import side_menu_close from '../../assets/side_menu_close.png';
import empty_checkbox from '../../assets/empty_checkbox.png';
import location_button from '../../assets/location_button.png';
import more from '../../assets/more.png';
import close from '../../assets/close.png';
import index from '../../assets/index.jpg';
import { Modal, ModalDialog } from 'react-bootstrap';
import ThreeDot from '../Three-dot-div/ThreeDot';
import '../Three-dot-div/ThreeDot.css'
import triangle from '../../assets/triangle.png';
import SideBar from '../SideBar/SideBar';


const DeliveryCity = () => {
    
    const [inactive, setinactive] = useState(false);
    const [show1, setshow1] = useState(false);

    const [show2, setshow2] = useState(false);

    const [showModal, setshowModal] = useState(false);

    const [ModalInput,setModalInput]=useState();

   

    const handleModalShow = () => {
        setshowModal(true);
    }
    const handleModalHide = () => {
        setshowModal(false);
    }

    return (
        <>
        <SideBar  onCollapse={(inactive)=>{
       setinactive(inactive);
       }}/>
      <div className={`container ${inactive ? "inactive": ""}`}>
            <div className="main-dash">
                
                <div className="lkjhgf row">
                     <div className="col-lg-4 nmjkui row">
                        <div className="search-iconkjhf">
                            <img src={search} alt="" />
                        </div>
                        <div className="inputlkjhgf">
                            <input type="text" name="" placeholder='search city' className="input-filedxddgd"id="" />
                        </div>
                     </div>

                     <div className="col-lg-5 fghdfkdh">
                        <div className="navigationkgf d-flex">
                            <span>Delivery location</span><p>{`>`} city </p>
                        </div>
                     </div>

                     <div className="col-lg-3 dsgfdgyhf">
                         <div className="refresh-iconkjgfff">
                            <img src={filter} alt="" />
                        </div>
                        <div className="add-city-buttonkjhv">
                            <button  className='sdhgfhf' onClick={handleModalShow}> Add city</button>
                              {/* modal for add city */}
                         <div className="add-city-modal">
                            <Modal show={showModal}>

                                    <div className="asdfasg">
                                        <p className='add-city-text-1'> Add city </p>
                                        <img src={close} className="btn-cross-1fgd" onClick={handleModalHide}/>
                                    </div>

                                    
                                <Modal.Body>
                                    <div className="sgdgdhh d-flex">
                                    <div className="div-imgg">
                                        <img src={index} alt=""  className="sgddg"/>
                                    </div>
                                    <p className='adfgbut'>Upload Image</p>
                                    </div>
                                    


                                    <div className="modal-input">
                                        <input type="text" className="input-field-1" value={ModalInput} onChange={(e)=> setModalInput(e.target.value)} placeholder='Add city Name' />
                                    </div>
                                    <div className="modal-button">
                                        <button className='add-modal-button'>Add City</button>
                                    </div>
                                </Modal.Body>
                                
                            </Modal>
                        </div>

                        </div>
                     </div>
                </div>
                {/*  main body */}
                <div className="main-body">
                    <div className="card">
                        <table className="table">
                            <thead>
                                <tr className="kjkoikj">
                                    <div className="pokloi">
                                        <div className="okloik">
                                            <th className='checkbox-img'><img src={empty_checkbox} alt="" /> </th>
                                        </div>
                                        <div className="okloik">
                                            <div>
                                                <th className='srno' >Sr.no.</th>
                                            </div>
                                            <div className="stepper">
                                                <img src={triangle} alt="" />
                                            </div>
                                        </div>
                                        <div className="okloik">
                                            <th className='image' >Image</th>
                                        </div>
                                        <div className="okloik">
                                            <div>
                                                    <th className='city' style={{  whiteSpace: "nowrap",}}>City Name</th>
                                            </div>
                                            <div className="stepper">
                                                <img src={triangle} alt="" />
                                            </div>
                                        </div>
                                        <div className="okloik">
                                            <div className="jnmhok">
                                                    <th className='delivery' style={{   whiteSpace: "nowrap" }}>Delivery location </th>
                                            </div>
                                            <div className="stepper">
                                                <img src={triangle} className="oklpopl" alt="" />
                                            </div>
                                        </div>
                                        <div className="okloik">
                                            <div>
                                                <th className='action' >Action</th>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="poikjm">
                                    <td className='checkbox-img ikjuk'><img src={empty_checkbox} alt="" /></td>

                                    <td >01</td>

                                    <td className='checkbox-img' ><img src={empty_checkbox} alt="" /></td>

                                    <td >Mumbai</td>
                                    <td className='delivery-ad' style={{  whiteSpace: "nowrap" }}>Sector 2,sector 7,sector 14,
                                        sector 19... <span>See more</span>
                                    </td>

                                    <td >
                                        <div className="location-button">
                                            <button className='location-btn'>
                                                <img src={location_button} alt="" /> <span className='add-delivery'>Add delivery location</span>
                                            </button>
                                        </div>
                                    </td>

                                    <td >
                                        <div className="dropdown-container" tabIndex="-1">
                                            <img src={more} alt="" className="three-dots" onClick={() => setshow2(currentShow1 => !currentShow1)} />
                                            {show2 ? <>
                                                <ThreeDot/> </> : ""}
                                        </div>
                                    </td>
                                </tr>
                               <tr className="poikjm">
                                    <td className='ikjuk'><img src={empty_checkbox} alt="" /></td>

                                    <td >01</td>

                                    <td className='checkbox-img'><img src={empty_checkbox} alt="" /></td>

                                    <td >Mumbai</td>
                                    <td className='delivery-ad' style={{whiteSpace: "nowrap"}}>Sector 2,sector 7,sector 14,sector 19... <span>See more</span>
                                    </td>

                                    <td >
                                        <div className="location-button">
                                            <button className='location-btn'>
                                                <img src={location_button} alt="" /> <span className='add-delivery'>Add delivery location</span>
                                            </button>
                                        </div>
                                    </td>

                                    <td >
                                        <div className="dropdown-container" tabIndex="-1">
                                            <img src={more} alt="" className='three-dots' onClick={() => setshow2(currentShow1 => !currentShow1)} />
                                            {show2 ? <>
                                                <ThreeDot/></> : ""}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>  
            </div>
        </>

    )
}

export default DeliveryCity