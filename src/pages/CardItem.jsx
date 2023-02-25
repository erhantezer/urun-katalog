import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CardItem = () => {
    const [veri, setVeri] = useState([]);
    const {id} = useParams();
    const token = sessionStorage.get("token");
    const navigate = useNavigate()
    
const getVeri = async () => {
    try {
        const { data } = await axios.get(`https://assignment-api.piton.com.tr/api/v1/product/get/${id}`, {
        headers: {
            Authorization: 'Bearer ' + token,
            "access-token": token
        }
    });
    setVeri(data.product)
    } catch (error) {
        console.log(error)
    }

    if(!token) {
        navigate("/login")
    } 
        
}

    useEffect(() => {
        getVeri()
    }, []);


    return (
        <div className="flex justify-center" >
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="" alt="" />
                <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                    <p className="text-gray-700 text-base mb-4">
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </p>
                    <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
                </div>
            </div>
        </div >
    )
};

export default CardItem;
