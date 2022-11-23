import Card from "./Card"
import { useContext } from "react";
import { PlansContext } from "../assets/context/PlanContext";
import { MonthlyContext } from "../assets/context/MonthlyContext";

const Main = () => {

  const plans = useContext(PlansContext);
  const {monthly} = useContext(MonthlyContext);

  return (
    <main className="px-4 py-8 flex flex-col items-center lg:flex-row lg:justify-center lg:mt-8">
      {plans.map((plan, index) => (
        <Card key={index}
              name={plan.name}
              price={monthly ? plan.price.monthly : plan.price.annual}
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