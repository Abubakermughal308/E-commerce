import { Github, Instagram, Youtube } from "lucide-react"

const Footer =()=>{
    return(
        <div className="md:mx-20 mx-8 my-8">
           <div className="bg-black text-white  my-10 rounded-2xl md:px-20 px-10 py-10 md:flex justify- items-center ">
      <h1 className="text-4xl font-extrabold ">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h1>
      <div className="md:mx-10 right-0 lg:w-4/12 mt-4">
        <input type="email" className="bg-white text-black rounded-full px-10 py-2 outline-none w-full" placeholder="Enter Your Email Adrress" />
        <button className="bg-white text-black rounded-full px-11 py-2 mt-3 cursor-pointer font-semibold w-full hover:bg-slate-200">Subscribe To Newsellter</button>
      </div>
    </div>
            <div className="md:flex justify-between w-full ">
            <div className="md:w-4/12 my-4">
             <h1 className="md:text-3xl  text-2xl  font-extrabold my-2">SHOP.CO</h1>
             <p className="text-sm opacity-60 my-2">We have the clothes that suits your style and which you're proud to wear. From Women to men</p>
            <ul className="flex gap-4">
                 <a href=""><Instagram/></a>
               <a href="https://github.com/Abubakermughal308" target="blank"><Github/></a>
             <a href="https://www.youtube.com/@abubakermughal-m6u" target="blank"><Youtube/></a>
            </ul>
            </div>
            <div className="flex justify-evenly md:w-8/12">

       <ul className="mx-3">
            <li  className="font-bold text-xl my-2">Company</li>  
            <li className="cursor-pointer my-1">About</li>
            <li className="cursor-pointer my-1">Features</li>
            <li className="cursor-pointer my-1">Works</li>
            <li className="cursor-pointer my-1">Career</li>
       </ul>
           <ul className="mx-3">
             <li className="font-bold text-xl my-2">Help</li>
            <li className="cursor-pointer my-1">Customer Supports</li>
            <li className="cursor-pointer my-1">Delivery Details</li>
            <li className="cursor-pointer my-1">Terms and Conditions</li>
            <li className="cursor-pointer my-1">Privacy Policy</li>
           </ul>
        <ul className="mx-3">
    
          <li className="font-bold text-xl my-2">FAQS</li>
            <li className="cursor-pointer my-1">Account</li>
            <li className="cursor-pointer my-1">Manage Deliveries</li>
            <li className="cursor-pointer my-1">Orders</li>
            <li className="cursor-pointer my-1">Payments</li>
        </ul>
           </div>
       
            </div>
            <div className="border w-full mt-12 opacity-30"></div>
            <h1 className="md:text-base opacity-50 text-center my-4">SHOP.CO ©️ 2025 . ALl Rights Reserved</h1>
     
        </div>
    )
}
export default Footer