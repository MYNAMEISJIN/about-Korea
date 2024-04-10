import { ImageContainer } from "./ui/ImageContainer"
import { SeasonTranslations } from "../pages/home/Home"

const Spring:React.FC<{bgColor:string, sLan:SeasonTranslations}> = (props) => {
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center gap-4">
            <ImageContainer title={"spring"} bgColor={props.bgColor} sLan={props.sLan} imageUrl={"https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cmsfeatured/south-korea-in-may-1707992166-785X440.jpg"} />
            <div className="font-SokchoLight font-extrabold flex flex-col">
                <div className="flex flex-col justify-center items-center gap-3">
                    <div>
                        korean spring
                    </div>
                    <div className={`text-sm ${props.bgColor==="bg-winter"?"text-spring":"text-winter"} transition duration-1000`}>
                        March to May
                    </div>

                    <div className="text-sm">
                        <div>
                            #cherry blossom festival
                        </div>
                        <div>
                            #spring Greens
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Spring