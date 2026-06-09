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
    <div className={`w-full h-[450px] ${sectionClass}`}>
      <h1 className={`text-4xl font-bold pt-10 ml-30 ${titleClass}`}>{title}</h1>
      <section className="flex mt-10 ml-30 gap-10 mr-30 justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h2 className={`text-xl ${headingClass}`}>Basic Information</h2>
            <div className="grid gap-4 text-sm">
              {basicInfo.map((item) => (
                <div key={item.label} className="grid grid-cols-[150px_minmax(0,1fr)] items-start gap-x-4">
                  <p className={`font-semibold whitespace-nowrap ${labelClass}`}>{item.label}</p>
                  <p className={`font-light ${valueClass}`}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <img src={image} alt="Work" className="w-[250px] h-[250px] rounded-sm" />
        </div>
        <div className="flex flex-col gap-4 w-[250px]">
          <h2 className={`text-xl ${headingClass}`}>About Me</h2>
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