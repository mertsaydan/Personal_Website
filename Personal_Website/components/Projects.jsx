import { useData } from './DataContext'

function Projects() {
  const { data, darkMode } = useData()
  const { title, projects } = data.projectsSection
  const sectionClass = darkMode ? 'bg-[#1A210B]' : 'bg-[#CBF281]'
  const titleClass = darkMode ? 'text-[#CBF281]' : 'text-[#4731D3]'
  const cardClass = darkMode ? 'bg-[#2A2A35]' : 'bg-white'
  const headingClass = darkMode ? 'text-[#C1BAED]' : 'text-[#4731D3]'
  const bodyClass = darkMode ? 'text-white' : 'text-black'
  const linkClass = darkMode ? 'text-[#CBF281]' : 'text-black'
  const techClass = darkMode ? 'text-white bg-[#4731D3]' : 'text-white bg-[#4731D3]'

  return (
    <div className={`w-full h-[700px] ${sectionClass}`}>
      <h1 className={`text-4xl font-bold pt-10 ml-30 ${titleClass}`}>{title}</h1>
      <section className="flex flex-col mt-10 ml-30 gap-5 mr-30 justify-between">
        {projects.map((project) => (
          <div key={project.name} className={`flex flex-row gap-8 rounded-sm ${cardClass}`}>
            <div>
              <img src={project.image} alt={project.name} className="w-[250px] h-[250px] rounded-sm" />
            </div>
            <div className="flex flex-col mt-5 gap-2 w-[400px]">
              <h2 className={`text-xl font-bold ${headingClass}`}>{project.name}</h2>
              <p className={`font-light text-sm mt-4 ${bodyClass}`}>{project.description}</p>
              <div className="flex flex-row mt-1 gap-2 w-[400px]">
                {project.technologies.map((tech) => (
                  <p key={tech} className={`p-1 pr-4 pl-4 rounded-2xl font-light text-xs mt-2 ${techClass}`}>
                    {tech}
                  </p>
                ))}
              </div>
              <div className="flex flex-row gap-2 w-[400px]">
                <a href={project.siteLink} target="_blank" className={`font-light text-sm mt-4 underline ${linkClass}`}>
                  View Site
                </a>
                <a href={project.codeLink} target="_blank" className={`font-light text-sm mt-4 underline ml-5 ${linkClass}`}>
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Projects