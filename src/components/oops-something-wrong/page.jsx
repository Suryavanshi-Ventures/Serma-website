import Image from 'next/image'
import React from 'react'

function OopsSomeThingWrong() {
  return (
    <div className='flex justify-center items-center my-10'>
      <Image src="/something_wrong2.gif" alt='' height={600}width={600} />
    </div>
  )
}

export default OopsSomeThingWrong
