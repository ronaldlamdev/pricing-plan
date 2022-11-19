interface dataProp {
  name: string,
  price: string,
  size: string,
  users: string,
  maxSize: string,
  cardStyle: string,
  nameStyle: string,
  priceStyle: string,
  detailsStyle: string,
  buttonStyle: string
}

const Card = ({name, price, size, users, maxSize, cardStyle, nameStyle, priceStyle, detailsStyle, buttonStyle}: dataProp) => {

  return (
    <div className={cardStyle}>

      <div className="pt-5 pb-6 lg:pt-12">
        <h1 className={nameStyle}>{name}</h1>
        <h1 className={priceStyle}><span className="text-4xl">$</span>{price}</h1>
      </div>

      <div className={detailsStyle}>
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

      <button className={buttonStyle}>Learn More</button>
    </div>
  )
}

export default Card