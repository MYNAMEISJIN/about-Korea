import React from 'react'

export const ImageContainer: React.FC<{ title: string }> = (props) => {
  const bgColor=`bg-${props.title}`
  return (
    <div className={`w-[321px] h-[450px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-4 flex flex-col gap-8 ${bgColor}`}>
      <div className='text-xl'>
        ALL SEASONS IN KOREA
      </div>
      <div className='border w-full min-h-36'>
        <img src='' alt='image'/>
      </div>
      <div className='border h-full'>
        blabla
      </div>
    </div>
  )
}


