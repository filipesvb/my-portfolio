import { SearchIcon, XIcon } from "lucide-react";
import { useState } from "react";

interface SearchInputProps {
  onSearch : (value: string) => void
}

const SearchInput = ({onSearch} : SearchInputProps) => {

  const [searchValue, setSearchValue ] = useState('')

  function handleKeyDown(e) {
    if(e.key === 'Enter') {
      onSearch(searchValue)
    }
  }

  if(searchValue === "") {
    onSearch(searchValue);
  }
  
  return (
    <div className="border-1 border-white rounded-lg max-w-[300px] flex items-center relative px-1">
      <label className=" flex gap-2 p-2 items-center">
        <button onClick={() => {onSearch(searchValue)}}>
          <SearchIcon />
        </button>
        <input 
          className="w-full outline-0 border-0" 
          type="text" 
          placeholder="Digite aqui..."
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
          value={searchValue}
        />
      </label>
      {
        searchValue && (
          <button className="absolute right-1 cursor-pointer " onClick={() => setSearchValue("")}>
            <XIcon />
          </button>
        )
      }
    </div>
  )
}

export default SearchInput;