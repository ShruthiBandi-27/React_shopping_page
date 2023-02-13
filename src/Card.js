import React from "react";
import increment from "./App"

const Card = (props) => {
const ratingArr = props.data.map((value)=> value.rating);
//console.log(ratingArr);
  return (
    <>
     {
        props.data.map((value,index) => {
            return (
                <div key={index} className="col mb-5">
                        <div className="card" style={{height: "450px"}}>
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">{value.productName}</h5>
                                    {/* <!-- Product reviews--> */}
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                       {
                                        Array(ratingArr[index]).fill().map((value,i) => {
                                          return (<div  key={i} className="bi-star-fill"></div>)
                                        })
                                       }
                                    </div>
                                    {/* <!-- Product price--> */}
                                    {value.productPrice}
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><button className="btn btn-outline-dark mt-auto"  disabled={props.addedToCart[index]}  onClick={()=> props.incrementCount(index)} >Add to cart</button></div>
                            </div>
                            {props.addedToCart[index] && 
                            (<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto"  onClick={() => props.decrementCount(index)}href="#">Remove Item</a></div>
                            </div>)}
                        </div>
                    </div>
            )
        })
     }
    </>
  );
};

export default Card;
