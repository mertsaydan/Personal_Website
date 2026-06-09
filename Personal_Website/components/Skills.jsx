import { useData } from './DataContext'

function Skills() {
  const { data, darkMode } = useData()
  const { title, skills } = data.skillsSection
  const sectionClass = darkMode ? 'bg-[#252128] text-white' : 'bg-white text-black'
  const titleClass = darkMode ? 'text-[#CBF281]' : 'text-[#4832d3]'
  const itemTextClass = darkMode ? 'text-white' : 'text-black'

  return (
    <div className={`w-full py-12 ${sectionClass}`}>
      <div className="flex flex-col gap-8 px-4 sm:px-8 lg:flex-row lg:items-start lg:gap-16 lg:px-0 lg:pl-30">
        <h1 className={`text-3xl font-bold ${titleClass} sm:text-4xl`}>{title}</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:flex lg:gap-30">
          <div className={`flex flex-col gap-4 ${itemTextClass}`}>
            {skills.slice(0, 3).map((skill) => (
              <div key={skill.name} className="flex items-center gap-3">
                <img src={skill.logo} alt={skill.name} className="h-16 w-16 sm:h-20 sm:w-20" />
                <p className="text-sm sm:text-base">{skill.name.toUpperCase()}</p>
              </div>
            ))}
          </div>
          <div className={`flex flex-col gap-4 ${itemTextClass}`}>
            {skills.slice(3).map((skill) => (
              <div key={skill.name} className="flex items-center gap-3">
                <img src={skill.logo} alt={skill.name} className="h-16 w-16 sm:h-20 sm:w-20" />
                <p className="text-sm sm:text-base">{skill.name.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills