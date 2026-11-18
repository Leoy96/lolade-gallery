import PhotoGrid from "../components/PhotoGrid"


const Travel =( {photos,removePhoto,setViewImage} )=>{

    const filteredTravel = photos.filter(photo=>photo.category === "Travel")

    return(
        <div className="p-4 bg-gray-500 min-h-screen">
            <PhotoGrid photos={filteredTravel} removePhoto={removePhoto} setViewImage={setViewImage} />
        </div>
    )
}
export default Travel