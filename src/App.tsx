import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Index } from './pages/Index'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>      
      </Routes>      
    </HashRouter>
  )
}

export default App
