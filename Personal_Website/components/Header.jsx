import { useData } from './DataContext'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Header() {
  const { data, locale, setLocale, darkMode, setDarkMode } = useData()
  const headerBgClass = darkMode
    ? 'bg-[linear-gradient(90deg,#171043_0%,#171043_66%,#211F0B_66%,#211F0B_100%)] text-white'
    : 'bg-[linear-gradient(90deg,#4731D3_0%,#4731D3_66%,#CBF281_66%,#CBF281_100%)] text-white'

  const notify = (message) => {
    toast.info(message, {
      position: 'top-right',
      autoClose: 1800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: 'colored',
      style: {
        background: darkMode ? '#CBF281' : '#3730A3', 
        color: darkMode ? '#3730A3' : '#CBF281', 
        fontWeight: 'bold',
        borderRadius: '10px'
      },
    })
  }

  const handleLocaleChange = () => {
    const nextLocale = locale === 'tr' ? 'en' : 'tr'
    setLocale(nextLocale)
    notify(nextLocale === 'en' ? 'Switched to English' : "Türkçe'ye geçildi")
  }

  const handleDarkModeChange = () => {
    const nextDarkMode = !darkMode
    setDarkMode(nextDarkMode)
    notify(nextDarkMode ? 'Dark mode enabled' : 'Light mode enabled')
  }

  return (
    <header className={`relative w-full min-h-[500px] ${headerBgClass}`}>
      <div className="absolute left-4 top-4 z-20 md:left-[60%] md:top-6 md:-translate-x-1/2">
        <button
          type="button"
          onClick={handleLocaleChange}
          className="whitespace-nowrap text-xs text-white"
        >
          {locale === 'tr' ? (
            <>
              <span className="text-white">TO </span>
              <span className="text-[#CBF281]">ENGLISH</span>
            </>
          ) : (
            <>
              <span className="text-[#CBF281]">TÜRKÇE</span>
              <span className="text-white">'YE GEÇ</span>
            </>
          )}
        </button>
      </div>

      <div className="absolute right-4 top-4 z-20 md:left-[74%] md:top-6 md:-translate-x-1/2 md:right-auto">
        <button
          type="button"
          onClick={handleDarkModeChange}
          className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs transition whitespace-nowrap ${darkMode ? 'text-white' : 'text-[#3730A3]'}`}
        >
          <span className={`flex h-5 w-10 items-center rounded-full ${darkMode ? 'bg-[#94A3B8]/30' : 'bg-[#3730A3]/70'} p-0.5 transition ${darkMode ? 'justify-end' : 'justify-start'}`}>
            <span className="h-3 w-3 rounded-full bg-[#FFE86E] shadow-md transition" />
          </span>
          {darkMode ? 'LIGHT MODE' : 'DARK MODE'}
        </button>
      </div>

      <div className="flex min-h-[500px] flex-col justify-between gap-8 px-4 py-20 sm:px-8 lg:flex-row lg:px-0 lg:py-0">
        <div className="flex flex-col gap-6 lg:h-full lg:ml-30 lg:gap-10">
          <h3 className="text-[#CBF281] mt-10 font-bold text-xl">{data.heroSection.greeting}</h3>
          <h2 className="max-w-[14ch] text-3xl font-bold leading-tight text-[#CBF281] whitespace-pre-line sm:text-4xl">{data.heroSection.intro}</h2>
          <p className="max-w-xl text-sm font-thin text-white whitespace-pre-line sm:text-base">{data.heroSection.headerText}</p>
          <div className="flex flex-wrap gap-3">
            <button className="flex gap-2 bg-white text-[#3730A3] py-2 px-4 rounded-sm ">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>Github</button>
            <button className="flex gap-2 bg-white text-[#3730A3] py-2 px-4 rounded-sm">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
              Linkedin</button>
          </div>
        </div>
      </div>

      <div className="hidden md:block md:absolute md:left-[66%] md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
        <img src={data.heroSection.profileImage} alt="Avatar" className="h-[220px] w-[220px] rounded-full object-cover md:h-[260px] md:w-[300px]" />
      </div>
      <ToastContainer />
    </header>
  )
}

export default Header;
