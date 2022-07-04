import React, { useEffect, useState } from 'react';
import './DeliveryCity.css'
import search from '../../assets/search.png';
import filter from '../../assets/filter.png'
import side_menu_close from '../../assets/side_menu_close.png';
import empty_checkbox from '../../assets/empty_checkbox.png';
import location_button from '../../assets/location_button.png';
import more from '../../assets/more.png';
import close from '../../assets/close.png';
import { Modal, ModalDialog } from 'react-bootstrap';
import ThreeDot from '../Three-dot-div/ThreeDot';
import '../Three-dot-div/ThreeDot.css'


const DeliveryCity = () => {

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
                        <div className="navigationkgf">
                            <p>Delivery {`>`} city </p>
                        </div>
                     </div>

                     <div className="col-lg-3 dsgfdgyhf">
                         <div className="refresh-iconkjgf">
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
                                    <div className="modal-input">
                                        <input type="text" className="input-field-1" value={ModalInput} onChange={(e)=> setModalInput(e.target.value)} placeholder='Add city Name' />
                                    </div>
                                </Modal.Body>
                                <footer>
                                    <div className="modal-button">
                                        <button className='add-modal-button'>Add City</button>
                                    </div>
                                </footer>
                            </Modal>
                        </div>

                        </div>
                     </div>
                </div>
                {/*  main body */}
                <div className="main-body">
                    <div class="card">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th className='checkbox-img'><img src={empty_checkbox} alt="" /> </th>

                                    <th className='srno' style={{ paddingLeft: "30px" }}>Sr.no.</th>

                                    <th className='image' >Image</th>

                                    <th className='city' style={{  whiteSpace: "nowrap" }}>City Name</th>

                                    <th className='delivery' style={{  width: "264px", whiteSpace: "nowrap" }}>Delivery location</th>

                                    <th className='action'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='checkbox-img'><img src={empty_checkbox} alt="" /></td>

                                    <td style={{ paddingLeft: "30px" }}>01</td>

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
                                            <img src={more} alt="" class="three-dots" onClick={() => setshow2(currentShow1 => !currentShow1)} />
                                            {show2 ? <>
                                                <ThreeDot/> </> : ""}
                                        </div>
                                    </td>
                                </tr>
                               <tr>
                                    <td className='checkbox-img'><img src={empty_checkbox} alt="" /></td>

                                    <td style={{ paddingLeft: "30px" }}>01</td>

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

        </>

    )
}

export default DeliveryCity