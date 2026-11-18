import { X } from "lucide-react"
import { useEffect, useState } from "react"
import Header from "./Header"

const UploadModal=( {setIsUploadOpen,setPhotos,setUploadSuccess} )=>{

    
    const [ uploadData,setUploadData ] = useState({
        name:"",
        category:"",
        image:""
    })

    const [ preview,setPreview ] = useState("")
    const [imageData, setImageData] = useState("")

    

    const handleUploadData=(event)=>{

        const { name,value,files } = event.target

         if (name === "image") {
         convertImage(files[0])
         }
      setUploadData((previousData)=>({...previousData,[name]: name === "image" ? files[0]:value}))
    }

    useEffect(()=>{

        if(!uploadData.image){
            return;
        }

        const imageURL =URL.createObjectURL(uploadData.image)
        setPreview(imageURL)

        return()=>{
            URL.revokeObjectURL(imageURL)
        }

    },[uploadData.image])

    const convertImage = (file) => {
    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = () => {
    setImageData(reader.result)
    }
}

    const handleSubmit=(event)=>{
        event.preventDefault()

        if(!uploadData.name || !uploadData.category || !uploadData.image){
            return;
        }

        const addPhoto = {
            name: uploadData.name,
            category: uploadData.category,
            image:imageData
        }

           setPhotos(previous => [...previous, {
            id:Date.now(),...addPhoto
        }])
       
        
        setIsUploadOpen(false)
        setUploadSuccess(true)
    }


    

    return(
        <div  className="fixed z-20 bg-black/50 justify-center items-center flex p-4  inset-0">

            
           
            <form onSubmit={handleSubmit} className="flex flex-col bg-white p-4 shadow-lg shadow-black rounded-2xl gap-4">
              
                {/* cancel button start here */}
            <button type="button" className="cursor-pointer relative left-70" onClick={()=>setIsUploadOpen(false)}>
                <X/>
            </button>

              <h1 className="text-center bg-purple-700 text-white rounded-lg py-1">Upload your photo</h1>
                {/* input for name start here */}
              <input className="border-2 border-blue-950 px-2 rounded-2xl py-1 " onChange={handleUploadData} type="text" placeholder="enter name of photo" value={uploadData.name} name="name" required />
              {/* input category start here */}
              <select required className="border-2 border-blue-950 px-3 py-1 rounded-2xl" onChange={handleUploadData} value={uploadData.category} name="category" >
                <option value="">Categories</option>
                <option value="Family">Family</option>
                <option value="Friends">Friends</option>
                <option value="Events">Events</option>
                <option value="School">School</option>
                <option value="Travel">Travel</option>
              </select>

              {/* upload image start from here */}
             <div className="border-2 border-blue-950 rounded-2xl px-2 py-1">
                <input onChange={handleUploadData} type="file" accept="image/*"  name="image"/>
                 {preview && (
                    <img className="h-48 mx-auto w-60 object-contain rounded-lg" src={preview} alt={uploadData.name} required />
                 )}
             </div>
             <button type="submit" className="bg-gradient-to-br from-pink-800 to-black text-white font-semibold mx-auto px-3 rounded-2xl cursor-pointer">Add photo</button>
            </form>

        </div>
    )
}
export default UploadModal