"use client"
import React, { useState } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { FaMagnifyingGlass } from 'react-icons/fa6';

function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const [searchText, setSearchText] = useState<any>()


  function handleSearch(search: string) {
    setSearchText(search)
    if (search) {
      params.set('search', search);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  function removeSearch(){
    params.delete('search');
  }

  return (
    <div className='flex flex-row items-center bg-white w-full rounded-sm overflow-hidden px-2'>
    <input className=' outline-none p-1 flex-1 text-base'
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      onFocus={(e) => {
        handleSearch(e.target.value)
      }}
      onBlur={(e)=> {
        replace(`${pathname}`)
      }
      }
    />

      <div 
      className='hover:cursor-pointer'
      onClick={()=> {
        if(searchText)
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