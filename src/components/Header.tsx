
const Header = () => {
  return (
    <header>
      <h1>Our Pricing</h1>
      <div>
        <span>Annually</span>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <span>Monthly</span>
      </div>
    </header>
  )
}

export default Header