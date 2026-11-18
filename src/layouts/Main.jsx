import Header from "../components/Header"
import Family from "../pages/Family"
import School from "../pages/School"
import Event from "../pages/Event"
import Friends from "../pages/Friends"
import Travel from "../pages/Travel"
import AllPhotos from "../pages/AllPhotos"


const Main=( {isOpen,setIsOpen,setActiveCategory,activeCategory, photos,setIsUploadOpen,isUploadOpen,setPhotos,uploadSuccess,setUploadSuccess, removePhoto,viewImage,setViewImage} )=>{
    return(
        <main className="min-w-0">

        

        <Header setUploadSuccess={setUploadSuccess} uploadSuccess={uploadSuccess} setPhotos={setPhotos} isUploadOpen={isUploadOpen} setIsUploadOpen={setIsUploadOpen} setIsOpen={setIsOpen} isOpen={isOpen} />

        {activeCategory === "All photos" && <AllPhotos photos={photos} removePhoto={removePhoto} viewImage={viewImage} setViewImage={setViewImage} />}

         {activeCategory === "Family" && <Family removePhoto={removePhoto}  photos={photos} viewImage={viewImage} setViewImage={setViewImage} />}

         {activeCategory === "School" && <School photos={photos} removePhoto={removePhoto} viewImage={viewImage} setViewImage={setViewImage} />}

         {activeCategory === "Events" && <Event photos={photos} removePhoto={removePhoto} viewImage={viewImage} setViewImage={setViewImage} />}

         {activeCategory === "Friends" && <Friends photos={photos} removePhoto={removePhoto} viewImage={viewImage} setViewImage={setViewImage} />}

         {activeCategory === "Travel" && <Travel photos={photos} removePhoto={removePhoto} viewImage={viewImage} setViewImage={setViewImage} /> }

        </main>
    )
}
export default Main