import { Trash } from "lucide-react"

const PhotoCard=( {photo,removePhoto,viewImage,setViewImage} )=>{
    return(
        <div className="p-3 shadow-md rounded-xl bg-pink-50 ">
            <div>
            <img className="w-full h-58 mx-auto object-cover" src={photo.image} alt={photo.name} />
            <h1 className="mt-3 font-semibold">{photo.name}</h1>
            <p className="flex justify-between items-center">{photo.category} <button onClick={()=>{
                const confirmDelete = window.confirm("Remove photo?")

                if(confirmDelete){
                    removePhoto(photo.id)
                }
            }} className="cursor-pointer"> <Trash size={18} /> </button></p>
            <button onClick={()=>setViewImage(photo)} className="bg-violet-500 px-3 py-1 text-xs md:text-sm text-gray-200 font-semibold mt-2 cursor-pointer">View image</button>
            </div>
        </div>
    )
}
export default PhotoCard