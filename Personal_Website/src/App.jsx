import Skills from '../components/Skills'
import Header from '../components/Header'
import './App.css'
import Profile from '../components/Profile'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

function App() {


  return (
    <main className="min-h-screen w-full max-w-[1100px] mx-auto overflow-x-hidden bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <Header />
      <Skills />
      <Profile />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
