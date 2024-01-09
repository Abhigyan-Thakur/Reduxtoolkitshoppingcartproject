import './App.css'
import { Routes, Route } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Cart from './components/Cart'
import Dashboard from './components/Dashboard'
function App() {
  return (
    <>
      <RootLayout />
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </>
  )
}

export default App
