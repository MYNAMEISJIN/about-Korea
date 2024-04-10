
export const Navigation = () => {
  return (
    <div className="h-screen fixed right-0 flex flex-col justify-between pt-5 pr-4 pb-4 max-md:hidden">
      <a href="mailto:s.jinnn.park@gmail.com" className=" underline underline-offset-4">
        s.jinnn.park@gmail.com
      </a>
      <div className=" font-SokchoLight flex flex-col items-end text-lg">
        <div className="flex flex-col">
          <a href="#spring" className="hover:font-bold transition-all">
            #spring
          </a>
          <a href="#summer" className=" hover:font-bold">
            #summer
          </a>
          <a href="#autumn" className=" hover:font-bold">
            #autumn
          </a>
          <a href="#winter" className=" hover:font-bold">
            #winter
          </a>
        </div>
      </div>
    </div>
  )
}
