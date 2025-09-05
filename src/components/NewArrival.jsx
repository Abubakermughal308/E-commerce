import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";

const NewArrival = () => {
  const [newArrivals, setNewArrivals] = useState([]);
  const [limit , setLimit]= useState(4)
  const [button, setButton]=useState("View All")

  useEffect(() => {
    handleNewArrivals();
  }, [limit]);
  const handleNewArrivals = async () => {
    try {
      const data = await axios.get(
        'https://api.escuelajs.co/api/v1/products?offset=0&limit='+limit
      );
    //   console.log("data", data);
      setNewArrivals(data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  //product?P= this p= are query params

  return newArrivals.length === 0 ? <ShimmerCard/> : (
    <div className="my-16 px-6 w-full flex flex-col justify-center items-center">
      <h1 className="md:text-5xl text-3xl s  font-extrabold mb-10  ">
        New Arrivals
      </h1>
      <div className="w-full flex md:flex-wrap overflow-auto [scrollbar-width:none] md:gap-8 gap-4 justify-start md:justify-center ">
        {newArrivals.map((item) => {
          return <Link to={"/product?P="+item.id} key={item.id}><Card data={item} /></Link>
        })}
      </div>
      <button className="md:text-xl text-md  bg-slate-200 py-4 md:px-16 px-8 rounded-2xl mx-auto md:my-16 my-8 hover:bg-slate-300 cursor-pointer " onClick={()=>{
        limit=== 4 ? setLimit(20) : setLimit(4)
      }}>
        {newArrivals.length === 20 ? "Show less" :"View All"}
      </button>
      <div className="border w-full mt-12 opacity-30"></div>
    </div>
  );
};
export default NewArrival;
