import logo from "../img/nasa-logo.png"
import { NavLink, useNavigate } from "react-router-dom"

export default function Header({setReload}) {
  let navigate = useNavigate()

  const handleClickRandom = e => {
    setReload(prev => !prev)
    navigate("/")
  }

  return (
    <header>
      <div className="title">
        <img src={logo} alt="nasa logo" />
        <h1>Astronomy Pictures</h1>
      </div>
      <NavLink className="home" to="/">Home</NavLink>
      <p className="randomize" onClick={handleClickRandom}>Randomize</p>
      <NavLink className="recent" to="/recent">Recently Viewed</NavLink>
    </header>
  )
}