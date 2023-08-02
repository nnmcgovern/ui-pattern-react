export default function Image({ img }) {
  const style = {
    backgroundImage: `url(${img.hdurl})`
  }

  return (
    <div className="img" style={style}></div>
  )
}