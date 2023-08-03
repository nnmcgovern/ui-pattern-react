import closeImg from "../img/close-x-gray.png"
import closeImgHover from "../img/close-x-white.png"

export default function Modal({ img, setShowModal }) {
  const style = {
    backgroundImage: `url(${img.hdurl})`
  }

  const handleMouseOver = e => {
    e.target.src = closeImgHover
  }

  const handleMouseOut = e => {
    e.target.src = closeImg
  }

  const handleClick = e => {
    setShowModal(false)
  }

  return (
    <div className='modal'>
      <img className='close' src={closeImg} alt="close modal"
        onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}
        onClick={handleClick} />
      <div className='img-modal' style={style}></div>
      <div className='desc'>
        <h1 className='desc-title'>{img.title}</h1>
        <p className='desc-date'>{img.date}</p>
        <p className='desc-text'>{img.explanation}</p>
      </div>
    </div>
  )
}