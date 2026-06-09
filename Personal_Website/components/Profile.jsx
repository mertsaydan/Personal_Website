import { useData } from './DataContext'

function Profile() {
  const { data, darkMode } = useData()
  const { title, basicInfo, about, image } = data.profileSection
  const sectionClass = darkMode ? 'bg-[#171043]' : 'bg-[#4731D3]'
  const titleClass = darkMode ? 'text-[#CBF281]' : 'text-[#CBF281]'
  const headingClass = darkMode ? 'text-white' : 'text-white'
  const labelClass = darkMode ? 'text-[#CBF281]' : 'text-[#CBF281]'
  const valueClass = darkMode ? 'text-white' : 'text-white'

  return (
    <div className={`w-full py-12 ${sectionClass}`}>
      <h1 className={`px-4 text-3xl font-bold sm:px-8 sm:text-4xl lg:pl-30 ${titleClass}`}>{title}</h1>
      <section className="mt-10 flex flex-col gap-10 px-4 sm:px-8 lg:flex-row lg:justify-between lg:px-0 lg:ml-30 lg:mr-30">
        <div className="flex flex-col gap-4 lg:max-w-[320px]">
          <div className="flex flex-col gap-4">
            <h2 className={`text-xl ${headingClass}`}>{data.profileSection.subtitle}</h2>
            <div className="grid gap-4 text-sm">
              {basicInfo.map((item) => (
                <div key={item.label} className="grid grid-cols-[120px_minmax(0,1fr)] items-start gap-x-4 sm:grid-cols-[150px_minmax(0,1fr)]">
                  <p className={`font-semibold whitespace-nowrap ${labelClass}`}>{item.label}</p>
                  <p className={`font-light ${valueClass}`}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start">
          <img src={image} alt="Work" className="h-[220px] w-[220px] rounded-sm object-cover sm:h-[250px] sm:w-[250px]" />
        </div>
        <div className="flex flex-col gap-4 lg:w-[250px]">
          <h2 className={`text-xl ${headingClass}`}>{data.profileSection.subtitle2}</h2>
          {about.map((paragraph, index) => (
            <p key={index} className={`font-light text-sm mt-4 ${valueClass}`}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Profile