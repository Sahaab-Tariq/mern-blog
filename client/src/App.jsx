import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignIn from './pages/SignIn'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/projects' element={<Projects/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
