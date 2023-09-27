'use client'

import { InputHTMLAttributes, useState } from 'react'
import SearchGlass from './icons/SearchGlass'

interface SearchBarInterface extends InputHTMLAttributes<HTMLInputElement> {
  onSearch: (ctxSearch: string) => void
}

/**
 * Accept input string and emits value
 * @param param0
 * @returns
 */
const SearchBar = function ({
  onSearch,
  disabled,
  ...props
}: SearchBarInterface) {
  const [searchVal, setSearchVal] = useState<string>('')

  return (
    <div className="w-full h-[45px] flex gap-2 mb-5 ">
      <input
        disabled={disabled}
        type="text"
        placeholder="Search..."
        className="border-gray-600 rounded bg-slate-300 w-full pl-2"
        onChange={(e) => setSearchVal(() => e.target.value)}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      <button
        disabled={disabled}
        type="button"
        className="w-24 pl-[32px] border rounded"
        onClick={() => onSearch(searchVal.trim())}
      >
        <SearchGlass />
      </button>
    </div>
  )
}

export default SearchBar
