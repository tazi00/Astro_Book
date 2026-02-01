import React from "react";
import { CiSearch } from "react-icons/ci";

function AstroInput({ placeholder }: { placeholder: string }) {
  return (
    <div className="relative ml-[8px] hidden lg:block">
      <input
        type="text"
        placeholder={placeholder}
        className="w-[210px] pl-10 pr-4 py-1 h-[34px] border-2 border-primary rounded-full text-sm focus:outline-none focus:ring focus:ring-primary placeholder:text-primary"
      />
      <CiSearch
        strokeWidth={1}
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-primary text-xl"
      />
    </div>
  );
}

export default AstroInput;
