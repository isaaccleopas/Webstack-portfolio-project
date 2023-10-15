import {Route, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Properties from './components/properties/Properties'
import Footer from './components/footer/Footer'
import PropertyDetail from './components/propertyDetail/PropertyDetail'
import Signup from './components/signup/Signup'
import Signin from './components/signin/Signin'
import Stats from './components/stats/Stats'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Hero />
            <Properties />
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

        <Route path='/propertyDetail/:propertyId' element={
          <>
            <Navbar />
            <PropertyDetail />
            <Footer />
          </>
        } />

        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
