import { ImageContainer } from "./ui/ImageContainer"

export const Winter:React.FC<{bgColor:string}> = (props) => {


    return (
        <div className="h-screen w-full flex flex-col justify-center items-center gap-4">
            <ImageContainer title={"winter"} />
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
                            #cherry blossom
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
