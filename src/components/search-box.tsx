import { CiSearch } from "react-icons/ci";
import { AstroInput } from "./astrov1/astro-input";

function SearchBox() {
  return (
    <div>
      <button>
        <CiSearch strokeWidth={1} className="text-primary text-[30px] -mt-2" />
      </button>
      <div className="fixed w-full h-screen top-[50px] left-0 z-150 bg-[#F5E5F5]">
        <div className="relative ml-[8px] py-4">
          <input
            type="text"
            placeholder={"Search"}
            className="w-full pl-10 pr-4 py-1 h-[34px] border-2 border-primary rounded-full text-sm focus:outline-none focus:ring focus:ring-primary placeholder:text-primary"
          />
          <CiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-primary text-xl" />
        </div>

        <div>Search Results 0</div>
      </div>
    </div>
  );
}

export default SearchBox;
