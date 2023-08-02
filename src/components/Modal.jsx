import closeImg from "../img/close-x-gray.png"
// import white image for close button?

export default function Modal({ url, title, date, description }) {
  return (
    <div className='modal'>
      <img className='close' src={closeImg} alt="close modal" />
      <div className='img-modal'></div>
      <div className='desc'>
        <h1 className='desc-title'></h1>
        <p className='desc-date'></p>
        <p className='desc-text'></p>
      </div>
    </div>
  )
}
