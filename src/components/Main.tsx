import Card from "./Card"
import { data } from '../assets/data/data';

const Main = () => {
  return (
    <main className="px-4 py-8 flex flex-col items-center lg:flex-row lg:justify-center lg:mt-8">
      {data.map((plan, index) => (
        <Card key={index}
              name={plan.name}
              price={plan.price.annual}
              size={plan.storageSize}
              users={plan.usersAllowed}
              maxSize={plan.maxSendSize}
              cardStyle={plan.cssStyles.card}
              nameStyle={plan.cssStyles.name}
              priceStyle={plan.cssStyles.price}
              detailsStyle={plan.cssStyles.details}
              buttonStyle={plan.cssStyles.button}
        />
      ))}
    </main>
  )
}

export default Main