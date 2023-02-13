import Navbar from "./Navbar";
import Header from "./Header";
import Card from "./Card";
import Section from "./Section";
import Footer from "./Footer";
import { useState } from "react";

import "./style.css";

export default function App() {

  let data = [
    {
      productName: "Fancy Product",
      productPrice: "$40.00 - $80.00",
      rating: 4,
    },
    {
      productName: " Special Item",
      productPrice: "$20.00 $18.00",
      rating: 3,
    },
    {
      productName: "Sale Item",
      productPrice: "$50.00 $25.00",
      rating: 5,
    },
    {
      productName: "Popular Item",
      productPrice: "$40.00",
      rating: 4,
    },
    {
      productName: "Sale Item",
      productPrice: "$50.00 $25.00",
      rating: 2,
    },
    {
      productName: "Fancy Product",
      productPrice: "$120.00 - $280.00",
      rating: 4,
    },
    {
      productName: "Special Item",
      productPrice: "$20.00 $18.00",
      rating: 3,
    },
    {
      productName: "Popular Item",
      productPrice: "$40.00",
      rating: 5,
    },
  ];

  const [count, setCount] = useState(0);
  //const [addedToCart, setAddedToCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState(Array(data.length).fill(false));
  const [cardIndex, setCardIndex] = useState(false);


  const incrementCount = (index) => {

    console.log("Increment fn");
    console.log(index);
    const updateArray = [...addedToCart];
    updateArray[index] = true;
    setAddedToCart(updateArray);
    //setAddedToCart(true);
    setCount(count + 1);
  }

  const decrementCount = (index) => {

    console.log("Decrement");
    const updateArray = [...addedToCart];
    updateArray[index] = false;
    setAddedToCart(updateArray);
    setCount(count-1);
  }

 

  return (
    <div>
      <Navbar count={count}  />
      <Header />
      <Section incrementCount={incrementCount} addedToCart={addedToCart}  data={data} decrementCount={decrementCount}/>
      <Footer/>
    </div>
  );
}
