const Card =({data})=>{
    // console.log(data);
    
    const {title , price , rating ,images ,discountPercentage} = data

    return(
        <div className="md:w-60 w-32 cursor-pointer shrink-0 ">
        <img className=" rounded-2xl overflow-hidden md:h-64 h-32
          " src={images[0]} alt="" />
       {images[0] && <div>
            <h1 className="font-bold text-sm md:text-lg my-2">{title}</h1>
            <h1 className=" md:text-md text-sm font-sans  text-yellow-700">⭐ {Math.floor(Math.random() * 5 ) +2}/5</h1>
            <div className="flex gap-5 items-center">
                <h1 className="font-bold md:text-lg text-sm">${price}</h1>
                <h1 className="bg-red-300 text-red-600 rounded-2xl text-sm p-1">
                   -30%
                </h1>
            </div>
        </div>}
        </div>
    )
}
export default Card;