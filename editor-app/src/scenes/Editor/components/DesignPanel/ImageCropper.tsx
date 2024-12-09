import React, { useState, useEffect, createRef } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "./cropper.css";

const defaultSrc =
    "https://firebasestorage.googleapis.com/v0/b/thegoodgametheory-quiz.appspot.com/o/images%2Fshoes_4.png_03604a10-efb5-41c4-8a99-d2b20af1709a?alt=media&token=29d7d841-eb49-4e38-879b-357c35ac46ae";

interface ImageCropperProps {
    imageUrl: string | null;
    onCropped: (croppedImageUrl: string) => void;
}

export const ImageCropper: React.FC<ImageCropperProps> = ({ imageUrl, onCropped }) => {
    const [image, setImage] = useState<string | null>(imageUrl);
    const cropperRef = createRef<ReactCropperElement>();

    useEffect(() => {
        console.log("Image URL updated:", imageUrl);
        if (imageUrl) {
            setImage(imageUrl);
        }
    }, [imageUrl]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        let files = e.target.files;
        if (files && files.length > 0) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(files[0]);
        }
    };

    const getCropData = () => {
        if (typeof cropperRef.current?.cropper !== "undefined") {
            const croppedImageUrl = cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
            onCropped(croppedImageUrl);
        }
    };

    return (
        <div>
            <div style={{ width: "100%" }}>
                <input type="file" onChange={onChange} />
                <button onClick={() => setImage(defaultSrc)}>Use default img</button>
                <br />
                <br />
                {image && (
                    <Cropper
                        ref={cropperRef}
                        style={{ height: 400, width: "100%", opacity: 1 }}
                        zoomTo={0.5}
                        initialAspectRatio={3 / 4}
                        preview=".img-preview"
                        src={image}
                        viewMode={1}
                        minCropBoxHeight={10}
                        minCropBoxWidth={10}
                        background={false}
                        responsive={true}
                        autoCropArea={1}
                        checkOrientation={false}
                        guides={true}
                    />
                )}
            </div>
            <div className="box" style={{ width: "100%", height: "150px" }}>
                <h1>
                    <button
                        className="px-3 py-1 bg-blue-500 text-white rounded"
                        style={{ float: "right" }}
                        onClick={getCropData}
                    >
                        Done
                    </button>
                </h1>
                {/* <img style={{ width: "100%" }} src={cropData} alt="cropped" /> */}
            </div>
            <br style={{ clear: "both" }} />
        </div>
    );
};

export default ImageCropper;
