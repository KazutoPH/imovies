"use client"
import React, { Dispatch, SetStateAction, useState } from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { FaMagnifyingGlass, FaX } from 'react-icons/fa6';

interface Props {
  searchbarFocus: boolean,
  setSearchBarFocus: Dispatch<SetStateAction<boolean>>;
}

function SearchBar({ searchbarFocus, setSearchBarFocus }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const [input, setInput] = useState<string>('')
  const [searchText, setSearchText] = useState<any>('')


  function handleSearch(search: string) {
    setSearchBarFocus(true)
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
      <input
        className=' outline-none p-1 w-full text-base text-black'
        placeholder='Search...'
        value={input}
        onChange={(e) => {
          e.preventDefault()
          setInput(e.target.value)
          handleSearch(e.target.value);
        }}
        onFocus={(e) => {
          e.preventDefault()
          handleSearch(e.target.value);
          setSearchBarFocus(true)
        }}
        onClick={() => setSearchBarFocus(true)}
        onBlur={(e) => {
          e.preventDefault()
          removeSearch()
          setSearchBarFocus(false)
        }
        }
      />
      <div className=' flex items-center gap-2'>
        { input !== '' &&
        <div
        className='hover:cursor-pointer'
        onClick={() => {
          setInput('')
          setSearchBarFocus(false)
          removeSearch()
        }}>
        <FaX
          color="grey"
          size={20}
        />
      </div>
        }

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
    </div>

  )
}

export default SearchBar