import { SearchIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface SearchInputProps {
  onSearch : (value: string) => void;
  searchValue: string,
  placeholder?: string
}

const SearchInput = ({onSearch, searchValue, placeholder = "Digite aqui..."} : SearchInputProps) => {

  function handleKeyDown(e) {
    if(e.key === 'Enter') {
      onSearch(searchValue)
    }
  }

  useEffect(() => {
    if(searchValue === "") {
      onSearch(searchValue);
    }
  }, [searchValue, onSearch])
  
  return (
    <div className="border-1 border-white rounded-lg max-w-[300px] flex items-center relative px-1 h-full">
      <label className=" flex gap-2 p-2 items-center">
        <button onClick={() => {onSearch(searchValue)}}>
          <SearchIcon />
        </button>
        <input 
          className="w-full outline-0 border-0" 
          type="text" 
          placeholder={placeholder}
          onChange={(e) => onSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          value={searchValue}
        />
      </label>
      {
        searchValue && (
          <button className="absolute right-1 cursor-pointer " onClick={() => onSearch("")}>
            <XIcon />
          </button>
        )
      }
    </div>
  )
}

export default SearchInput;