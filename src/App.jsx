import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import './index.css'

function App() {

  return (
    <>
    <div className="container">
      <Navbar/>
      <Main/>
      <Skills />
    </div>
      <Experience />
      <div className="container">
        <About />
      </div>
      <Projects />
        <Contact />
        <Footer />
    </>
  )
}

export default App
