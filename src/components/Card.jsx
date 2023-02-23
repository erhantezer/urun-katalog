import { useNavigate } from "react-router-dom";


const Card = ({ id, name, image, description }) => {
    const navigate = useNavigate()
    console.log(image)

    return (
        <div className="flex justify-center mt-8 cursor-pointer" key={id} >
            <div className="rounded-lg shadow-lg bg-white max-w-sm" onClick={navigate(`/card/${id}`)}>
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
};

export default Card;
