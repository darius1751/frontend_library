import { HashRouter, Route, Routes } from 'react-router-dom'
import { Index } from './pages/Index'
import { Books } from './pages/Books'
import { Login } from './pages/Login'
import { Provider } from 'react-redux';
import { reduxStores } from './providers/reduxStore'
import { Book } from './pages/Book'
import { Dashboard } from './pages/Dashboard'
import { CreateBook } from './pages/CreateBook';
import './App.css'
export const App = () => {
  return (
    
      <Provider store={reduxStores}>
        <HashRouter>
            <Routes>
              <Route path='/' element={<Index/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='books' element={<Books/>}/>
              <Route path='book/:code' element={<Book/>}/>
              <Route path='dashboard'>
                <Route path='' element={<Dashboard/>}/>
                <Route path='create-book' element={<CreateBook/>}/>
              </Route>
              
          </Routes>      
        </HashRouter>
    </Provider>
  )
}

