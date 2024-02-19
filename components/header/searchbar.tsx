"use client"
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { FaMagnifyingGlass } from 'react-icons/fa6';


interface Props {
  searchbarFocus: boolean,
  setSearchBarFocus: Dispatch<SetStateAction<boolean>>;
}

function SearchBar({searchbarFocus, setSearchBarFocus}:Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const [input, setInput] = useState<string>('')
  const [searchText, setSearchText] = useState<any>()


  function handleSearch(search: string) {
    setSearchText(search)
    if (search) {
      params.set('search', search);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function removeSearch() {
    params.delete('search');
    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className='flex flex-row items-center bg-white w-full rounded-sm overflow-visible px-2'>
      <input className=' outline-none p-1 flex-1 text-base text-black'
        placeholder='Search...'
        defaultValue={input}
        onChange={(e) => {
          e.target.focus({ preventScroll: true })
          setInput(e.target.value)
          handleSearch(e.target.value);
        }}
        onFocus={(e) => {
          e.target.focus({ preventScroll: true })
          handleSearch(e.target.value);
         setSearchBarFocus(true)
        }}
        onClick={()=> setSearchBarFocus(true)}
        onBlur={(e) => {
          e.target.focus({ preventScroll: true })
          setSearchBarFocus(false)
          removeSearch()
        }
        }
      />
      <div
        className='hover:cursor-pointer'
        onClick={() => {
          if (searchText)
            handleSearch(searchText);
        }}
      >
        <FaMagnifyingGlass
          color="grey"
          size={20}
        />
      </div>

    </div>

  )
}

export default SearchBar