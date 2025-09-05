import { Plus, SquareArrowDown } from "lucide-react";
import Task from "./Task";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [ListData, setListData] = useState([]);
  const [changeAdd, setChangeAdd] = useState(true);
  const [darkTheme, setDarkTheme] = useState(true);
  console.log(darkTheme);
  
  const addToDo = () => {
    if (inputValue === null || inputValue === "") {
      toast.error("Please Enter a Task");
      return;
    }
    setListData((prev) => [
      ...prev,
      { name: inputValue, id: Date.now(), completed: false },
    ]);
    setInputValue("");
    toast.success("Task Added Successfully");
  };
  const handleComplete = (id) => {
    const newList = ListData.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setListData(newList);
    // toast.success("Task Completed Successfully");
  };
  const deleteTodo = (id) => {
    const newList = ListData.filter((item) => item.id != id);
    setListData(newList);
    toast.success("Task Deleted Successfully");
  };
  const handleEdit = (id) => {
    const oneTodo = ListData.find((item) => item.id === id);
    setInputValue(oneTodo.name);

    //  const newList = ListData.map((item) => {
    //   if (item.id === id) {
    //     return { ...item, completed: inputValue };
    //   }
    //   return item;
    // });
    // setListData(newList);
    // setInputValue("")
  };
  const obj = ListData.filter((item) => item.completed === true);

  return (
  <div className="w-full h-screen bg-slate-200 dark:bg-gray-800">
      <div className="w-full h-screen flex flex-col items-center justify-center  ">
      <button
        className="absolute bottom-0 right-0 text-white bg-gray-700 mb-4 mr-4 px-2 py-3 cursor-pointer"
        onClick={() => setDarkTheme(!darkTheme)}
      >
        {darkTheme === false ? "DarkTheme" : "LightTheme"}
      </button>
      <div className="w-1/2 h-10/12 bg-white dark:bg-gray-900  rounded-lg m-auto  p-5 overflow-y-hidden ">
        <div>
          <div className={` text-3xl font-bold mb-5 ${!darkTheme && "text-orange-600" , darkTheme&&"text-white"}`  }>
            To-Do List
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addToDo();
            }}
            className="flex w-full "
          >
            <input
              className="dark:bg-gray-800 bg-slate-200  dark:text-white w-10/12 p-3 outline-none rounded-l-full"
              placeholder="Add your Task"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="text-white dark:bg-gray-700 bg-orange-600 mx-auto  p-3 w-2/12 text-center rounded-r-full cursor-pointer">
              {changeAdd ? (
                <Plus className="w-full cursor-pointer " />
              ) : (
                <SquareArrowDown className="w-full cursor-pointer  " />
              )}
            </button>
          </form>
        </div>
        <div className="my-3 flex justify-between">
          <h1 className="text-lg text-black font-bold dark:text-white">
            Tasks ({ListData.length}){" "}
          </h1>
          {ListData.length > 0 && (
            <button
              className="py-1.5 px-3 rounded-full bg-orange-600 dark:bg-gray-700 cursor-pointer text-white"
              onClick={() => {
                setListData([]);
                toast.success("All Tasks Cleared");
              }}
            >
              Clear All
            </button>
          )}
        </div>
        <div className="h-7/12 overflow-y-auto">
          <div className="mt-5    ">
            {ListData.map((item) => {
              return (
                <Task
                  data={item}
                  key={item.id}
                  delTodo={deleteTodo}
                  handleEdit={handleEdit}
                  handleComplete={handleComplete}
                />
              );
            })}
          </div>
        </div>
        {ListData.length > 0 && (
          <h1 className="text-lg dark:text-white text-center border-t mt-3 opacity-75 pt-2">
            {obj.length} of {ListData.length} tasks completed
          </h1>
        )}
      </div>
    </div>
  </div>
  );
};
export default TodoList;
