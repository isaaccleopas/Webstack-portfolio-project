import {Route, Routes} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Properties from './components/properties/Properties'
import About from './components/about/About'
import Footer from './components/footer/Footer'
import PropertyDetail from './components/propertyDetail/PropertyDetail'
import Signup from './components/signup/Signup'
import Signin from './components/signin/Signin'
import Stats from './components/stats/Stats'
import Newsletter from './components/newsletter/Newsletter'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <Hero />
	    <Properties/>
            <About/>
            <Stats />
            <Newsletter/>
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

        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
