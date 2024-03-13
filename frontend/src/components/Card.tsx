interface prop {
  imgUrl: string,
  title?:string,
  description?:string
}
function Card({ imgUrl,title,description }: prop) {
  return (
    <div className="h-[15rem] flex hover:bg-[#3404ba] bg-[#160052]">
      <img className="w-[40%] h-full" src={imgUrl} alt="" srcSet="" />
      <div className=" flex-1 flex flex-col justify-between">
        <div className="p-2">
          <h1 className="text-2xl">{title}</h1>
          <br />
          <div>
            {description}
          </div>
        </div>
        <div className=" flex justify-center">
          <button className="bg-green-700 hover:bg-green-500 w-[20%] p-4 rounded-md">download</button>
        </div>
      </div>
    </div>
  )
}

export default Card