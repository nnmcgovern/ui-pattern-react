import logo from "../img/nasa-logo.png"

export default function Header() {
  const handleClick = e => {
    // reload page
  }

  return (
    <header>
      <div className="title">
        <img src={logo} alt="nasa logo" />
        <h1>Astronomy Pictures</h1>
      </div>
      <p className="randomize" onClick={handleClick}>Randomize</p>
    </header>
  )
}
