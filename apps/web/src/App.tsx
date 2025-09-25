import { BrowserRouter, Routes, Route } from 'react-router-dom'
import KitchenSink from './pages/KitchenSink'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Recipes from './pages/Recipes'
import Login from './pages/Login'
import ColorUsageExamples from './examples/ColorUsageExamples'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kitchen-sink" element={<KitchenSink />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/color-usage-examples" element={<ColorUsageExamples />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
