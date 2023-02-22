import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()

    const getData = async () => {

        try {
            const { data } = await axios.get("https://assignment-api.piton.com.tr/api/v1/product/all", {
                headers: {
                    "Content-Type": "application/json",
                    "access-token": `${sessionStorage.getItem("token")}`,
                }
            })
            setProducts(data.products)
        } catch (error) {
            console.log(error)
        }
    }

useEffect(() => {
    getData()
}, []);


    return (
        <>
            {products.map((product) => {
                const { id, name, image, price, description, likes, timeStamp } = product
                return (
                    <div className="flex justify-center mt-8 cursor-pointer" key={id} onClick={navigate(`card/${id}`)}>
                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
                            
                                <img className="rounded-t-lg" src={image} alt="" />
                            
                            <div className="p-6">
                                <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                                <p className="text-gray-700 text-base mb-4">
                                    {description}
                                </p>

                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
};

export default Card;
