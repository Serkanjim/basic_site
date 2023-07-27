import {useRef,useState} from 'react'

function UploadPicture() {
    const inputRef = useRef();
    const defpicture ="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    const [image, setImage] =useState(defpicture);



const handleImageClick = () => {
    inputRef.current.click();
    
};

const handleChange = (event) => {
    const file =event.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target.result);
        }
        reader.readAsDataURL(file);
    }

};

  return (
    <div>
            <div onClick={handleImageClick}>
            
            
                <img src={image} alt="Profile Photo" className='profile-image'/>
            <input type="file" accept="image/png, image/gif, image/jpeg" ref={inputRef} onChange={handleChange} style={{display:"none"}}/>


            </div>
    </div>
    
  )
}

export default UploadPicture;