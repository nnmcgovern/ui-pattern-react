import Image from "./Image.jsx"
import { useState } from "react"

export default function Recent({ imagesClicked }) {
  const row1 = []
  const row2 = []
  const style = {
    color: "white"
  }
  
  for (let i = 0; i < 5; i++) {
    if (imagesClicked[i]) {
      row1.push(imagesClicked[i])
    }
    else {
      break
    }
  }

  for (let i = 5; i < 10; i++) {
    if (imagesClicked[i]) {
      row2.push(imagesClicked[i])
    }
    else {
      break
    }
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