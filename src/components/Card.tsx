import { data } from "../assets/data/data"

const Card = () => {

  const basic = data[0]
  const professional = data[1]
  const master = data[2]

  return (
    <div className="w-full h-[400px] bg-white">

      <div className="">
        <h1>{basic.planName}</h1>
        <h1>{basic.price.annual}</h1>
      </div>

      <div>
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

      <button>Learn More</button>
    </div>
  )
}

export default Card