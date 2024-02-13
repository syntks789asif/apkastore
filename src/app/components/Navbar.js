"use client";
import React from "react";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { RxExit } from "react-icons/rx";
import { BsPerson } from "react-icons/bs";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const product = useSelector((state) => state.product);
  console.log(product);
  const [login, setLogin] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  return (
    <div className="navbar bg-blue-950 ">
      <div className="flex-1 flex md:flex-1 justify-between md:justify-normal items-center">
        <Link href={"/"} className="btn btn-ghost text-xl" >
          Shoppify
        </Link>
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered  w-[100px] xs:w-[109px] sm:w-[150px] md:w-auto bg-transparent"
          />
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="drawer justify-end md:hidden z-10">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle"
          checked={drawerOpen}
          onChange={toggleDrawer}
        />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
            <FiMenu size={20} />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content pt-16">
            {/* Sidebar content here */}
            <li className="text-lg hover:bg-slate-800 hover:rounded-lg">
              <Link href="/" >
                <GrHomeRounded size={20} />
                Home
              </Link>
            </li>
            <li className="text-lg hover:bg-slate-800 hover:rounded-lg">
              {/* <a className="flex"> */}
              <Link href="/cart" className="flex">
                <FiShoppingCart size={20} />
                <span className="badge badge-sm indicator-item">
                  {product.cart.length}
                </span>
                View Cart
              </Link>
              {/* </a> */}
            </li>
            <li className="text-lg hover:bg-slate-800 hover:rounded-lg">
              <a>
                <BsPerson size={22} />
                Account
              </a>
            </li>
            <li className="text-lg hover:bg-slate-800 hover:rounded-lg">
              <a>
                {login && <RxExit size={20} />}
                {login ? "Logout" : "Login / SignUp"}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-none gap-2 hidden md:flex">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">
                {product.cart.length}
              </span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">
                {product.cart.length} Items
              </span>
              <span className="text-info">
                Subtotal: ${product.cart.reduce((p, c) => p + c.price, 0)}
              </span>
              <div className="card-actions">
                <Link href="/cart">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className={`btn btn-ghost btn-circle avatar ${
              login ? "online" : ""
            } placeholder`}
          >
            <div className="bg-neutral text-neutral-content rounded-full w-16">
              <span className="text-xl">AI</span>
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>{login ? `Logout` : `Login/Sign Up`}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
