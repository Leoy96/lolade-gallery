
import PhotoGrid from "../components/PhotoGrid"

const Family=( {photos,removePhoto,setViewImage} )=>{

    const filteredFamily = photos.filter(photo=>photo.category === "Family")

    return(
        <div className="min-h-screen bg-gray-500 p-3">
            <PhotoGrid setViewImage={setViewImage} removePhoto={removePhoto} photos={filteredFamily} />
        </div>
    )
}
export default Family