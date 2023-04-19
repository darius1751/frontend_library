import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Index } from './pages/Index'
import { Books } from './pages/Books'
import { Login } from './pages/Login'
import { Provider } from 'react-redux';
import { bookStore } from './providers/stores/booksStore'
function App() {

  return (
    <Provider store={bookStore}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='books' element={<Books/>}/>
        </Routes>      
      </HashRouter>
      </Provider>
  )
}

export default App
