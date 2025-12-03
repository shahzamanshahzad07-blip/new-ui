import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1 = () => {
  return (
    <div className='py-9 h-[90vh] bg-white gap-10  flex items-center justify-between px-18'>
      <LeftContent/>
      <RightContent/>
    </div>
  )
}

export default Page1
