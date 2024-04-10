import React from 'react'
import SeasonsInAllL from './SeasonsInAllL'
import { SeasonTranslations } from '../../pages/home/Home'

export const ImageContainer: React.FC<{ title: string, imageUrl:string, sLan:SeasonTranslations, bgColor:string }> = (props) => {
  const bgColor=`bg-${props.title}`
  return (
    <div className={`w-[321px] h-[450px] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] p-4 flex flex-col gap-8 ${bgColor}`}>
      <div className='text-xl'>
        ALL SEASONS IN KOREA
      </div>
      <div className='w-full max-h-32'>
        <img className='object-cover object-center h-full w-full' src={props.imageUrl} alt='image'/>
      </div>
      <SeasonsInAllL sLan={props.sLan} title={props.title} bgColor={props.bgColor}/>
    </div>
  )
}


