const CommentSection=()=>{
    <style>
       
    </style>
    const customerComment =[{
        name:"Sarah M.",
        ratings:"⭐⭐⭐⭐⭐",
        comment:"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    },
    {
        name:"Alex K.",
        ratings:"⭐⭐⭐⭐⭐",
        comment:"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
    },
    {
        name:"James L",
        ratings:"⭐⭐⭐⭐⭐",
        comment:"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    },
    {
        name:"James L",
        ratings:"⭐⭐⭐⭐⭐",
        comment:"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    },
    {
        name:"James L",
        ratings:"⭐⭐⭐⭐⭐",
        comment:"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
    },]
    return(
    <div>
        <div className="md:mx-20 mx-8 ">
         <div>
            <h1 className="md:text-5xl text-3xl font-extrabold md:my-14 my-8 md:mx-8 ">
                OUR HAPPY CUSTOMERS
            </h1>
        </div>
        <div className="flex gap-3.5 overflow-x-auto [scrollbar-width:none] crousal " >
{
    customerComment.map((comment)=>(
        <div key={comment.id} className="md:w-92 w-64 p-5  border border-gray-400 rounded-2xl shrink-0 ">
            <h1 className="my-3">{comment.ratings}</h1>
            <h1 className="font-bold my-2 md:text-xl text-lg">{comment.name}</h1>
            <p className="text-sm md:text-md">"{comment.comment}"</p>
        </div>
    )
    )
}
        </div>
    </div>
   
    </div>
    )
    
}
export default CommentSection;