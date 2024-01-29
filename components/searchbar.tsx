"use client"
import React from 'react'
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
const { replace } = useRouter();


  function handleSearch(search: string) {
    console.log(search);
    const params = new URLSearchParams(searchParams);

    if (search) {
      params.set('search', search);
    } else {
      params.delete('search');
    }


    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <input className=' outline-none p-1  max-w-[250px] w-full text-base'
    onChange={(e) => {
      handleSearch(e.target.value);
    }}
    />
  )
}

export default SearchBar