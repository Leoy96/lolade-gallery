
import { useEffect, useState } from "react"
import Main from "./layouts/Main"
import Sidebar from "./layouts/Sidebar"
import UploadModal from "./components/UploadModal"
import BigImage from "./components/BigImage"


const App=()=>{

  const savedPhotos = localStorage.getItem("photos")

  const [ isOpen,setIsOpen ] = useState(false)

   const [ activeCategory,setActiveCategory ] = useState("All photos")

   const [ uploadSuccess, setUploadSuccess ] = useState(false)

   
  const defaultPhotos= [
    {
    id: 1,
    name: "Baby Lade",
    category: "Events",
    image: "/images/1.jpg"
  },
  {
    id: 2,
    name: "Happy moment",
    category: "Events",
    image: "/images/2.jpg"
  },
  {
    id: 3,
    name: "Happy moment",
    category: "School",
    image: "/images/3.jpg"
  },
  {
    id: 4,
    name: "Steeze",
    category: "Family",
    image: "/images/4.jpg"
  },
  {
    id: 5,
    name: "Lakers",
    category: "Travel",
    image: "/images/5.jpg"
  },
  {
    id: 6,
    name: "Beautiful Damsel",
    category: "Friends",
    image: "/images/6.jpg"
  },
  {
    id: 7,
    name: "Professional settings",
    category: "Travel",
    image: "/images/7.png"
  },
  {
    id: 8,
    name: "Lovely",
    category: "School",
    image: "/images/8.jpg"
  }
  ]


  const [ photos,setPhotos ] =useState(savedPhotos ? JSON.parse(savedPhotos) : defaultPhotos)

  useEffect(()=>{
    localStorage.setItem("photos",JSON.stringify(photos))
  },[photos])

  const [isUploadOpen, setIsUploadOpen] = useState(false)

  const removePhoto=(id)=>{
      const deletePhoto = photos.filter(photo=>photo.id !== id)

      setPhotos(deletePhoto)
  }

  const [ viewImage,setViewImage ] = useState(null)

  return(
    <div className="grid md:grid-cols-[240px_minmax(0,1fr)] min-h-screen items-start w-full">

      <Sidebar activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}  isOpen={isOpen} setIsOpen={setIsOpen} />

      <Main setViewImage={setViewImage} viewImage={viewImage} removePhoto={removePhoto} setUploadSuccess={setUploadSuccess} uploadSuccess={uploadSuccess} setPhotos={setPhotos} isUploadOpen={isUploadOpen} setIsUploadOpen={setIsUploadOpen} photos={photos} activeCategory={activeCategory} setActiveCategory={setActiveCategory}  isOpen={isOpen}  setIsOpen={setIsOpen} />

    
          {isUploadOpen && <UploadModal setUploadSuccess={setUploadSuccess} setPhotos={setPhotos} setIsUploadOpen={setIsUploadOpen} />}

          {viewImage  && <BigImage setViewImage={setViewImage} viewImage={viewImage} />}
    </div>
  )
}
export default App