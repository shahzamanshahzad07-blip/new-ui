import React from 'react'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between  ' >
        <div className='p-2 '> 
            <h3 className='  mb-6 text-5xl font-bold leading-15'>Prospective  <br /><span className='bg-gray-300  rounded-full px-2'> Customer </span> <br />Content</h3><p className='text-xl justify-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptatibus cum velit, ipsum maxime dolor possimus deserunt quidem repellat! Ab!</p>
        </div>
      <div className=''><svg className='text-8xl' xmlns="http://www.w3.org/2000/svg" width="100" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></div>
    </div>
  )
}
export default LeftContent
