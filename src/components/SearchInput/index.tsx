import { SearchIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface SearchInputProps {
  onSearch: (value: string) => void;
  searchValue: string;
  placeholder?: string;
}

const SearchInput = ({
  onSearch,
  searchValue,
  placeholder = "Digite aqui...",
}: SearchInputProps) => {
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      onSearch(searchValue);
    }
  }

  useEffect(() => {
    if (searchValue === "") {
      onSearch(searchValue);
    }
  }, [searchValue, onSearch]);

  return (
    <div className="border-1 border-muted-foreground rounded-lg w-full md:max-w-[300px] flex items-center relative h-full">
      <label className=" flex items-center w-full h-full">
        <button
          onClick={() => {
            onSearch(searchValue);
          }}
          className="px-2"
        >
          <SearchIcon className="stroke-muted-foreground" />
        </button>
        <input
          className="w-full outline-0 border-0 text-foreground  w-full py-2"
          type="text"
          placeholder={placeholder}
          onChange={(e) => onSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          value={searchValue}
        />
      </label>
      {searchValue && (
        <button
          className="absolute right-1 cursor-pointer "
          onClick={() => onSearch("")}
        >
          <XIcon className="stroke-foreground " />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
