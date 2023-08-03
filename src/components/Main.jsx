import Image from "./Image.jsx"

export default function Main({ row1, row2, imagesClicked, setImagesClicked }) {

  return (
    <main>
      <div className='row'>
        {row1.map(img => (
          <Image img={img} imagesClicked={imagesClicked} setImagesClicked={setImagesClicked} key={img.date} />
        ))}
      </div>
      <div className='row'>
        {row2.map(img => (
          <Image img={img} imagesClicked={imagesClicked} setImagesClicked={setImagesClicked} key={img.date} />
        ))}
      </div>
    </main>
  )
}