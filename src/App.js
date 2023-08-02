import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

import './App.css'

// dont use Home, Row for now

function App() {
  return (
    <div className="App">

      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}

      <Header />
      <Main />

    </div>
  )
}

export default App
