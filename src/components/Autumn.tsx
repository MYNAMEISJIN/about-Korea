import React from "react"
import { ImageContainer } from "./ui/ImageContainer"

const Autumn:React.FC<{bgColor:string}> = (props) => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-4">
      <ImageContainer title={"autumn"} />
      <div className="font-SokchoLight font-extrabold flex flex-col">
        <div className="flex flex-col justify-center items-center gap-3">
          <div>
            korean autumn
          </div>
          <div className={`text-sm ${props.bgColor==="bg-winter"?"text-spring":"text-winter"} transition duration-1000`}>
            September to November
          </div>

          <div className="text-sm">
            <div>
              #waterbomb
            </div>
            <div>
              #something to represent
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Autumn