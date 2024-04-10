import React from 'react'
import { SeasonTranslations } from '../../pages/home/Home'

const SeasonsInAllL: React.FC<{title:string, sLan: SeasonTranslations,bgColor:string }> = (props) => {
  console.log("hi",props.bgColor)


    return (
        <div className=' relative  h-full flex flex-col justify-between font-bold'>
            <div className='flex justify-between lowercase relative '>
                <div className={`pl-4 text-3xl ${props.bgColor==="bg-winter"?"text-spring":"text-winter"} transition duration-700`}>
                    {props.sLan.english}
                </div>
                <div className='text-base '>
                    {props.sLan.spanish}
                </div>
            </div>
            <div className='flex justify-around lowercase '>
                <div className='flex flex-col relative'>
                    <div className='absolute right-1 bottom-2 text-xl'>  {props.sLan.arabic}</div>
                    <div className='absolute top-5 right-1'>{props.sLan.mongolian}</div>
                </div>

                <div className='flex flex-col relative'>
                    <div className={`${props.bgColor==="bg-winter"?"text-spring":"text-winter"} transition duration-700
                    absolute bottom-1 text-xl
                    `}> {props.sLan.hungarian}</div>
                    <div className='absolute top-4 left-1 text-2xl'> {props.sLan.japanese}</div>
                </div>
            </div>
            <div className='absolute w-full h-full flex justify-center items-center'>
                <div className={`text-6xl ${props.bgColor==="bg-winter"?"text-spring":"text-winter"} transition duration-700`}>
                    {props.sLan.korean}
                </div>
            </div>
            <div className='flex flex-col lowercase '>
              
                <div className="text-end text-2xl">
                    {props.sLan.german}
                </div>
                <div className={`pl-10 text-2xl ${props.bgColor==="bg-winter"?"text-spring":"text-winter"} transition duration-700`}>
                    {props.sLan.french}
                </div>
            </div>

        </div>
    )
}

export default SeasonsInAllL