import { useData } from './DataContext'

function Skills() {
  const { data, darkMode } = useData()
  const { title, skills } = data.skillsSection
  const sectionClass = darkMode ? 'bg-[#252128] text-white' : 'bg-white text-black'
  const titleClass = darkMode ? 'text-[#CBF281]' : 'text-[#4832d3]'
  const itemTextClass = darkMode ? 'text-white' : 'text-black'

  return (
    <div className={`w-full h-[400px] ${sectionClass}`}>
      <div className="flex">
        <h1 className={`text-4xl font-bold pt-10 ml-30 ${titleClass}`}>{title}</h1>
        <div className="flex mt-10 ml-30 gap-30">
          <div className={`flex flex-col gap-4 ${itemTextClass}`}>
            {skills.slice(0, 3).map((skill) => (
              <div key={skill.name} className="flex items-center gap-2">
                <img src={skill.logo} alt={skill.name} className="w-20 h-20" />
                <p>{skill.name.toUpperCase()}</p>
              </div>
            ))}
          </div>
          <div className={`flex flex-col gap-4 ${itemTextClass}`}>
            {skills.slice(3).map((skill) => (
              <div key={skill.name} className="flex items-center gap-2">
                <img src={skill.logo} alt={skill.name} className="w-20 h-20" />
                <p>{skill.name.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills