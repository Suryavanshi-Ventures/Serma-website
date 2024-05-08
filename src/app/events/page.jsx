import EventPast from '@/components/event-upcoming/event-past/page'
import EventUpcoming from '@/components/event-upcoming/page'
import Image from 'next/image'
import React from 'react'

function Events() {
  return (
    <div className=''>
    <div className='px-[25px] md:px-[85px]'>
      <div className='w-full'>
        <Image src="/upcoming-event/event-bg-image-svg.svg" width={2000} height={444} alt='Event Image'/>
      </div>
      </div>
      <div className='my-[40px] lg:pl-[85px] '>
        <EventUpcoming/>
      </div>
      <div className='my-[40px] lg:pl-[85px]'>
        <EventPast/>
      </div>
    </div>
  )
}

export default Events
