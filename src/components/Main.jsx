import Image from "./Image.jsx"
import { useState, useEffect } from "react"
import { getMedia } from "../services/apiGet.js"

export default function Main() {
  const [row1, setRow1] = useState([])
  const [row2, setRow2] = useState([])

  useEffect(() => {
    fetchImages()
  }, [])

  async function fetchImages() {
    const media = await getMedia()
    const images = []
    let i = 0

    // use first 10 with media_type === image
    while (images.length < 10 && i < 20) {
      if (media[i]["media_type"] === "image") {
        images.push(media[i])
      }
      i++
    }
    // && i < 20 in case there are less than 10 images in media,
    // to prevent infinite loop

    setRow1(images.slice(0, 5))
    setRow2(images.slice(5))
  }

  return (
    <main>
      <div className='row'>
        {row1.map(img => (
          <Image img={img} key={img.date} />
        ))}
      </div>
      <div className='row'>
        {row2.map(img => (
          <Image img={img} key={img.date} />
        ))}
      </div>
    </main>
  )
}