
export const Navigation = () => {
  return (
    <div className="h-screen fixed right-0 flex flex-col justify-between pt-5 pr-4 pb-4">
      <a href="mailto:s.jinnn.park@gmail.com" className=" underline underline-offset-4">
        s.jinnn.park@gmail.com
      </a>
      <div className=" font-SokchoLight flex flex-col items-end text-lg">
        <div>
          <div className="hover:font-bold">
            #spring
          </div>
          <div className=" hover:font-bold">
            #summer
          </div>
          <div className=" hover:font-bold">
            #autumn
          </div>
          <div className=" hover:font-bold">
            #winter
          </div>
        </div>
      </div>
    </div>
  )
}
