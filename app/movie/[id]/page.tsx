import React, { Suspense } from 'react'
import Details from './details'
import { MovieDetailSkeleton } from '@/components/skeleton'
import Similar from './similar'

async function page({ params }: { params: { id: string } }) {

  return (
    <>
      <Suspense fallback={<MovieDetailSkeleton/>}>
        <Details id={params.id}/>
      </Suspense>

      <Suspense>
        <Similar id={params.id}/>
      </Suspense>
    </>
  )
}

export default page