import { data } from "../assets/data/data"

const Card = () => {

  const basic = data[0]

  return (
    <div className="light-card">

      <div className="pt-5 pb-6">
        <h1 className="text-[#6d708d] text-lg mb-5">{basic.planName}</h1>
        <h1 className="text-6xl text-[#494c5f] flex items-center"><span className="text-4xl">$</span>{basic.price.annual}</h1>
      </div>

      <div className="text-[#6d708d] text-lg py-4 w-full px-12">
        <div className="py-4 border-y flex flex-col justify-center">
          <h2>{basic.storageSize}</h2>
        </div>
        <div className="py-4 border-y flex flex-col justify-center">
          <h2>{basic.usersAllowed}</h2>
        </div>
        <div className="py-4 border-y flex flex-col justify-center">
          <h2>{basic.maxSendSize}</h2>
        </div>
      </div>

      <button className='light-card-button'>Learn More</button>
    </div>
  )
}

export default Card