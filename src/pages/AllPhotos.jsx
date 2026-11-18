
import PhotoGrid from "../components/PhotoGrid"

const AllPhotos =( {photos,removePhoto,setViewImage,viewImage} )=>{

    return(
        <div  className="p-4 min-h-screen bg-gray-700">
            <PhotoGrid setViewImage={setViewImage} viewImage={viewImage} removePhoto={removePhoto} photos={photos} />
        </div>
    )
}
export default AllPhotos