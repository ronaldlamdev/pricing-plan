import Header from './components/Header'
import Main from './components/Main'
import { RateContextProvider } from './assets/context/RateContext'

const App = () => {



  return (
    <RateContextProvider>
      <Header />
      <Main />
    </RateContextProvider>
  )
}

export default App
