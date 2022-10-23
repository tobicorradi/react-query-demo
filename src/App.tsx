import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import PhotoGallery from './components/PhotoGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      Photolist API + React Query
      <PhotoGallery />
    </div>
  )
}

export default App
