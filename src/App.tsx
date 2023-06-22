import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import "./App.css"

export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element= {<Home />} />
    <Route path='/login' element= {<Login />} />
    <Route path='/signup' element= {<Signup />} />
    <Route path='/dashboard' element= {<Dashboard />} />
   
   </Routes>
   </BrowserRouter>
  )
}