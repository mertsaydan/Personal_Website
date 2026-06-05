function Skills() {
    return (
        <div className="w-full h-[500px] bg-white">
            <div className="flex">
                <h1 className="text-4xl text-[#4832d3] font-bold pt-10 ml-30">Skills</h1>
                <div className="flex mt-10 ml-30 gap-40">
                    <div className="flex flex-col gap-4">

                        <div className="flex items-center">
                            <img src="./src/assets/js_logo.png" alt="JavaScript" className="w-20 h-20" />
                            <p>JAVASCRIPT</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="./src/assets/react_logo.png" alt="React" className="w-20 h-20 " />
                            <p>REACT</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="./src/assets/redux_logo.png" alt="Redux" className="w-20 h-20 " />
                            <p>REDUX</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">

                        <div className="flex items-center gap-2">
                            <img src="./src/assets/vscode_logo.png" alt="VS Code" className="w-20 h-20" />
                            <p>VS CODE</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="./src/assets/figma_logo.png" alt="Figma" className="w-20 h-20" />
                            <p>FIGMA</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="./src/assets/tail_logo.png" alt="Tailwind CSS" className="w-20 h-20" />
                            <p>TAILWIND CSS</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Skills