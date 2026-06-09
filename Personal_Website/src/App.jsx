import Skills from '../components/Skills'
import Header from '../components/Header'
import './App.css'
import Profile from '../components/Profile'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { useEffect } from 'react'
import axios from 'axios'
import data from '../components/data'

const apiKey = import.meta.env.VITE_API_KEY;
function App() {
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
