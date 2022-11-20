import { createContext, useState } from "react";

type RateContextProviderProps = {
  children: React.ReactNode
}

const Monthly = () => {
  const [monthlyRate, setMonthlyRate] = useState(false);
}

export const RateContext = createContext(Monthly);

export const RateContextProvider = ({
  children,
}: RateContextProviderProps) => {
  return <RateContext.Provider value={Monthly}>
          {children}
        </RateContext.Provider>
}
