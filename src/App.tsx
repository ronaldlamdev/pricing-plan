import Header from './components/Header'
import Main from './components/Main'
import { PlansContext } from './assets/context/PlanContext'
import { MonthlyContext } from './assets/context/RateContext'
import { data } from './assets/data/data'

const App = () => {
  return (
    <PlansContext.Provider value={data}>
    <MonthlyContext.Provider value={false}>
      <Header />
      <Main />
    </MonthlyContext.Provider>
    </PlansContext.Provider>
  )
}

export default App
