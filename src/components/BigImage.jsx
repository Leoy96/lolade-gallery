import { X } from "lucide-react"

const BigImage=({viewImage,setViewImage})=>{
    return(
        <div className="fixed z-20 bg-black/50 justify-center items-center flex p-4  inset-0">
            
            <div className="relative">
                <button className="absolute top-2 right-2 cursor-pointer text-white bg-fuchsia-500 p-1" onClick={()=>setViewImage(null)}>
                <X/>
            </button>
           <img className="max-w-[90vw] w-auto rounded-xl max-h-[85vh] object-contain" src={viewImage.image} alt={viewImage.name} />
            </div>
           
        </div>
    )
}
export default BigImage