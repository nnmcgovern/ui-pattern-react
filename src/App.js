import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Recent from "./components/Recent.jsx"
import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import { getMedia } from "./services/apiGet.js"
import './App.css'

function App() {
  const [reload, setReload] = useState(false)
  const [row1, setRow1] = useState([])
  const [row2, setRow2] = useState([])
  const [imagesClicked, setImagesClicked] = useState([])

  useEffect(() => {
    fetchImages()
  }, [reload])

  async function fetchImages() {
    const media = await getMedia()
    const imagesData = []
    let i = 0

    // use first 10 with media_type === image
    while (imagesData.length < 10 && i < 20) {
      if (media[i]["media_type"] === "image") {
        imagesData.push(media[i])
      }
      i++
    }
    // && i < 20 in case there are less than 10 imagesData in media,
    // to prevent infinite loop

    setRow1(imagesData.slice(0, 5))
    setRow2(imagesData.slice(5))
  }

  return (
    <div className="App">
      <Header setReload={setReload} />
      <Routes>
        <Route path="/" element={<Main row1={row1} row2={row2} imagesClicked={imagesClicked} setImagesClicked={setImagesClicked} />} />
        <Route path="/recent" element={<Recent imagesClicked={imagesClicked} />} />
      </Routes>
    </div>
  )
}

export default App