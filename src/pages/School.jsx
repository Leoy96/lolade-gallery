import PhotoGrid from "../components/PhotoGrid"

const School=( {photos,removePhoto,setViewImage} )=>{

    const filteredSchool = photos.filter(photo=>photo.category === "School")

    return(
        <div className="p-4 bg-gray-500 min-h-screen">
          <PhotoGrid photos={filteredSchool} removePhoto={removePhoto} setViewImage={setViewImage} />
        </div>
    )
}
export default School