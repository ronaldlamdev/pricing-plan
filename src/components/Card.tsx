import { data } from "../assets/data/data"

const Card = () => {

  const basic = data[0]

  return (
    <div className="w-full max-w-[375px] h-[400px] flex flex-col text-center items-center shadow-lg rounded-xl bg-white">

      <div className="py-8">
        <h1 className="text-[#6d708d] text-lg">{basic.planName}</h1>
        <h1 className="text-6xl mt-4 text-[#494c5f] flex items-center"><span className="text-4xl">$</span>{basic.price.annual}</h1>
      </div>

      <div className="text-[#6d708d] text-lg">
        <div>
          <h2>{basic.storageSize}</h2>
        </div>
        <div>
          <h2>{basic.usersAllowed}</h2>
        </div>
        <div>
          <h2>{basic.maxSendSize}</h2>
        </div>
      </div>

      <button className="bg-gradient-to-r
  from-[#a3a8f0] to-[#696fdd] text-white">Learn More</button>
    </div>
  )
}

export default Card