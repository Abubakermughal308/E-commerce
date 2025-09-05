import { ChevronDown, X } from "lucide-react";
import { useState } from "react";

const SideBar = ({ setMenu }) => {
  const [shop, setShop] = useState(false);
  return (
    <div className="w-full fixed" onBlur={() => setMenu(false)}>
      <div className=" bg-white text-black top-0 left-0 h-screen w-7/12 py-4 px-2 ">
        <div className="flex justify-between px-3">
          <h1 className="md:text-3xl  text-2xl  font-extrabold ">SHOP.CO</h1>
          <X className="size-8 cursor-pointer" onClick={() => setMenu(false)} />
        </div>
        <ul className="flex flex-col text-2xl  my-6">
          <div>
            <li
              className="flex items-center justify-between my-1 px-3 py-2 cursor-pointer bg-gray-200 hover:bg-gray-300"
              onClick={() => setShop(!shop)}
              onBlur={()=>setShop(false)}
            >
              {" "}
              <span className="cursor-pointer">Shop </span>{" "}
              <ChevronDown className="mt-2" />
            </li>
            {shop && (
              <div className="">
                <li className="my-1 px-3 py-2 cursor-pointer bg-gray-200  hover:bg-gray-300 ml-2">
                  Pants
                </li>
                <li className="my-1 px-3 py-2 cursor-pointer bg-gray-200  hover:bg-gray-300 ml-2">
                  Trousers
                </li>
                <li className="my-1 px-3 py-2 cursor-pointer bg-gray-200  hover:bg-gray-300 ml-2">
                  Shirts
                </li>
              </div>
            )}
          </div>
          <li className="my-1 px-3 py-2 cursor-pointer bg-gray-200 hover:bg-gray-300">
            On Sale
          </li>
          <li className="my-1 px-3 py-2 cursor-pointer bg-gray-200 hover:bg-gray-300">
            New Arrivals
          </li>
          <li className="my-1 px-3 py-2 cursor-pointer bg-gray-200 hover:bg-gray-300">
            Brands
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
