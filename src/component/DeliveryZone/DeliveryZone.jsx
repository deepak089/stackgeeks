import React, { useEffect, useState } from 'react';
import './DeliveryZone.css'
import search from '../../assets/search.png';
import filter from '../../assets/filter.png'
import side_menu_close from '../../assets/side_menu_close.png';
import empty_checkbox from '../../assets/empty_checkbox.png';
import location_button from '../../assets/location_button.png';
import more from '../../assets/more.png';
import close from '../../assets/close.png';
import ThreeDot from '../Three-dot-div/ThreeDot';
import '../Three-dot-div/ThreeDot.css';
import { Modal } from 'react-bootstrap';


const DeliveryZone = () => {

    const [show1, setshow1] = useState(false);

    const [show2, setshow2] = useState(false);

    const [Block, setBlock] = useState(true);

    const [showModal, setshowModal] = useState(false);

    const [ModalInput, setModalInput] = useState();
    const [ModalShowAssign, setModalShowAssign] = useState(false);

    const handleModalShow = () => {
        setshowModal(true);
    }

    const handleModalHide = () => {
        setshowModal(false);
    }

    const handleModalShowAssign = () => {
        setModalShowAssign(true)
    }
    const handleModalHideAssign = () => {
        setModalShowAssign(false);
    }

    return (
        <>
            <div className="main-dash">

                <div className="lkjhgfsgfgggg row">
                    <div className="col-lg-4 nmjkuijkhjjjj row">
                        <div className="search-iconkjhfgjjjj">
                            <img src={search} alt="" />
                        </div>
                        <div className="inputlkjhgffffff">
                            <input type="text" name="" placeholder='search city' className="input-filedxddgdddddd" id="" />
                        </div>
                    </div>

                    <div className="col-lg-5 navigationkgffffff">
                        <div className="navigationkgffff">
                            <p className='sdfgfhjdh'>Delivery {`>`} zone </p>
                        </div>
                    </div>

                    <div className="col-lg-3 dsgfdgyhffffff">
                        <div className="filtericondfgd">
                            <div className="refresh-iconkjgffff">
                                <img src={filter} alt="" />
                            </div>

                            <div className="filter-iconkjgffff">
                                <img src={filter} alt="" />
                            </div>
                        </div>


                        <div className="add-city-buttonkjhvvvvvv">
                            <button className='sdhgfhffffff' onClick={handleModalShow}>Add zone</button>

                            {/* add city modal */}
                            <div className="add-zone-modal-4">
                                <Modal show={showModal}>

                                    <div className="head-4" >
                                        <p className='add-zone-text-4'> Add city </p>
                                        <img src={close} className="btn-cross-4" onClick={handleModalHide} />
                                    </div>


                                    <Modal.Body>
                                        <div className="modal-input-4">
                                            <input type="text" className="input-field-4" value={ModalInput} onChange={(e) => setModalInput(e.target.value)} placeholder='Add city Name' />
                                        </div>
                                        <div className="modal-input-4">
                                            <select name="" id="" className='select-input-4' >
                                                <option className="main-city" value="">Select City</option>
                                                <option className="main-city" value="">Sector 1</option>
                                                <option className="main-city" value="">Sector 2</option>
                                                <option className="main-city" value="">Sector 3</option>
                                            </select>
                                        </div>
                                        <div className="modal-input-4">
                                            <select name="" id="" className='select-input-4' >
                                                <option value="">Select location</option>

                                            </select>
                                        </div>
                                        <div className="modal-input-4">
                                            <select name="" id="" className='select-input-4' >
                                                <option value="">Assign to</option>
                                                <option value="" onClick={handleModalShowAssign}></option>

                                            </select>
                                        </div>
                                    </Modal.Body>
                                    <footer>
                                        <div className="modal-button">
                                            <button className='add-modal-button-4'>Submit</button>
                                        </div>
                                    </footer>
                                </Modal>
                            </div>

                            {/* assign modal */}
                            <div className="add-zone-modal-5">
                                <Modal show={ModalShowAssign} id="assign-modal">
                                    <div className="head-5" >
                                        <p className='add-zone-text-5'>Assign to </p>
                                        <img src={close} className="btn-cross-5" onClick={handleModalHideAssign} />
                                    </div>

                                    {/* body for assign modal */}
                                    <Modal.Body>
                                        <div className="main-div-assign-name-data-5">
                                            <div className="assign-name-data-5">
                                                <div className="assign-name-5">Deep</div>
                                                <div className="assign-icon">
                                                    <img src={close} alt="" className="assign-icon-5" /> </div>
                                            </div>
                                            <div className="assign-name-data-5">
                                                <div className="assign-name-5">Deep</div>
                                                <div className="assign-icon-5">
                                                    <img src={close} alt="" /> </div>
                                            </div>
                                            <div className="assign-name-data-5">
                                                <div className="assign-name-5">Deep</div>
                                                <div className="assign-icon-5">
                                                    <img src={close} alt="" /> </div>
                                            </div>
                                            <div className="assign-name-data-5">
                                                <div className="assign-name-5">Deep</div>
                                                <div className="assign-icon-5">
                                                    <img src={close} alt="" /> </div>
                                            </div>
                                            <div className="assign-name-data-5">
                                                <div className="assign-name-5">Deep</div>
                                                <div className="assign-icon-5">
                                                    <img src={close} alt="" /> </div>
                                            </div>
                                            <div className="assign-name-data-5">
                                                <div className="assign-name-5">Deep</div>
                                                <div className="assign-icon-5">
                                                    <img src={close} alt="" /> </div>
                                            </div>
                                            <div className="assign-name-data-5">
                                                <div className="assign-name-5">Deep</div>
                                                <div className="assign-icon-5">
                                                    <img src={close} alt="" /> </div>
                                            </div>
                                            <div className="assign-name-data-5">
                                                <div className="assign-name-5">Deep</div>
                                                <div className="assign-icon-5">
                                                    <img src={close} alt="" /> </div>
                                            </div>
                                            <div className="assign-name-data-5">
                                                <div className="assign-name-5">Deep</div>
                                                <div className="assign-icon-5">
                                                    <img src={close} alt="" /> </div>
                                            </div>
                                            <div className="assign-name-data-5">
                                                <div className="assign-name-5">Deep</div>
                                                <div className="assign-icon-5">
                                                    <img src={close} alt="" /> </div>
                                            </div>
                                            <div className="assign-name-data-5">
                                                <div className="assign-name-5">Deep</div>
                                                <div className="assign-icon-5">
                                                    <img src={close} alt="" /> </div>
                                            </div>
                                            <div className="assign-name-data-5">
                                                <div className="assign-name-5">Deep</div>
                                                <div className="assign-icon-5">
                                                    <img src={close} alt="" /> </div>
                                            </div>

                                            <div className="assign-name-data-5">
                                                <div className="assign-name-5">Deep</div>
                                                <div className="assign-icon-5">
                                                    <img src={close} alt="" /> </div>
                                            </div>

                                        </div>

                                    </Modal.Body>

                                    <footer>
                                        <div className="modal-button">
                                            <button className='add-modal-button-5'>continue</button>
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

                                    <th style={{ paddingLeft: "30px" }}>Sr.no.</th>

                                    <th  >Zone</th>

                                    <th style={{ whiteSpace: "nowrap" }}>Delivery bot assign</th>

                                    <th style={{ whiteSpace: "nowrap" }}>City Name</th>

                                    <th style={{ width: "160px", whiteSpace: "nowrap" }}>Delivery location</th>

                                    <th  >Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='checkbox-img'><img src={empty_checkbox} alt="" /></td>

                                    <td style={{ paddingLeft: "30px" }}>01</td>

                                    <td >Zone01</td>

                                    <td >Abc Cdg</td>

                                    <td >
                                        <div className="icon-delete-3 row">
                                            <i class="fa fa-trash-o" aria-hidden="true" style={{ color: "red" }}></i>
                                            <div className="delete-city-3 p-0">
                                                Mumbai
                                            </div>
                                        </div>
                                    </td>

                                    <td style={{ width: "160px", whiteSpace: "nowrap" }}>Sector 2,sector 7,sector 14,
                                        sector 19... <span>See more</span>

                                    </td>

                                    <td >
                                        <div className="dropdown-container" tabIndex="-1">
                                            <img src={more} alt="" className="three-dots" onClick={() => setshow2(currentShow1 => !currentShow1)} />
                                            {show2 ? <>
                                                <ThreeDot /> </> : ""}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='checkbox-img'><img src={empty_checkbox} alt="" /></td>

                                    <td style={{ paddingLeft: "30px" }}>01</td>
                                    <td >Zone01</td>


                                    <td style={{ whiteSpace: "nowrap" }}>
                                        <div className='assign-boy-3'>
                                            <i class="fa fa-plus" style={{ marginRight: "10px" }} ></i>Assign Delivery boy
                                        </div></td>

                                    <td >

                                        <div className="icon-delete-3 row">
                                            {/* <i class="fa fa-trash-o" aria-hidden="true" style={{color:"red"}}></i> */}
                                            <div className="Nodelete-city-3">
                                                Mumbai
                                            </div>
                                        </div>
                                    </td>

                                    <td style={{ width: "160px", whiteSpace: "nowrap" }}>Sector 2,sector 7,sector 14,
                                        sector 19... <span>See more</span>

                                    </td>

                                    <td >
                                        <div className="dropdown-container" tabindex="-1">
                                            <img src={more} alt="" class="three-dots" onClick={() => setshow2(currentShow1 => !currentShow1)} />
                                            {show2 ? <>
                                                <ThreeDot /> </> : ""}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='checkbox-img'><img src={empty_checkbox} alt="" /></td>
                                    <td style={{ paddingLeft: "30px" }}>01</td>
                                    <td >Zone01</td>
                                    <td>
                                        <input type="text" name="" className='input-zone-4' placeholder='Enter the Name' id="" /></td>
                                    <td >
                                        <div className="icon-delete-3 row">
                                            <i class="fa fa-plus" aria-hidden="true"
                                                style={{ color: " #007AFF" }}></i>

                                            <div className="delete-city-3 p-0">
                                                Mumbai
                                            </div>
                                        </div>
                                    </td>

                                    <td style={{ width: "160px", whiteSpace: "nowrap" }}>Sector 2,sector 7,sector 14,
                                        sector 19... <span>See more</span>
                                    </td>
                                    <td >
                                        <div className="dropdown-container-3" tabIndex="-1">
                                            <img src={more} alt="" className="three-dots" onClick={() => setshow2(currentShow1 => !currentShow1)} />
                                            {show2 ? <>
                                                <ThreeDot /> </> : ""}
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

export default DeliveryZone