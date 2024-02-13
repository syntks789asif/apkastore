"use client";
import React from "react";
import Link from "next/link";
import {
  removeFromCart,
  addQuantity,
  subQuantity,
} from "../redux/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const cartdata = useSelector((state) => state.product);
  const dispatch = useDispatch();
  console.log(cartdata.cart);
  return (
    <div className="w-screen min-h-screen h-auto bg-slate-950 flex justify-center items-center mt-5">
      <div
        className={`w-[95vw] min-h-[95vh] bg-blue-950 rounded-lg p-3 flex ${
          cartdata.cart.length == 0
            ? `md:flex-col items-center md:justify-start`
            : `md:flex-row items-center md:items-start`
        }  flex-col   `}
      >
        <div className="rounded-lg p-3 flex flex-col items-center">
          {cartdata.cart.length == 0 ? (
            <Link href="/">
              <h1 className="text-center font-semibold text-xl">
                Cart is Empty
              </h1>
            </Link>
          ) : (
            <>
              <h1 className="text-lg font-bold mb-2">
                Items in the Cart ({cartdata.cart.length})
              </h1>
              {cartdata.cart.map((data) => (
                <div className="card card-compact h-[130px] md:h-[130px] bg-base-100 shadow-xl flex-row justify-between p-2 gap-5 mb-2 border border-gray-600 relative md:w-[50vw]">
                  <figure className=" rounded-md">
                    <button
                      className="py-1 px-2 bg-red-700 m-3 rounded-lg shadow-lg absolute top-10 right-2.5"
                      onClick={() => {
                        dispatch(removeFromCart(data.id));
                      }}
                    >
                      Remove
                    </button>
                    <div className="w-[20vw] md:w-[100px] rounded-xl">
                      <img
                        src={data.image}
                        alt="Shoes"
                        className="w-full object-contain rounded-xl transition-all hover:scale-105 duration-300 ease-in-out"
                      />
                    </div>
                  </figure>
                  <div className="flex-col flex justify-between w-[60vw] md:w-[40vw]">
                    <h2 className=" text-md font-bold truncate break-words">
                      {data.title}
                    </h2>
                    <p className="w-[100px] truncate">Rs.{data.price}</p>
                    <div className="card-actions justify-end items-center px-3">
                      <button
                        className="text-lg bg-gray-700 hover:bg-slate-800 h-auto font-semibold text-white px-2.5 rounded-badge flex justify-center items-center "
                        onClick={() => {
                          dispatch(subQuantity(data.id));
                        }}
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold">
                        {data.quantity}
                      </span>
                      <button
                        className="text-lg font-semibold text-white bg-gray-700 hover:bg-slate-800 px-2 rounded-badge flex justify-center items-center"
                        onClick={() => {
                          dispatch(addQuantity(data.id));
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {/* <hr className="w-full font-semibold text-white" /> */}
                </div>
              ))}
            </>
          )}
        </div>
        <div className="w-[90vw]  h-auto border border-white rounded-lg mt-12 md:mt-12 p-2 md:py-3 md:px-2 ">
          <div className="flex flex-col justify-between items-center gap-1">
            {cartdata.cart.map((data) => (
              <div className="flex justify-between gap-7 w-[95%] md:w-[80%] border-b-[1px] border-dashed">
                <h1 className="text-md font-normal w-[60%]">{data.title}</h1>
                {/* <div className="flex justify-end gap-1 items-center"> */}
                <h1 className="text-lg font-thin">
                  {`( ${data.quantity} x ${data.price} ) `}
                  <br />
                  <span className="font-bold">
                    Rs. {data.price * data.quantity}
                  </span>
                </h1>
                {/* </div> */}
              </div>
            ))}
            <div className="bg-blue-900 rounded-lg p-2 flex justify-between w-[80%]">
              <h1 className="text-lg font-extrabold">Total Price</h1>
              <h1 className="text-xl font-semibold text-green-400">
                Rs.{" "}
                {Math.floor(
                  cartdata.cart.reduce((p, c) => {
                    const quantPrice = c.price * c.quantity;
                    return p + quantPrice;
                  }, 0)
                )}
              </h1>
            </div>
            <button
              className="btn self-center mt-3 bg-green-700 text-white"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Checkout
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg">Confirm Payment</h3>
                <p className="py-4">
                  On clicking the confirm button, the payment will be processed
                  of Rs.
                  {Math.floor(
                    cartdata.cart.reduce((p, c) => {
                      const quantPrice = c.price * c.quantity;
                      return p + quantPrice;
                    }, 0)
                  )}
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn bg-red-800 mr-3 text-white">
                      cancel
                    </button>
                    <button className="btn bg-green-600 text-white">
                      Confirm Payment
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
