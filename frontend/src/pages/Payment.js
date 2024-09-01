import React from "react";
import Topnav from "../components/Topnav";
import Footer from "../components/Footer";
import arrow from "../images/arrow.png";
import CartCard from "../components/CartCard";
import Gpay from '../images/Gpay.png';
import paypal from '../images/paypal.png';
import paytm from '../images/paytm.png';
import credit_card from '../images/credit-card.png';
import master from '../images/master-card.png';
import Rupey from '../images/rupey.png';
import visa from '../images/visa.png';
import Right from '../images/Right.png';

const Payment = () => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full overflow-auto ">
        <Topnav />

        <div className="w-full flex justify-center gap-x-8">
          <div className="left w-[50%] flex flex-col">
            <button className="flex text-xl font-bold mt-6">
              <img className="w-8" src={arrow} />
              Shopping Continue
            </button>
            <hr />
            <div className="mb-4 mt-8">
              <p className="text-lg font-bold">Shopping cart</p>
              <p className="text-lg">You have 3 item in your cart</p>
            </div>
            <div className="flex flex-col space-y-6 mb-8">
              <CartCard />
              <CartCard />
              <CartCard />
            </div>
          </div>

          <div className="right mb-8 w-[40%] mt-14 space-y-12">
            <div className="payment border space-y-6 flex flex-col rounded-xl shadow-lg p-8 mx-auto  w-[80%]">
              <div className="flex justify-between">
                <p className="text-lg">Subtotal</p>
                <p className="text-lg">Rs. 350</p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg">Shipping</p>
                <p className="text-lg">Rs. 350</p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg">Total (Tax incl.)</p>
                <p className="text-lg">Rs. 350</p>
              </div>
              <div className="flex justify-between">
                <button><img className="w-20 " src={Gpay}/></button>
                <button><img className="w-20 " src={paypal}/></button>
                <button> <img className="w-20 " src={paytm}/></button>
                <button> <img className="w-20 " src={credit_card}/></button>
              </div>
              <button className="flex w-full bg-black text-white h-12 items-center justify-around rounded-lg">
              <p>$1,672</p>
              <p className="flex">Checkout<span><img className="h-6" src={Right}/></span></p>
              </button>
            </div>


            <div className="card border space-y-6 flex flex-col rounded-xl shadow-lg p-8 mx-auto  w-[80%]">
            <div className="flex flex-col">
                <p className="text-2xl font-bold">Card type</p>
                <div className="flex justify-between">
                    <button><img className="w-20 " src={master}/></button>
                    <button><img className="w-20" src={visa}/></button>
                    <button> <img className="w-20" src={Rupey}/></button>
                    <button> <img className="w-20" src={credit_card}/></button>
                </div>
            </div>


            <form className="space-y-4">


            <div className="flex flex-col gap-4">
                <label>Name on card</label>
                <input className="w-full border bg-gray-200 rounded-md h-12 flex items-center p-2" type="text" placeholder="Name" required></input>
            </div>


            <div className="flex flex-col gap-4">
                <label>Card Number</label>
                <input className="w-full border bg-gray-200 rounded-md h-12 flex items-center p-2" type="text" placeholder="1111 2222 3333 4444" required></input>
            </div>


            <div className="gap-4 w-full flex">
                <div className="flex flex-col gap-4">
                    <label>Expiration date</label>
                    <input className="w-full border bg-gray-200 rounded-md h-12 flex items-center p-2" type="text" placeholder="mm/yy" required></input>
                </div>
                <div className="flex flex-col gap-4">
                    <label>CVV</label>
                    <input className="w-full border bg-gray-200 rounded-md h-12 flex items-center p-2" type="text" placeholder="123" required></input>
                </div>
            </div>
            
            
            </form>


          <button className="flex w-full bg-black text-white h-12 items-center justify-center rounded-lg">
          Verify
          </button>
            </div>


          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Payment;
