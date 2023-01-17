
import './App.css'
import { Hero } from './components/Hero'
import { Iconos } from './components/Iconos'
import { Instalacion } from './components/Instalacion'
import { Navbar } from './components/Navbar'
import { Serveis } from './components/Serveis'


function App() {
  

  return (
    <div >
      <Navbar />
      <Hero />
      
      <Instalacion />
      <Serveis />
      
    </div>
  )
}

export default App
