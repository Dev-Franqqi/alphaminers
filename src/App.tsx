import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Deposit from "./pages/Deposit"
import "./App.css"
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
   
   </Routes>
   </BrowserRouter>
  )
}