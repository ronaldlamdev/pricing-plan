import { useContext } from "react";
import { RateContext } from "../assets/context/RateContext";

const Header = () => {

  const rate = useContext(RateContext)

  return (
    <header className="px-4 py-12 w-full flex flex-col justify-center items-center lg:mt-8">
      <h1 className="text-[#6d708d] text-3xl">Our Pricing</h1>
      <div className="w-full mt-12 max-w-[300px] flex justify-between items-center px-4">
        <span className="text-[#b3b5c6]">Annually</span>
        <label className="relative w-[3.75rem] h-[2.125rem]">
          <input type="checkbox" className="opacity-0" />
          <span className="slider"></span>
        </label>
        <span className="text-[#b3b5c6]">Monthly</span>
      </div>
    </header>
  )
}

export default Header