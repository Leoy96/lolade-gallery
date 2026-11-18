import PhotoGrid from "../components/PhotoGrid"

const Friends =( {photos,removePhoto,setViewImage} )=>{

    console.log(photos)

    const filteredFriends = photos.filter(photo => photo.category === "Friends")

    return(
        <div className="p-3 bg-gray-500 min-h-screen">
           <PhotoGrid photos={filteredFriends} removePhoto={removePhoto} setViewImage={setViewImage} />
        </div>
    )
}
export default Friends