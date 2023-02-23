import axios from "axios";
import { useEffect, useState } from "react";


const useProducts = () => {
    const [products, setProducts] = useState([]);
    

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

    

    return { products }
};

export default useProducts;
