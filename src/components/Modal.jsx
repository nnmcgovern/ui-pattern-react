import closeImg from "../img/close-x-gray.png"
import { useState } from "react"
// import white image for close button?

export default function Modal({ img }) {
  const style = {
    backgroundImage: `url(${img.hdurl})`
  }

  return (
    <div className='modal'>
      <img className='close' src={closeImg} alt="close modal" />
      <div className='img-modal' style={style}></div>
      <div className='desc'>
        <h1 className='desc-title'>{img.title}</h1>
        <p className='desc-date'>{img.date}</p>
        <p className='desc-text'>{img.explanation}</p>
      </div>
    </div>
  )
}
