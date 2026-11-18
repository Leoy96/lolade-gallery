import { Menu, Search, Upload } from "lucide-react"
import { useEffect, useState } from "react"


const Header=( {isOpen,setIsOpen,activeCategory,setActiveCategory, setIsUploadOpen,isUploadOpen,uploadSuccess,setUploadSuccess} )=>{

    // const [ searchedPhoto, setSearchPhoto ] = useState("")

    // const handleSearchPhoto=(event)=>{
    //     setSearchPhoto(event.target.value)
    // }

    const handleSubmit=(event)=>{
        event.preventDefault()
    }

    useEffect(()=>{
       if(uploadSuccess){
        const timer =  setTimeout(()=>{
        setUploadSuccess(false)
    },4000)

    return ()=>{
        clearTimeout(timer)
    }
       }
    },[uploadSuccess,setUploadSuccess])

    return(
        <header className="px-6 bg-purple-200 rounded-b-2xl py-3 flex  justify-between items-center space-x-3 w-full shadow-lg sticky top-0">
            {/* my gallery text*/}
            <div>
                {/* menu start here */}
                <div >
                   <button onClick={()=>setIsOpen(isOpen=>!isOpen)} className="hidden max-md:block my-3 cursor-pointer">
                     <Menu size={18}/>
                   </button>
                </div>
                {/* header text start here */}
              <div className="bg-gradient-to-bl from-blue-800 to-black px-3 py-2 rounded-2xl">
                <h1 className="flex items-center gap-3 font-bold text-xl md:text-2xl text-gray-100"> Lade_xx</h1>
                
              <p className="md:text-xs text-[10px]  text-gray-300 italic">All my picture in one place....</p>
              </div>
            </div>
        
          
              {/* headerform */}
            {/* <div>
                <form className="flex items-center gap-2" onSubmit={handleSubmit}>
                    <input className=" md:block hidden border border-purple-950 px-2 text-xs py-1 rounded-full" placeholder="enter photo category" value={searchedPhoto} onChange={handleSearchPhoto}  type="text" />

                <button className="cursor-pointer"  type="submit"><Search size={17} /></button>
                </form>
            </div> */}

            {/* upload start from here */}
            <div>               
                <button onClick={()=>setIsUploadOpen(true)} className="bg-gradient-to-bl from-pink-900 to-black px-3 py-1 text-white rounded-lg cursor-pointer md:flex gap-2 items-center text-xs md:text-sm cursor-pointer"><Upload className="mb-1" size={15} />Upload photo</button>
            </div>

            {uploadSuccess && (
                <p className="bg-green-600 px-2 rounded-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 shadow-lg items-center justify-center py-1 text-sm text-white font-semibold">Photo added successfully</p>
            )}

        </header>
    )
}
export default Header