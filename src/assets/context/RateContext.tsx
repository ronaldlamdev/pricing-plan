import { createContext } from "react";
import { data } from "../data/data";

type RateContextProviderProps = {
  children: React.ReactNode
}

export const RateContext = createContext(data);

export const RateContextProvider = ({children} : RateContextProviderProps) => {
  return <RateContext.Provider value={data}>{children}</RateContext.Provider>
}