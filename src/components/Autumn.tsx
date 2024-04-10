import React from "react"
import { ImageContainer } from "./ui/ImageContainer"
import { SeasonTranslations } from "../pages/home/Home"

const Autumn:React.FC<{bgColor:string, sLan:SeasonTranslations}> = (props) => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-4">
      <ImageContainer title={"autumn"} sLan={props.sLan} bgColor={props.bgColor} imageUrl={"https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,w_680/v1662014004/blog/snonqcvsmwiknloo6hxv.jpg"} />
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
              #autumn leaves festival
            </div>
            <div>
              #songpyeon
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Autumn