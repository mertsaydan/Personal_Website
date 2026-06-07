function Projects() {
    return (
        <div className="w-full h-[700px] bg-[#CBF281]">
            <h1 className="text-4xl text-[#4731D3] font-bold pt-10 ml-30">Projects</h1>
            <section className="flex flex-col mt-10 ml-30 gap-5 mr-30   justify-between">
                <div className="flex flex-row gap-8 bg-white rounded-sm">
                   <div>
                    <img src="./src/assets/project_1.png" alt="Work" className="w-[250px] h-[250px] rounded-sm" />
                   </div>
                   <div className="flex flex-col mt-5 gap-2 w-[400px]">
                    <h2 className="text-xl text-[#4731D3] font-bold">Workintech</h2>
                    <p className="text-black font-light text-sm mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, 
                        nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. 
                    </p>
                    <div className="flex flex-row mt-1 gap-2 w-[400px]">
                        <p className="text-white bg-[#4731D3] p-1  pr-4 pl-4 rounded-2xl font-light text-xs mt-2">
                            react
                        </p>
                        <p className="text-white bg-[#4731D3] p-1  pr-4 pl-4 rounded-2xl font-light text-xs mt-2">
                            redux
                        </p>
                        <p className="text-white bg-[#4731D3] p-1  pr-4 pl-4 rounded-2xl font-light text-xs mt-2">
                            vercel
                        </p>
                    </div>
                    <div className="flex flex-row gap-2 w-[400px]">
                        <a href="#" target="_blank" className="text-black font-light text-sm mt-4 underline">
                            View Site
                        </a>
                        <a href="#" target="_blank" className="text-black font-light text-sm mt-4 underline ml-5">
                            View Code
                        </a>
                    </div>
                    
                    </div>
                </div>

                <div className="flex flex-row gap-8 bg-white rounded-sm">
                    <div>
                    <img src="./src/assets/project_2.png" alt="Work" className="w-[250px] h-[250px] rounded-sm" />
                   </div>
                    
                    <div className="flex flex-col mt-5 gap-2 w-[400px]">
                    <h2 className="text-xl text-[#4731D3] font-bold">Journey</h2>
                    <p className="text-black font-light text-sm mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, 
                        nunc nisl aliquet nunc, vitae aliquam nisl nunc vitae nisl. 
                    </p>
                    <div className="flex flex-row mt-1 gap-2 w-[400px]">
                        <p className="text-white bg-[#4731D3] p-1  pr-4 pl-4 rounded-2xl font-light text-xs mt-2">
                            react
                        </p>
                        <p className="text-white bg-[#4731D3] p-1  pr-4 pl-4 rounded-2xl font-light text-xs mt-2">
                            redux
                        </p>
                        <p className="text-white bg-[#4731D3] p-1  pr-4 pl-4 rounded-2xl font-light text-xs mt-2">
                            vercel
                        </p>
                    </div>
                    <div className="flex flex-row gap-2 w-[400px]">
                        <a href="#" target="_blank" className="text-black font-light text-sm mt-4 underline">
                            View Site
                        </a>
                        <a href="#" target="_blank" className="text-black font-light text-sm mt-4 underline ml-5">
                            View Code
                        </a>
                    </div>
                    </div>
                    
                </div>
          
            </section>
        
        
        </div>
    )
}

export default Projects