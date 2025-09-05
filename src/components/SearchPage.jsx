import { X } from "lucide-react";

const SearchPage = ({ setSearchVisible ,setInputText ,inputText}) => {
  return (
    <div className="w-8/12 mx-auto  md:hidden ">
      <div className="absolute bg-slate-50 rounded-2xl  top-20 w-8/12 p-5 h-8/12 flex flex-col">
        <X
          className=" mb-2 float-right cursor-pointer"
          onClick={() => setSearchVisible(false)}
        />
        <form onSubmit={(e) => e.preventDefault}>
          <input
          value={inputText}
          onChange={(e)=>setInputText(e.target.value)}
            type="text"
            placeholder="Search"
            className="w-full p-3 rounded-2xl outline-none focus-visible:bg-gray-300 bg-gray-200 mx-2 "
          />
        </form>
      </div>
    </div>
  );
};
export default SearchPage;
