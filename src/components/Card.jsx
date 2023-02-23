import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const defaultImage = "https://picsum.photos/500/300?random=1";

const Card = ({ id, name, image, description }) => {
    const {likes} = useSelector(state => state.likes)
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [like, setLike] = useState(false)

    useEffect(() => {
        if(likes.includes(id)){
            setLike(true)
        }
    },[id,likes])


    console.log(defaultImage)
    const handleClick = () => {
        navigate(`card/${id}`)
    }


    return (
        <div style={{ height: "42rem" }} className="flex justify-center mt-8 cursor-pointer" key={id} >
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <img className="rounded-t-lg" src={!image ? image : defaultImage} alt="" onClick={handleClick} />


                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2 ">{name}</h5>
                    <p className="text-gray-700 text-base mb-4 mt-4">
                        {show ? description : `${description.slice(0, 80)} ...`}
                        <br />
                        <button className="bg-blue-200 p-1 rounded-lg" onClick={() => setShow(!show)}>
                            {show ? " Show Less" : " Show More"}
                        </button>

                    </p>

                </div>
            </div>
        </div>
    )
};

export default Card;
