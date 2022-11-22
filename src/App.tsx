import Header from './components/Header'
import Main from './components/Main'
import { PlansContext } from './assets/context/PlanContext'
import { data } from './assets/data/data'
import { useState, createContext } from 'react';

export const MonthlyContext = createContext({
  monthly: false,
  setMonthly: (monthly:boolean) => {!monthly}
})

const App = () => {

  const [monthly, setMonthly] = useState<boolean>(false);

  return (
    <PlansContext.Provider value={data}>
    <MonthlyContext.Provider value={{monthly, setMonthly}}>
      <Header />
      <Main />
    </MonthlyContext.Provider>
    </PlansContext.Provider>
  )
}

export default App
