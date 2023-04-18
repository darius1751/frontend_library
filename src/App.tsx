import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Index } from './pages/Index'
import { Books } from './pages/Books'
import { Login } from './pages/Login'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='books' element={<Books/>}/>
      </Routes>      
    </HashRouter>
  )
}

export default App
