import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faBus, faCreditCard, faGlobe, faHome, faMobile, faMotorcycle, faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux'
import { addCart } from "../../Slices/cartSlice";
import axios from "axios";
import { useEffect, useState } from "react";

function Biryani(){

    let [itemdata, setItemData] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:4000/product-api/getproduct/Biryani")
        .then(response => {
            setItemData(response.data.payload)
            console.log(response.data)
        })
        .catch(err=>console.log(err))
    }, [])

    return(
        <div className="row m-5 p-2 justify-content-center"> 
        
        {
            itemdata.map((ele, index) =>
            
                <div className="col-md-4 col-sm-12 p-2" key={index}>
                    <div className="card" >
                    <img src={ele.img} className="card-img-top" alt="..." width='50px'/>
                        <div className="card-body">
                            <p className="card-title text-danger display-5 m-1">{ele.foodname}</p>
                            <p className="text-dark h5 m-2">{ele.restaurant}</p>
                            <p className="h5 pt-4">
                                <FontAwesomeIcon icon={faStar} /> {ele.rating}
                                | <FontAwesomeIcon icon={faMotorcycle}/> Delivery Time <b className="text-primary">{ele.time}min</b> | <FontAwesomeIcon icon={faIndianRupeeSign}/> {ele.cost}/-
                            </p>
                            <div className="p-2">
                                <button className="btn btn-primary">Cart</button>
                            </div>

                        </div>
                    </div>
                </div>
            
            )
        }

        </div>
    )
}

export default Biryani