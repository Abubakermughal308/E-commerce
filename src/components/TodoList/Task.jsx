import { Keyboard, X } from "lucide-react";
import { useState } from "react";

const Task =({data , delTodo , handleEdit ,handleComplete})=>{
// const [completed , setCompleted] = useState(false)
    const {name , id  ,completed } = data;    
    console.log(completed);
    
    return(
        <div className=" flex justify-between items-center p-3 my-2 dark:border-b bg-slate-2 rounded-full dark:rounded-none dark:bg-gray-900 bg-slate-200 dark:border-gray-600  dark:text-white">
            <div className="flex items-center">
             <input type="checkbox"  className=" w-5 h-5 rounded-full accent-gray-600  bg-gray-200 " onClick={()=>handleComplete(id)} />
            <h1 className ={ ` text-xl ml-3 dark:text-white text-black ${ completed && "line-through opacity-40"}` } >{name}</h1>
            </div>
           <div className="flex gap-3.5"> 
             <X className="cursor-pointer " onClick={()=> delTodo(id)} />
                 <Keyboard className="cursor-pointer " onClick={()=>handleEdit(id)}/></div>

        </div>
    )
}
export default Task; 