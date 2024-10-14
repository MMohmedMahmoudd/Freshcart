import React from "react";
import logo from "./../../assets/images/green-shopping-cart-10909.svg";

export default function LoadingSpinner() {
  return (
    <>
      <div className=" fixed inset-0 flex items-center justify-center  ">
        <div className="flex items-center justify-center flex-col mt-32">
          <img src={logo} className="h-8" alt="FreshCart Logo" />
          <div className='row mt-2 justify-center items-center w-full'>
            <div className="spinner ">
              <svg viewBox="25 25 50 50" className="circular text-bold">
                  <circle  fill="none" r="20" cy="50" cx="50" className="path"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
