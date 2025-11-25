import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div>

      <Header />
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<h1>404 not found</h1>} />
      </Routes>
      <Footer />
    </Router>
    </div>
  )
}

export default App
