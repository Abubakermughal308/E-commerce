import {
  ChevronDown,
  CircleUserRound,
  Menu,
  Search,
  ShoppingCart,
} from "lucide-react";
import { useState } from "react";
import SideBar from "./SideBar";
import { Link, useNavigate } from "react-router";

const Header = ({ setSearchVisible, setInputText, inputText }) => {
  const [menu, setMenu] = useState(false);
  const [shop, setShop] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputText("");
  };
  return (
    <div className="">
      {menu && <SideBar setMenu={setMenu} />}
      <div className="flex justify-between shadow-lg items-center px-6 py-4 w-full">
        <div className="flex md:gap-6 lg:gap-10 lg:w-6/12 text-center gap-3">
          <Menu
            className="md:hidden  size-8 cursor-pointer"
            onClick={() => setMenu(true)}
          />
          <Link to={"/"} className="cursor-pointer">
          <h1 className="md:text-3xl  text-2xl  font-extrabold " >SHOP.CO</h1>
          
          </Link>
          
          <ul className=" hidden md:flex lg:gap-3 md:gap-2 items-center lg:text-lg md:text-base ">
            <div>
              {" "}
              <li className="flex items-center cursor-pointer">
                {" "}
                <span className="cursor-pointer hover:text-gray-500" onClick={() => setShop(!shop)}>
                  Shop{" "}
                </span>{" "}
                <ChevronDown className="mt-2" />
              </li>
              {shop && (
                <div className="absolute bg-stone-200 w-40 h-auto py-3 px-2 mt-4 rounded-xl">
                  <li className="cursor-pointer px-6 py-2 hover:bg-stone-300 ">
                    Pants
                  </li>
                  <div className="border opacity-30"></div>
                  <li className="cursor-pointer px-6 py-2 hover:bg-stone-300 ">
                    Trousers
                  </li>
                  <div className="border opacity-30"></div>
                  <li className="cursor-pointer px-6 py-2 hover:bg-stone-300 ">
                    Shirts
                  </li>
                  <div className="border opacity-30"></div>
                </div>
              )}
            </div>
            <li className={"cursor-pointer hover:text-gray-500"}>On Sale</li>
            <li className={"cursor-pointer hover:text-gray-500"}>New Arrivals</li>
            <li className={"cursor-pointer hover:text-gray-500"}>Brands</li>
          </ul>
        </div>
        <div className="flex gap-2.5 md:justify-evenly lg:justify-between  items-center lg:w-6/12">
          <form
            className="md:w-6/12 lg:w-10/12 hidden md:block"
            onSubmit={(e) => handleSubmit(e)}
          >
            {" "}
            <input
              type="text"
              placeholder="Search for Product...."
              className="bg-slate-200 text-lg outline-none py-2.5 px-6 w-full rounded-3xl md:mx-5"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </form>
          <div className="flex gap-4">
            <Search
              className="cursor-pointer md:hidden"
              onClick={() => setSearchVisible(true)}
            />
          <Link to={"cart"}><ShoppingCart className="cursor-pointer" /></Link>
            <CircleUserRound className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
