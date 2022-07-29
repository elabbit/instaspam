import { useState } from 'react';
import Cropper from 'react-easy-crop';
import getCroppedImg from './cropImage';
import "./CropEasy.css"


const CropEasy = ({ setOpenCreate, photoURL, setOpenCrop, setPhotoURL, setImage }) => {
    const [loading, setLoading] = useState(false);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

    const cropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }

    const cropImage = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const { file, url } = await getCroppedImg(photoURL, croppedAreaPixels)
            setPhotoURL(url)
            setImage(blobToFile(file))
            setOpenCrop(false)
            setOpenCreate(true)
        } catch (error) {
            console.log("ERROR", error)
        }
        setLoading(false)

    };


    const blobToFile = (blob) => {
        const croppedFile = new File([blob], "image.jpeg", {
            type: blob.type
        })
        console.log(croppedFile)
        return croppedFile;
    }



    return (
        <div className="crop-container">
      <div className='crop-bttn'>
                    <button
                    className="create-post-share-button"
                        onClick={cropImage}>
                        Next
                    </button>
                </div>
            <div className="crop-cropper">
                <Cropper
                    image={photoURL}
                    crop={crop}
                    zoom={zoom}
                    aspect={1}
                    onZoomChange={setZoom}
                    onCropChange={setCrop}
                    onCropComplete={cropComplete}
                />
            </div>
            <div classname="crop-slider">

            </div>
        </div>
    )
}

export default CropEasy;

const zoomPercent = (value) => {
    return `${Math.round(value * 100)}%`

}
