import { ImageContainer } from "./ui/ImageContainer"
import { SeasonTranslations } from "../pages/home/Home"

export const Winter:React.FC<{bgColor:string, sLan:SeasonTranslations}> = (props) => {
console.log(props.bgColor)
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center gap-4">
            <ImageContainer title={"winter"} sLan={props.sLan} bgColor={props.bgColor}  imageUrl={"https://img.freepik.com/free-photo/baekyangsa-temple-and-falling-snow-naejangsan-mountain-in-winter-with-snow-famous-mountain-in-korea-winter-landscape_335224-439.jpg"}/>
            <div className="font-SokchoLight font-extrabold flex flex-col">
                <div className="flex flex-col justify-center items-center gap-3">
                    <div>
                        korean winter
                    </div>
                    <div className={`text-sm ${props.bgColor==="bg-winter"?"text-spring":"text-winter"} transition duration-1000`}>
                        December to February 
                    </div>

                    <div className="text-sm">
                        <div>
                            #Lunar New Year
                        </div>
                        <div>
                            #tteokguk
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
