import React, { useEffect, useState } from 'react';
import './Product.css'
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


const Product = () => {

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
                
                <div className="lkjhgfsgfgggghh row">
                     <div className="col-lg-4 nmjkuijkhjjjjhh row">
                        <div className="search-iconkjhfgjjjjhh">
                            <img src={search} alt="" />
                        </div>
                        <div className="inputlkjhgffffffhh">
                            <input type="text" name="" placeholder='search city' className="input-filedxddgddddddhh"id="" />
                        </div>
                     </div>

                     <div className="col-lg-5 navigationkgffffffhh">
                        <div className="navigationkgffffhh">
                            <p className='sdfgfhjdhhh'>Delivery {`>`} zone </p>
                        </div>
                     </div>

                     <div className="col-lg-3 dsgfdgyhffffffhh">
                         <div className="refresh-iconkjgffffhh">
                            <img src={filter} alt="" />
                        </div>

                        <div className="filter-iconkjgffffhh">
                            <img src={filter} alt="" />f
                        </div>
                        <div className="add-city-buttonkjhvvvvvvvv">
                            <button  className='sdhgfhffffffhh' onClick={handleModalShow}>Add zone</button>

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

                                    <th  >Sr.no.</th>
                                    <th  >Image</th>
                                    <th  style={{width:"112px",whiteSpace:"nowrap"}}>Product Name</th>
                                     


                                    <th  >Category</th>

                                    <th  >Price</th>

                                    <th >Discount Price</th>
                                    <th  >Tag</th>
                                    <th  style={{width:"120px"}}>Discription</th>
                                    <th  >Subscription</th>
                                    <th  >Sku</th>
                                    <th  >Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='checkbox-img'><img src={empty_checkbox} alt="" /></td>

                                    <td >01</td>
                                    <td className='checkbox-img'><img src={empty_checkbox} alt="" /></td>
                                    <td style={{wordBreak: "break-all"}}>country coconut..More</td>

                                    <td >country specials</td>
                                    <td >59/piece</td>
                                    <td >7/piece </td>
                                    <td ><p>Newly added</p>                           </td>
                                    <td >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
                                    <td >yes</td>
                                    <td >3</td>

                                    <td >
                                        <div className="dropdown-container" tabIndex="-1">
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

export default Product