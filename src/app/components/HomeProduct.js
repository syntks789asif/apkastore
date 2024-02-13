import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { addCart, addOrder, removeFromCart } from "../redux/slice/productSlice";

const HomeProduct = ({ data }) => {
  const cartdata = useSelector((state) => state.product);
  
  const presntInCart = cartdata.cart.findIndex((item) => item.id === data.id);
  console.log(presntInCart);


  const dispatch = useDispatch();

  return (
    <div className="carousel-item">
      <div
        //   style={{ display: "flex" }}
        className=" w-[80vw] sm:w-[200px] md:w-[30vh] h-[300px]  bg-base-100 flex flex-col justify-between shadow-xl"
      >
        <figure className=" h-[250px]  w-full  overflow-hidden  p-5 rounded-lg">
          <img
            src={data.image}
            alt="Shoes"
            className=" scale-95 shadow-lg shadow-black object-contain transition-all hover:scale-105 duration-300 ease-in-out"
          />
        </figure>
        <div className="flex flex-col justify-between h-[32vh] p-3">
          <h2 className="truncate">{data.title}</h2>
          <p className="text-md font-semibold">Rs. {data.price} </p>
          <div className="card-actions justify-end">
            <button
              className="btn-primary w-auto bg-transparent text-white border hover:bg-white hover:bg-opacity-10 border-white rounded-lg px-1 py-1 transition-all"
              onClick={() => {
                presntInCart >= 0?dispatch(removeFromCart(data.id)):dispatch(addCart(data));
              }}
            >
              {presntInCart >= 0?`remove to cart`:'add to cart'}
            </button>
            <button
              className="btn-primary w-20 bg-white rounded-lg px-1 py-1 hover:bg-slate-200 transition-colors"
              onClick={() => {
                dispatch(addOrder(data));
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;
