import Header from './components/Header'
import Main from './components/Main'
import { PlansContext } from './assets/context/PlanContext'
import { MonthlyContext } from './assets/context/MonthlyContext'
import { data } from './assets/data/data'
import { useState } from 'react'

const App = () => {

  const [monthly, setMonthly] = useState(false);

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
