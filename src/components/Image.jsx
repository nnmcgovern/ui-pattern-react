import Modal from "./Modal.jsx"
import { useState } from "react"

export default function Image({ img }) {
  const [showModal, setShowModal] = useState(false)
  const style = {
    backgroundImage: `url(${img.hdurl})`
  }

  const toggleModal = e => {
    if (showModal) {
      setShowModal(false)
    }
    else {
      setShowModal(true)
    }
  }

  console.log("img: ", img)

  return (
    <>
      <div className="img" style={style} onClick={toggleModal} ></div>

      {showModal ? <Modal img={img} /> : <></>}
    </>
  )
}