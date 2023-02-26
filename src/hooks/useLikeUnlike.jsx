import { useDispatch, useSelector } from "react-redux";
import useProducts from "./useProducts";
import { useEffect, useState } from "react";
import axios from "axios";
import { likeProduct, unLikeProduct } from "../features/likeSlice";




const useLikeUnlike = () => {
    const { products } = useProducts()
    const { likes } = useSelector(state => state.likes)
    const dispatch = useDispatch()
    const [like, setLike] = useState(false)

    useEffect(() => {
        if (likes.includes(products.map((product) => product.id))) {
            setLike(true)
        }

    }, [likes, products])


    const likeUnlike = (id) => {
        const token = sessionStorage.get('token')

        if (like) {
            //unlike apisi
            const { data } = axios.post("https://assignment-api.piton.com.tr/api/v1/product/unlike", { productId: id }, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'access-token': token
                }
            })
            setLike(false)
            dispatch(unLikeProduct(data.id))


        } else {
            const { data } = axios.post("https://assignment-api.piton.com.tr/api/v1/product/like", { productId: id }, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'access-token': token
                }
            })
            setLike(true)
            dispatch(likeProduct(data.id))

        }
    }

    return { like, likeUnlike }
};

export default useLikeUnlike;
