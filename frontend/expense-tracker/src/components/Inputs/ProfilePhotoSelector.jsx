import React from "react";

const ProfilePhotoSelector=({image,setImage})=>{
    const inputRef=useRef(null);
    const [previewUrl,setPreviewUrl]=useState(null);

    const handleImageChange=(event)=>{
        const file=event.target.files[0];
        if(file){
            setImage(file);

            const preview=URL.createObjectURL(file);
            setPreviewUrl(preview);
        }
    }
        return(
        <div>PhotoSelector</div>
    )
}
export default ProfilePhotoSelector;