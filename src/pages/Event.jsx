import PhotoGrid from "../components/PhotoGrid"

const Event=( {photos,setViewImage,removePhoto} )=>{

    const filterEvent = photos.filter(photo=>photo.category === "Events")

    return(
        <div className="p-3 bg-gray-500 min-h-screen">
            <PhotoGrid removePhoto={removePhoto} setViewImage={setViewImage} photos={filterEvent} />
        </div>
    )
}
export default Event