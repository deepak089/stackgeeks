import React, { useEffect, useState } from 'react';
import './DeliveryLocation.css'
import search from '../../assets/search.png';
import filter from '../../assets/filter.png'
import side_menu_close from '../../assets/side_menu_close.png';
import empty_checkbox from '../../assets/empty_checkbox.png';
import location_button from '../../assets/location_button.png';
import more from '../../assets/more.png';
import close from '../../assets/close.png';
import ThreeDot from '../Three-dot-div/ThreeDot';
import  '../Three-dot-div/ThreeDot.css'


const DeliveryLocation = () => {

    const [show1, setshow1] = useState(false);

    const [show2, setshow2] = useState(false);

    const [Block,setBlock] =useState(true);


        return (
        <>
            <div className="main-dash">
                <div className="lkjhgfsgfg row">
                     <div className="col-lg-4 nmjkuijkhj row">
                        <div className="search-iconkjhfgj">
                            <img src={search} alt="" />
                        </div>
                        <div className="inputlkjhgfff">
                            <input type="text" name="" placeholder='search city' className="input-filedxddgddd"id="" />
                        </div>
                     </div>

                     <div className="col-lg-5 navigationkgfff">
                        <div className="navigationkgf">
                            <p>Delivery {`>`} city </p>
                        </div>
                     </div>

                     <div className="col-lg-3 dsgfdgyhfff">
                         <div className="refresh-iconkjgf">
                            <img src={filter} alt="" />
                        </div>
                        <div className="add-city-buttonkjhvvv">
                            <button  className='sdhgfhfff'> Add location</button>
                            
                        </div>
                     </div>
                </div>
                {/*  main body */}
                <div className="main-body">
                    <div class="card">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th className='checkbox-img-2'><img src={empty_checkbox} alt="" /> </th>

                                    <th className='srno-2' style={{ paddingLeft: "64px" }}>Sr.no.</th>

                                    <th className='location-2' style={{ paddingLeft: "112px", whiteSpace: "nowrap" }}>Location Name</th>

                                    <th className='city-2' style={{ paddingLeft: "80px", width: "264px", whiteSpace: "nowrap" }}>City Name</th>

                                    <th className='action-2' style={{ paddingeft: "600px" }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td className='checkbox-img-2'><img src={empty_checkbox} alt="" /></td>

                                    <td aria-disabled={Block ? true:""} style={{ paddingLeft: "64px" }}>01</td>

                                    <td aria-disabled={Block ? true:""} style={{ paddingLeft: "112px " }}>Sector 01</td>

                                    <td aria-disabled={Block ? true:""} className='city-td-2' style={{ paddingLeft: "80px"}}>Mumbai
                                    </td>
                                     <td >
                                        <div className="dropdown-container" tabIndex="-1">
                                            <img src={more} alt="" class="three-dots" onClick={() => setshow2(currentShow1 => !currentShow1)} />
                                            {show2 ? <>
                                                <ThreeDot Block={Block }/> </> : ""}
                                        </div>
                                    </td>
                                   
                                </tr>
                                 <tr>
                                    <td className='checkbox-img-2'><img src={empty_checkbox} alt="" /></td>

                                    <td style={{ paddingLeft: "64px" }}>01</td>

                                    <td style={{ paddingLeft: "112px " }}>Sector 01</td>

                                    <td className='city-3' style={{ paddingLeft: "80px", whiteSpace: "nowrap" }}>Mumbai
                                    </td>
                                     <td >
                                        <div className="dropdown-container" tabIndex="-1">
                                            <img src={more} alt="" class="three-dots" onClick={() => setshow2(currentShow1 => !currentShow1)} />
                                            {show2 ? <>
                                                <ThreeDot Block={Block}/> </> : ""}
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

export default DeliveryLocation