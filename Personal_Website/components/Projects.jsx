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
    <div className={`w-full py-12 ${sectionClass}`}>
      <h1 className={`px-4 text-3xl font-bold sm:px-8 sm:text-4xl lg:pl-30 ${titleClass}`}>{title}</h1>
      <section className="mt-10 flex flex-col gap-5 px-4 sm:px-8 lg:px-0 lg:ml-30 lg:mr-30">
        {projects.map((project) => (
          <div key={project.name} className={`flex flex-col gap-5 rounded-sm md:flex-row md:gap-8 ${cardClass}`}>
            <div className="md:flex-none">
              <img src={project.image} alt={project.name} className="h-[220px] w-full rounded-sm object-cover md:h-[250px] md:w-[250px]" />
            </div>
            <div className="flex flex-col gap-2 px-4 pb-4 md:w-[400px] md:px-0 md:pt-5">
              <h2 className={`text-xl font-bold ${headingClass}`}>{project.name}</h2>
              <p className={`font-light text-sm mt-4 ${bodyClass}`}>{project.description}</p>
              <div className="flex flex-wrap mt-1 gap-2">
                {project.technologies.map((tech) => (
                  <p key={tech} className={`p-1 pr-4 pl-4 rounded-2xl font-light text-xs mt-2 ${techClass}`}>
                    {tech}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <a href={project.siteLink} target="_blank" className={`font-light text-sm mt-4 underline ${linkClass}`}>
                  View Site
                </a>
                <a href={project.codeLink} target="_blank" className={`font-light text-sm mt-4 underline md:ml-5 ${linkClass}`}>
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