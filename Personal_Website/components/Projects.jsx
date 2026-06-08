import { useData } from './DataContext'

function Projects() {
  const { data } = useData()
  const { title, projects } = data.projectsSection

  return (
    <div className="w-full h-[700px] bg-[#CBF281]">
      <h1 className="text-4xl text-[#4731D3] font-bold pt-10 ml-30">{title}</h1>
      <section className="flex flex-col mt-10 ml-30 gap-5 mr-30 justify-between">
        {projects.map((project) => (
          <div key={project.name} className="flex flex-row gap-8 bg-white rounded-sm">
            <div>
              <img src={project.image} alt={project.name} className="w-[250px] h-[250px] rounded-sm" />
            </div>
            <div className="flex flex-col mt-5 gap-2 w-[400px]">
              <h2 className="text-xl text-[#4731D3] font-bold">{project.name}</h2>
              <p className="text-black font-light text-sm mt-4">{project.description}</p>
              <div className="flex flex-row mt-1 gap-2 w-[400px]">
                {project.technologies.map((tech) => (
                  <p key={tech} className="text-white bg-[#4731D3] p-1 pr-4 pl-4 rounded-2xl font-light text-xs mt-2">
                    {tech}
                  </p>
                ))}
              </div>
              <div className="flex flex-row gap-2 w-[400px]">
                <a href={project.siteLink} target="_blank" className="text-black font-light text-sm mt-4 underline">
                  View Site
                </a>
                <a href={project.codeLink} target="_blank" className="text-black font-light text-sm mt-4 underline ml-5">
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