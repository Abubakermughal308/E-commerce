import screenshot from '../utils/Screenshot 2025-08-23 154719.png';
const Crousal =()=>{
    return(
        <div>
            <div className="w-full ">
            <img className="w-full h-auto" src={screenshot} alt="crousal" />
        </div>
        <ul className="bg-black text-white text-4xl shadow-2xl flex justify-evenly flex-wrap px-5 md:py-7 ">
            <li className="font-bold  py-2 px-1.5">VERSACE</li>
            <li className="font-mono  py-2 px-1.5">ZARA</li>
            <li className="font-[cursive]  py-2 px-1.5">GUCCI</li>
            <li className="font-serif  py-2 px-1.5">PRADA</li>
            <li className="font-light  py-2 px-1.5">Calvin Klein</li>
        </ul>
        </div>
    )
}
export default Crousal;