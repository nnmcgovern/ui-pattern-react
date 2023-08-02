import Image from "./Image.jsx"
import { useState, useEffect } from "react"
import { getImages } from "../services/apiGet.js"

export default function Main() {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetchImages()
  }, [])

  async function fetchImages() {
    const images = await getImages()
    console.log(images)
  }

  return (
    <main>
      <div className='row'>
        {/* <Image />
        <Image />
        <Image />
        <Image />
        <Image /> */}



      </div>
      <div className='row'>
        {/* <Image />
        <Image />
        <Image />
        <Image />
        <Image /> */}



      </div>
    </main>
  )
}
