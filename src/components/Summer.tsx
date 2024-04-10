import { ImageContainer } from "./ui/ImageContainer"
import { SeasonTranslations } from "../pages/home/Home"

export const Summer:React.FC<{bgColor:string, sLan:SeasonTranslations}> = (props) => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-4">
      <ImageContainer title={"summer"} bgColor={props.bgColor} sLan={props.sLan} imageUrl={"https://dashboard.globalsemesters.com/gls/res/internal_programs_pictures_big/138469_seoul-korea-summer-korean-studies-study-abroad-program-lily-pond-21.jpg"}/>
      <div className="font-SokchoLight font-extrabold flex flex-col">
        <div className="flex flex-col justify-center items-center gap-3">
          <div>
            korean summer
          </div>
          <div className={`text-sm ${props.bgColor==="bg-winter"?"text-spring":"text-winter"} transition duration-1000`}>
            June to August
          </div>

          <div className="text-sm">
            <div>
              #waterbomb festival
            </div> 
            <div>
              #naengmyeon
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
