function Header() {
  return (
    <header className="relative w-full bg-[linear-gradient(90deg,#4731D3_0%,#4731D3_66%,#CBF281_66%,#CBF281_100%)] h-[500px]">
      <div className="flex items-center justify-between h-full">
        <div className="flex flex-col h-full ml-30 gap-10">
          <h3 className="text-[#CBF281] mb-14 mt-16 font-bold text-xl"> Mert</h3>
          <h2 className="text-[#CBF281] font-bold text-4xl">I am a Frontend <br/> Developer...</h2>
          <p className="text-white font-thin">...who likes to craft solid and scalable frontend <br/>products with great user experiences.</p>
        <div className="flex">
          <button className="flex gap-2 bg-white text-[#3730A3] py-2 px-4 rounded-sm ">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>Github</button>
          <button className=" flex gap-2 bg-white text-[#3730A3] py-2 px-4 rounded-sm ml-5">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
        </svg>
            Linkedin</button>
        </div>
        </div>
      </div>

      <div className="absolute left-[65%] top-6 -translate-x-1/2 flex gap-20 text-lg font-bold">
        <p className="text-xs text-white"><span className="text-[#CBF281]">TÜRKÇE</span>'YE GEÇ</p>
        <p className="text-xs text-[#4731D3]">DARK MODE</p>
      </div>

      <div className="absolute left-[66%] top-1/2 -translate-x-1/2 -translate-y-1/2" >
        <img src="./src/assets/avatar.png" alt="Avatar" className="w-[300px] h-[260px] rounded-full" />
      </div>
    </header>
  );
}

export default Header;
