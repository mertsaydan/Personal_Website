import Skills from '../components/Skills'
import Header from '../components/Header'
import './App.css'
import Profile from '../components/Profile'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import { useEffect } from 'react'
import axios from 'axios'
import data from '../components/data'

function App() {
 useEffect(() => {
   axios.post('https://reqres.in/api/workintech', data, {
     headers: {
       'x-api-key': 'pub_1f0846b59844545b66a7d7538f4669c44cbce244c2a15c4267c1a43a0f4f5256',
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
