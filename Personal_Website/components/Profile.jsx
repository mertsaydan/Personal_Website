import { useData } from './DataContext'

function Profile() {
  const { data } = useData()
  const { title, basicInfo, about, image } = data.profileSection

  return (
    <div className="w-full h-[450px] bg-[#4731D3]">
      <h1 className="text-4xl text-[#CBF281] font-bold pt-10 ml-30">{title}</h1>
      <section className="flex mt-10 ml-30 gap-10 mr-30 justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl text-white">Basic Information</h2>
            <div className="grid gap-4 text-sm">
              {basicInfo.map((item) => (
                <div key={item.label} className="grid grid-cols-[150px_minmax(0,1fr)] items-start gap-x-4">
                  <p className="text-[#CBF281] font-semibold whitespace-nowrap">{item.label}</p>
                  <p className="text-white font-light">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <img src={image} alt="Work" className="w-[250px] h-[250px] rounded-sm" />
        </div>
        <div className="flex flex-col gap-4 w-[250px]">
          <h2 className="text-xl text-white">About Me</h2>
          {about.map((paragraph, index) => (
            <p key={index} className="text-white font-light text-sm mt-4">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Profile