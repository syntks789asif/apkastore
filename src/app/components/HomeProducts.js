// "use client";
// import { useEffect, useState } from "react";
import React from "react";
import HomeProduct from "./HomeProduct";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/slice/productSlice";

const HomeProducts = ({ data }) => {
  const products = useSelector((state) => state.product);

  console.log(products);

  const dispatch = useDispatch();
  dispatch(setProducts(data));

  return (
    <div
      className="h-screen md:h-auto flex justify-center items-center
      "
    >
      <div className="bg-slate-900 w-[95%] h-[95%] rounded-2xl p-3 overflow-x-scroll scroll no-scrollbar">
        <h1 className="text-2xl">Grocery</h1>
        <p></p>
        {/* <div className="carousel rounded-box mt-3 flex gap-2"> */}
        <div className="carousel rounded-box mt-3 flex md:flex-wrap md:justify-center md:items-center gap-2 ">
          {data.map((e, i) => {
            return <HomeProduct key={i} data={e} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;

// useEffect(() => {
//   console.log(data);
//   const getProducts = async () => {
//     const res = await fetch("https://fakestoreapi.com/products");
//     const datap = await res.json();
//     setData(datap);
//   };
//   getProducts();
//   console.log(data);
// }, []);

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(data);
