function Profile() {
    return (
        <div className="w-full h-[450px] bg-[#4731D3]">
            <h1 className="text-4xl text-[#CBF281] font-bold pt-10 ml-30">Profile</h1>
            <section className="flex mt-10 ml-30 gap-10 mr-30   justify-between">
                <div className="flex flex-col gap-4">

                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl text-white">Basic Information</h2>
                        <div className="flex flex-row gap-4">

                            <div className="flex flex-col gap-4 text-[#CBF281] font-semibold text-sm">
                                <p>Doğum Tarihi</p>
                                <p>İkamet Şehri</p>
                                <p>Eğitim <br />Durumu</p>
                                <p>Tercih Ettiği<br /> Rol</p>
                            </div>
                            <div className="flex flex-col gap-4 text-white font-light text-sm">
                                <p>07.03.1985</p>
                                <p>Ankara</p>
                                <p>Yeditepe Ünv. Eczacılık <br />Lisans, 2009</p>
                                <p>Frontend, UI</p>
                            </div>
                        </div>
                    </div>
                    
                    

                </div>
                <div>
                    <img src="./src/assets/work.png" alt="Work" className="w-[250px] h-[250px] rounded-sm" />
                </div>
                <div className="flex flex-col gap-4 w-[250px]">
                    <h2 className="text-xl text-white">About Me</h2>
                    <p className="text-white font-light text-sm mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, 
                        nunc nisl aliquet nunc.
                    </p>
                    <p className="text-white font-light text-sm mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies aliquam, 
                        nunc nisl aliquet nunc.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Profile