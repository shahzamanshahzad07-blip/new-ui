import React from 'react'
import Rightcard from './Rightcard'
import App from '../../App'
import Rightcard2 from './Rightcard2'
import Rightcard3 from './Rightcard3'

const RightContent = () => {
  return (
    <div className='h-full p-5 w-2/3 overflow-x-auto flex gap-5 justify-between '>
       <Rightcard/>
     <Rightcard2/>
       <Rightcard3/>
     <Rightcard3/>
      
      </div>
  )
}

export default RightContent
