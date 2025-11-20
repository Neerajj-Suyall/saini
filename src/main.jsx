import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"
import UserDetails from './pages/UserDetails.jsx'
import CompanyDetails from './pages/CompanyDetails.jsx'
import Contact from './pages/Contact.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/UserDetails" element={<UserDetails />} />
        <Route path="/CompanyDetails" element={<CompanyDetails />} />
        <Route path="/" element={<App />}  >
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
      </Route>
       </>
      )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      
          <RouterProvider router={router} />
      
  </StrictMode>,
)
