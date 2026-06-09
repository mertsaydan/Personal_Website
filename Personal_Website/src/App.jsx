import Skills from '../components/Skills'
import Header from '../components/Header'
import Profile from '../components/Profile'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { useEffect } from 'react'
import axios from 'axios'
import data from '../components/data'
import { useData } from '../components/DataContext'


function App() {
  const { darkMode } = useData()
  const mainClass = darkMode ? 'bg-[#252128] text-white' : 'bg-white text-black'

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    axios.post('https://reqres.in/api/workintech', data, {
      headers: {
        'x-api-key': apiKey
      },
    })
      .then(res => console.log(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className={`w-full ${mainClass}`}>
      <main className={`min-h-screen max-w-[1100px] mx-auto overflow-x-hidden `}>
        <Header />
        <Skills />
        <Profile />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
