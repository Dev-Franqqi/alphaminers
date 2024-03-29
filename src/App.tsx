import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Deposit from "./pages/Deposit"
import "./App.css"
import About from "./pages/About"
import Education from "./pages/Education/Education"
import Intermediate from "./pages/Education/Advanced"
import Advanced from "./pages/Education/Advanced"
import Withdraw from "./pages/Withdraw"
import Settings from "./pages/Settings"
export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element= {<Home />} />
    <Route path='/login' element= {<Login />} />
    <Route path='/signup' element= {<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/withdraw' element={<Withdraw />} />
        <Route path='/dashboard/settings' element={<Settings />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/education" element={<Education />} />
        <Route path="/education/intermediate" element={<Intermediate />} />
        <Route path="/education/advanced" element={<Advanced />} />
        <Route path="/about" element={<About />} />


   </Routes>
   </BrowserRouter>
  )
}