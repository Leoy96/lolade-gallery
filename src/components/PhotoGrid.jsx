import PhotoCard from "./PhotoCard"

const PhotoGrid=( {photos,removePhoto,viewImage,setViewImage} )=>{
    console.log(photos)
    return(
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
           {photos.length === 0 ? (<p className="col-span-full text-center mt-9 text-gray-400 font-semibold" >No photo display, upload a photo </p> ) : (
            photos.map((photo)=>(
            <PhotoCard viewImage={viewImage} setViewImage={setViewImage} removePhoto={removePhoto} key={photo.id} photo={photo}/>
           ))
           ) }
        </div>
    )
}
export default PhotoGrid