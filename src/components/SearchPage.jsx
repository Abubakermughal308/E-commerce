import { X } from "lucide-react";

const SearchPage = ({ setSearchVisible ,setInputText ,inputText}) => {
  return (
    <div className="w-full  flex justify-center items-center   md:hidden  backdrop-blur-sm absolute top-0 left-0 z-50 h-screen">
      <div className="absolute bg-slate-50 rounded-2xl  top-20 w-10/12 p-5 h-7/12 flex flex-col">
        <X
          className=" mb-2 cursor-pointer self-end"
          onClick={() => setSearchVisible(false)}
        />
        <form onSubmit={(e) => e.preventDefault}>
          <input
          value={inputText}
          onChange={(e)=>setInputText(e.target.value)}
            type="text"
            placeholder="Search"
            className="w-full p-3 rounded-2xl outline-none focus-visible:bg-gray-300 bg-gray-200  "
          />
        </form>
      </div>
    </div>
  );
};
export default SearchPage;
