import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function Title() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  let movietype = params.get('type')
  let query = params.get('query')
  let genre = params.get('genre')
  const [preTitle, setPreTitle] = useState('')

  // console.log(genre)

  useEffect(() => {
    if (genre)
      setPreTitle(genre.replace(/and/g, '&'))

    else if (query)
      setPreTitle(query.replace(/_/g, ' '))

  }, [[query, movietype, genre]])

  return (
    <div>
      <h1 className='text-white text-3xl font-bold mt-5 border-l-yellow-400 border-l-[5px] pl-5 capitalize'>{preTitle}&nbsp;{movietype === 'tv' ? 'TV Series' : 'Movies'}</h1>
    </div>
  )
}

export default Title