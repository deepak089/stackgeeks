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
import SideBar from '../SideBar/SideBar';


const Product = () => {  
      const [inactive, setinactive] = useState(false);

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

    

    return (
        <>
        <SideBar  onCollapse={(inactive)=>{
       setinactive(inactive);
       }}/>
      <div className={`container ${inactive ? "inactive": ""}`}>
            <div className="main-dash">

                <div className="lkjhgfsgfgggghh row">
                    <div className="col-lg-4 nmjkuijkhjjjjhh row">
                        <div className="search-iconkjhfgjjjjhh">
                            <img src={search} alt="" />
                        </div>
                        <div className="inputlkjhgffffffhh">
                            <input type="text" name="" placeholder='search city' className="input-filedxddgddddddhh" id="" />
                        </div>
                    </div>

                    <div className="col-lg-5 navigationkgffffffhh">
                            <span>Product Management </span> <p className='sdfgfhjdhhh'>{`>`} product </p>
                    </div>

                    <div className="col-lg-3 dsgfdgyhffffffhh">
                        <div className="refresh-iconkjgffffhh">
                            <img src={filter} alt="" />
                        </div>

                        <div className="filter-iconkjgffffhh">
                            <img src={filter} alt="" />
                        </div>
                        <div className="add-city-buttonkjhvvvvvvvv">
                            <button className='sdhgfhffffffhh' onClick={handleModalShow}>Add product</button>

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
                                                <option value="" ></option>

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



                        </div>
                    </div>
                </div>
                {/*  main body */}
                <div className="main-body">
                    <div className="card">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className='checkbox-img'><img src={empty_checkbox} alt="" /> </th>

                                    <th  >Sr.no.</th>
                                    <th  >Image</th>
                                    <th style={{ width: "112px", whiteSpace: "nowrap" }}>Product Name</th>



                                    <th  >Category</th>

                                    <th  >Price</th>

                                    <th >Discount Price</th>
                                    <th  >Tag</th>
                                    <th style={{ width: "120px" }}>Discription</th>
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
                                    <td style={{ wordBreak: "break-all" }}>country coconut..More</td>

                                    <td >country specials</td>
                                    <td className="myDIV">59/piece
                                        <div className="hide">I am shown when someone hovers over the div above.</div>
                                    </td>
                                    <td >7/piece </td>
                                    <td>
                                    <p>
                                     <div className="dsggdgfd d-flex">
                                        <div className="newlyadded">
                                            Newly added
                                            <i className="fa fa-close" aria-hidden="true" style={{color:"red"}}></i>
                                        </div>
                                        <div className="editbo">
                                        <i class='far fa-edit'></i>
                                        </div>
                                    </div>      
                                    </p>
                                    
                                    </td>
                                    <td >Lorem ipsum dolor sit amet</td>
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
                                
                                <tr>
                                    <td className='checkbox-img'><img src={empty_checkbox} alt="" /></td>

                                    <td >01</td>
                                    <td className='checkbox-img'><img src={empty_checkbox} alt="" /></td>
                                    <td style={{ wordBreak: "break-all" }}>country coconut..More</td>

                                    <td >country specials</td>
                                    <td >59/piece</td>
                                    <td >7/piece </td>
                                    <td>
                                    <p>
                                     <div className="dsggdgfdsdgfd d-flex">
                                        <div className="newlyaddedfdgdf">
                                            <i className="fa fa-plus plus-iconzdf" aria-hidden="true" style={{color:"blue"}}></i>
                                             Add Tag
                                        </div>
                                    </div>      
                                    </p>
                                    </td>
                                    <td >Lorem ipsum dolor sit amet</td>
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
                                
                                <tr>
                                    <td className='checkbox-img'><img src={empty_checkbox} alt="" /></td>

                                    <td >01</td>
                                    <td className='checkbox-img'><img src={empty_checkbox} alt="" /></td>
                                    <td style={{ wordBreak: "break-all" }}>country coconut..More</td>

                                    <td >country specials</td>
                                    <td >59/piece</td>
                                    <td >7/piece </td>
                                    <td>
                                    <p>
                                     <div className="dsggdgfdsdgfd d-flex">
                                        <div className="inputfdgdf">
                                           <input type="text"  className="ssddfgdf" name="" placeholder='Enter tag' id="" />

                                             <i className="fa fa-plus plus-iconzdfsdgdhd" aria-hidden="true" style={{color:"blue"}}></i>
                                        </div>
                                    </div>      
                                    </p>
                                    </td>
                                    <td >Lorem ipsum dolor sit amet</td>
                                    <td style={{color:"#04A669"}}>yes</td>
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
            </div>
        </>
    )
}

export default Product