import { Handshake, Heart, Image, LucideUserRoundGroup, PartyPopper, Plane, School, User, UserRound, X } from "lucide-react"


const Sidebar=( {isOpen,setIsOpen,activeCategory,setActiveCategory} )=>{

 
    return(
        <aside className={`bg-gradient-to-bl from-purple-950  to-black min-h-screen ${isOpen ? "block" : "hidden"} md:block w-[240px] bg-blur-sm shadow-xl shadow-black flex flex-col text-white p-5 fixed md:top-0  z-10 left-0 inset-y-0 md:sticky box-border`}>

            {/* title start here */}
          <div className="flex gap-2 items-center relative">

            {/* user icon start here */}
            <div className="relative">
                <User size={20} className="absolute top-2 left-2 text-white" />
                <div className="w-10 h-10 bg-gray-500 rounded-full" />
            </div>
            {/* user text start here */}
            <div>
              <h1 className="text-2xl font-gallery font-semibold">Lade's</h1>
              <p className="text-sm">world</p>
            </div>

            {/* cancel button */}
            <div onClick={()=>setIsOpen(false)} className="absolute cursor-pointer top-0 right-1 md:hidden" >
                <X/>
            </div>
          </div>


        {/* favourite text */}
          <div className="my-5 flex items-center gap-3">
            <Heart size={16}/>
            <h2 className="font-semibold text-purple-100">Favourite</h2>
          </div>

          <div className="border border-purple-100 my-4 rounded-2xl" />

          {/* nav start here */}
          <div className="flex-1 overflow-y-auto w-full min-h-0 ">

            <h1 className="my-4 font-semibold text-gray-100">Categories</h1>

            <div >
              <nav className="flex gap-5 flex-col items-start w-full">

              <button onClick={()=>{setActiveCategory("All photos"); setIsOpen(false)}} className={`flex items-center gap-2 transition-colors duration-300 ease-in-out text-purple-200 text-sm w-full py-1 px-2 cursor-pointer rounded-2xl ${activeCategory === "All photos" ? "bg-blue-600 text-white" : "" }`} > <Image size={17} /> All photos</button>


              <button onClick={()=>{setActiveCategory("Family");setIsOpen(false)}} className={`flex items-center gap-2 transition-colors duration-300 ease-in-out text-purple-200 text-sm w-full py-1 px-2 cursor-pointer rounded-2xl ${activeCategory === "Family" ? "bg-blue-600 text-white" : ""} `}><Handshake size={16} /> Family</button>

              <button onClick={()=>{
                setActiveCategory("Friends");setIsOpen(false)
              }} className={`flex items-center gap-2 transition-colors duration-300 ease-in-out text-purple-200 text-sm w-full py-1 px-2 cursor-pointer rounded-2xl ${activeCategory === "Friends" ? "bg-blue-600 text-white" : ""} `}><Handshake size={16} /> Friends</button>

              <button onClick={()=>{
                setActiveCategory("Events");setIsOpen(false)
              }} className={`flex items-center gap-2 transition-colors duration-300 ease-in-out text-purple-200 text-sm w-full py-1 px-2 cursor-pointer rounded-2xl ${activeCategory === "Events"  ? "bg-blue-600 text-white" : ""}`}><PartyPopper size={16}/> Events</button>
              
              <button onClick={()=>{
                setActiveCategory("Travel");setIsOpen(false)
              }} 
                className={`flex items-center gap-2 transition-colors duration-300 ease-in-out text-purple-200 text-sm w-full py-1 px-2 cursor-pointer rounded-2xl ${activeCategory === "Travel"  ? "bg-blue-600 text-white" : ""}`}><Plane size={16}/> Travel</button>

              <button onClick={()=>{setActiveCategory("School");
                setIsOpen(false)
              }} className={`flex items-center gap-2 transition-colors duration-300 ease-in-out text-purple-200 text-sm w-full py-1 px-2 cursor-pointer rounded-2xl ${activeCategory === "School" ? "bg-blue-600 text-white" : ""}`}><School size={16}/> School</button>
            </nav>
            </div>
            
          </div>

        <footer className="mt-auto shrink-0 text-xs">
          design by Lakers &copy; 2026
        </footer>

        </aside>
    )
}
export default Sidebar