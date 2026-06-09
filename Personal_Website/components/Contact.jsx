import { useData } from './DataContext'

function Contact() {
  const { data, darkMode } = useData()
  const { title, description, email } = data.contactSection
  const sectionClass = darkMode ? 'bg-[#14111F]' : 'bg-white'
  const titleClass = darkMode ? 'text-[#C4B5FD]' : 'text-[#4731D3]'
  const bodyClass = darkMode ? 'text-white' : 'text-black'
  const linkClass = darkMode ? 'text-[#C4B5FD]' : 'text-[#4731D3]'

  return (
    <div className={`flex flex-col w-full items-center h-[300px] ${sectionClass}`}>
      <h1 className={`text-4xl font-bold pt-10 ${titleClass}`}>{title}</h1>
      <p className={`font-light text-sm mt-4 text-center whitespace-pre-line ${bodyClass}`}>{description}</p>
      <a href={`mailto:${email}`} className={`font-extralight text-sm mt-4 underline ${linkClass}`}>
        {email}
      </a>
      <div className="flex flex-row gap-4 mt-2">
        <a href="https://www.linkedin.com/in/mertsaydan/" target="_blank" className={`font-light text-sm mt-4 underline ${linkClass}`}>
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a href="https://github.com/mertsaydan" target="_blank" className={`font-light text-sm mt-4 underline ${linkClass}`}>
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>
        <a href="https://twitter.com/mertsaydan" target="_blank" className={`font-light text-sm mt-4 underline ${linkClass}`}>
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.54l-5.12-6.7L5.23 22H2l7.6-8.68L1.25 2h6.7l4.63 6.11L18.244 2zm-1.15 18h1.8L6.23 3.89H4.3L17.094 20z" />
          </svg>
        </a>
        <a href="https://www.instagram.com/mertsaydan/" target="_blank" className={`font-light text-sm mt-4 underline ${linkClass}`}>
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.75 2C4.67893 2 2.25 4.42893 2.25 7.5V16.5C2.25 19.5711 4.67893 22 7.75 22H16.25C19.3211 22 21.75 19.5711 21.75 16.5V7.5C21.75 4.42893 19.3211 2 16.25 2H7.75ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8ZM17.5 7C17.2239 7 17 6.77614 17 6.5C17 6.22386 17.2239 6 17.5 6C17.7761 6 18 6.22386 18 6.5C18 6.77614 17.7761 7 17.5 7Z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Contact