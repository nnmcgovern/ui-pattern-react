import Modal from "./Modal.jsx"
import { useState } from "react"

export default function Image({ img, setImagesClicked }) {
  const [showModal, setShowModal] = useState(false)
  const style = {
    backgroundImage: `url(${img.hdurl})`
  }

  const handleClick = e => {
    setShowModal(true)

    if (setImagesClicked) {
      setImagesClicked(prev => [img, ...prev])
    }
  }

  return (
    <>
      <div className="img" style={style} onClick={handleClick} ></div>
      {showModal ? <Modal img={img} setShowModal={setShowModal} /> : <></>}
    </>
  )
}