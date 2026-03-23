import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import WhyMe from './components/WhyMe'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="scanlines">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <WhyMe />
      <Contact />
      <Footer />
    </div>
  )
}
