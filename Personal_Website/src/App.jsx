import Skills from '../components/Skills'
import Header from '../components/Header'
import './App.css'
import Profile from '../components/Profile'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

function App() {


  return (
    <main className="max-w-[1100px] h-full justify-center items-center mx-auto">
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
