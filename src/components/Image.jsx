import Modal from "./Modal.jsx"
import { useState } from "react"

export default function Image({ img, imagesClicked, setImagesClicked }) {
  const [showModal, setShowModal] = useState(false)
  const style = {
    backgroundImage: `url(${img.hdurl})`
  }

  const handleClick = e => {
    setShowModal(true)

    // will execute only if setImagesClicked has been defined
    // (i.e. will not execute when clicking on image within Recently Viewed)
    if (setImagesClicked) {

      // if clicked image has been added to imagesClicked before
      if (imagesClicked.includes(img)) {
        setImagesClicked(prev => {
          const newArr = []

          // find index of duplicate
          const indexDup = prev.findIndex(imgPrev => imgPrev.date === img.date)

          prev.forEach((imgPrev, i) => {
            if (i !== indexDup) {
              newArr.push(imgPrev)
            }
          })

          // push most recently clicked image
          newArr.unshift(img)

          return newArr
        })
      }
      else {
        setImagesClicked(prev => [img, ...prev])
      }
    }
  }

  return (
    <>
      <div className="img" style={style} onClick={handleClick} ></div>
      {showModal ? <Modal img={img} setShowModal={setShowModal} /> : <></>}
    </>
  )
}