interface dataProp {
  name: string,
  price: string,
  size: string,
  users: string,
  maxSize: string
}

const Card = ({name, price, size, users, maxSize}: dataProp) => {

  return (
    <div className="light-card">

      <div className="pt-5 pb-6">
        <h1 className="text-[#6d708d] text-lg mb-5">{name}</h1>
        <h1 className="text-6xl text-[#494c5f] flex items-center"><span className="text-4xl">$</span>{price}</h1>
      </div>

      <div className="text-[#6d708d] text-lg py-4 w-full px-12">
        <div className="py-4 border-y flex flex-col justify-center">
          <h2>{size}</h2>
        </div>
        <div className="py-4 border-y flex flex-col justify-center">
          <h2>{users}</h2>
        </div>
        <div className="py-4 border-y flex flex-col justify-center">
          <h2>{maxSize}</h2>
        </div>
      </div>

      <button className='light-card-button'>Learn More</button>
    </div>
  )
}

export default Card