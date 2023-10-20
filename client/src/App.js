import {Navigate, Route, Routes, useLocation} from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
// import PropertyCard from './components/propertyCard/PropertyCard'
import Properties from './components/properties/Properties'
import Footer from './components/footer/Footer'
import PropertyDetail from './components/propertyDetail/PropertyDetail'
import Signup from './components/signup/Signup'
import Signin from './components/signin/Signin'
import Stats from './components/stats/Stats'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function App() {
  const { user } = useSelector((state) => state.auth)
  const url = useLocation().pathname

  useEffect(() => {
    url && window.scrollTo(0, 0)
  }, [url])

  return (
    <div>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Hero />
            {/* <PropertyCard/> */}
            <Stats />
            <Footer />
          </>
        } />

        <Route path='/properties' element={
          <>
            <Navbar />
            <Properties />
            <Footer />
          </>
        } />

        <Route path='/propertyDetail/:id' element={
          <>
            <Navbar />
            <PropertyDetail />
            <Footer />
          </>
        } />

        <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />} />
        <Route path='/signin' element={!user ? <Signin /> : <Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
