import {  MoveRight, Trash, Trash2 } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increasequantity, RemoveItem } from "../utils/CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartData = useSelector((store) => store.cart);
  const items = cartData.items
  const totalAmount = cartData.totalAmount


  return items.length === 0 ? (
    <div className="my-10 text-center">
      <h1 className="text-2xl font-bold">Looks like Your Cart is Empty</h1>
      <Link to="/"><button className="font-semibold text-xl px-4 py-2 text-white bg-black rounded-full my-2 cursor-pointer" >Go get Items</button></Link>
      
    </div>
  ) : (
    <div className="md:py-16 py-8 md:px-10 px-2">
      <h1 className="md:text-5xl text-3xl font-extrabold">YOUR CART</h1>
      <div className=" my-10 w-full md:flex ">
        <div className=" md:w-7/12 w-full border border-gray-300 rounded-2xl">
          {/* Cart items */}
          {items.map((item) => (
            <CartCard  data={item} />
          ))}
        </div>
        <div className="md:w-5/12 w-full border border-gray-300 rounded-2xl p-5 ml-2 h-96 ">
          {/* Sub Totals */}
          <h1 className="text-2xl font-semibold mb-4">Order Summary</h1>
          <div>
            <div className="flex justify-between py-3">
              <h1 className="text-xl opacity-75">Subtotal</h1> <h1 className="text-xl font-bold">${totalAmount}</h1>
            </div>
            <div className="flex justify-between py-3">
              <h1 className="text-xl opacity-75">Delivery Fee</h1> <h1 className="text-xl font-bold">$10</h1>
            </div>
            <div className=" border-b opacity-30"></div>
            <div className="flex justify-between py-5"><h1 className="text-xl opacity-75">Total</h1> <h1 className="text-xl font-bold">${totalAmount + 10}</h1></div>
          </div>
          <div className="flex justify-between gap-1.5">
            <input type="text" className="p-3 rounded-full bg-gray-200 outline-none w-9/12" placeholder="Add Promo Code"/>
            <button className="text-white bg-black rounded-full w-3/12 p-3 cursor-poiner">Apply</button>
          </div>
          <button className="flex items-center gap-4 justify-center bg-black text-white text-xl w-full py-3  my-5 cursor-pointer rounded-full">Go to Checkout <MoveRight/></button>
        </div>
      </div>
    </div>
  );
};
export default Cart;

const CartCard = ({ data }) => {
  const { img, name, size, color, price, quantity ,id } = data;
  const [pQuantity, setPQuantity] = useState(quantity);
  const dispatch = useDispatch()

  return (
    <div className="md:p-4 p-2">
      <div className="flex  ">
        <img className="w-32 h-32 rounded-2xl" src={img} alt="" />
        <div className="px-8 w-full ">
          <div className="flex justify-between">

            <div>
            {" "}
            <h1 className="md:text-lg text-md font-bold">{name}</h1>
            <h1>
            <span className="font-semibold mx-1">size:</span>
            {size}
            </h1>
            <h1>
            <span className="font-semibold mx-1">color:</span>
            {color}
            </h1>
            
            </div>
            <div>
            
            <Trash2 className="text-red-800 cursor-pointer " onClick={()=>dispatch(RemoveItem(data.id))} />
            </div>
          </div>
          <div className="flex justify-between items-center">
               <h1 className="text-2xl font-semibold">${price}</h1>
            <div className="  rounded-full flex bg-stone-300 justify-between px-5">
              <button
                className="px-4 text-2xl  py-2 cursor-pointer"
                onClick={() => {
                  pQuantity > 1 ? setPQuantity(pQuantity - 1) : setPQuantity(1);
                }}
              >
                -
              </button>
              <h1 className="w-full text-2xl text-center py-2">{pQuantity}</h1>
              <button
                className="px-4 text-2xl  py-2 cursor-pointer"
                onClick={() => {
                  setPQuantity(pQuantity + 1);
                  dispatch(Increasequantity(id , pQuantity))
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-b opacity-30 my-4"></div>
    </div>
  );
};
