import Modal from "./Modal.jsx"
import { useState } from "react"

export default function Image({ img }) {
  const [showModal, setShowModal] = useState(false)
  const style = {
    backgroundImage: `url(${img.hdurl})`
  }

  const toggleModal = e => {
    setShowModal(true)
  }

  return (
    <>
      <div className="img" style={style} onClick={toggleModal} ></div>

      {showModal ? <Modal img={img} setShowModal={setShowModal} /> : <></>}
    </>
  )
}