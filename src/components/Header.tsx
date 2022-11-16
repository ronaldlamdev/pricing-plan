
const Header = () => {
  return (
    <header>
      <h1>Our Pricing</h1>
      <div>
        <span>Annually</span>
        <label className="relative inline-block w-[3.75rem] h-[2.125rem]">
          <input type="checkbox" className="opacity-0" />
          <span className="slider round"></span>
        </label>
        <span>Monthly</span>
      </div>
    </header>
  )
}

export default Header