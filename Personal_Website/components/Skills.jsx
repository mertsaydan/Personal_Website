import { useData } from './DataContext'

function Skills() {
  const { data } = useData()
  const { title, skills } = data.skillsSection

  return (
    <div className="w-full h-[500px] bg-white">
      <div className="flex">
        <h1 className="text-4xl text-[#4832d3] font-bold pt-10 ml-30">{title}</h1>
        <div className="flex mt-10 ml-30 gap-40">
          <div className="flex flex-col gap-4">
            {skills.slice(0, 3).map((skill) => (
              <div key={skill.name} className="flex items-center gap-2">
                <img src={skill.logo} alt={skill.name} className="w-20 h-20" />
                <p>{skill.name.toUpperCase()}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
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