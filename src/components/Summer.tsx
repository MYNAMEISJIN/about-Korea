import { ImageContainer } from "./ui/ImageContainer"

export const Summer:React.FC<{bgColor:string}> = (props) => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-4">
      <ImageContainer title={"summer"} />
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
