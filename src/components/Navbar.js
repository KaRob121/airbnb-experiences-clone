import airbnbLogo from '../images/airbnb 1.png'

function Navbar() {
  return (
    <nav className="nav">
      <img className="nav--logo" src={airbnbLogo} />
    </nav>
  )
}

export default Navbar