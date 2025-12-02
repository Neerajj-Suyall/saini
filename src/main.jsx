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
import Acservices from './pages/Acservices.jsx'
import Frezservices from './pages/Frezservices.jsx'
import Wcservices from './pages/Wcservices.jsx'
import Wmservices from './pages/WMservices.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import TermsConditions from './pages/TermsConditions.jsx'
import ShippingPolicy from './pages/ShippingPolicy.jsx'
import RefundPolicy from './pages/RefundPolicy.jsx'
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
            <Route path="/Ac Services" element={<Acservices />} />
            <Route path="/Ac Services/:id" element={<ProductDetail />} />
            <Route path="/Refrigerator Services" element={<Frezservices />} />
            <Route path="/Refrigerator Services/:id" element={<ProductDetail />} />
            <Route path="/Water cooler Services" element={<Wcservices />} />
            <Route path="/Water cooler Services/:id" element={<ProductDetail />} />
            <Route path="/Washing machine Services" element={<Wmservices />} />
            <Route path="/Washing machine Services/:id" element={<ProductDetail />} />
            <Route path="/Terms-Conditions" element={<TermsConditions />} />
            <Route path="/Shipping-Policy" element={<ShippingPolicy />} />
            <Route path="/Refund-Policy" element={<RefundPolicy />} />
      </Route>
       </>
      )
)

createRoot(document.getElementById('root')).render(
  <>
      
          <RouterProvider router={router} />
      
  </>,
)
