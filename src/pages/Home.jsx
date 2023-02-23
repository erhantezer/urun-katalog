import React from "react";
import Card from "../components/Card";
import useProducts from "../hooks/useProducts"



const Home = () => {
  const {products} = useProducts()
  
  
  return (
  <div className="flex gap-4" >
    {products.map((product) => {
      return(
        <div key={product.id}>
          <Card {...product} />
        </div>
        )
    })}
  </div>)
};

export default Home;
