import * as React from "react";

import { useEffect, useState, useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
// import { storage } from "../../../../../../../../../src/shared/config/firebase";
import storage from "firebase_app/storage";
// import { storage } from '../src/shared/config/firebase.ts';
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { FaRegImages } from "react-icons/fa6";
import EditorContext from "scenify_sdk/EditorContext";
// import Loader from '../../../../../../../../../src/apps/game/components/base/Loader';
import Loader from "slide_app/Loader";
import { cloneDeep } from "lodash";
import { v4 as uuidv4 } from "uuid";

import { useStorageDataLinks } from "firebase_app/useFirebase";
import useSlide from "scenify_sdk/useSlide";
import useEditor from "scenify_sdk/useEditor";
import {
  getPixabayImages,
  PixabayImage,
} from "../../../../../services/pixabay";
import { useDebounce } from "use-debounce";
import { Input } from "@/components/shared/baseui";
import Icons from "../../../../../components/icons";

function ImagesUpload() {
  const { item, setItem, slideIndex } = useSlide();
  const editor = useEditor();
  const [image, setImage] = useState(null);
  const { linkList, uploading, uploadData } = useStorageDataLinks("images/");
  const [images, setImages] = useState<PixabayImage[]>([]);
  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 1000);

  console.log(linkList);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleImageUpload = () => {
    uploadData(image);
  };

  const setImageToItems = (imageDiv) => {
    const updatedItem = cloneDeep(item);

    const newSlideData = { ...updatedItem[slideIndex] };

    if (!newSlideData.landscape) {
      newSlideData.landscape = { divs: [] };
    } else if (!Array.isArray(newSlideData.landscape.divs)) {
      newSlideData.landscape.divs = [];
    }

    newSlideData.landscape.divs.unshift(imageDiv);

    updatedItem[slideIndex] = newSlideData;

    const draftData = JSON.parse(localStorage.getItem("draft"));

    localStorage.setItem(
      "draft",
      JSON.stringify({ ...draftData, item: updatedItem })
    );
    setItem(updatedItem);
    editor.save(updatedItem);
  };

  const handleAddImage = (e, imageUrl) => {
    const imageDiv = {
      id: "image-" + uuidv4(),
      imageUrl: imageUrl,
      styles: {
        minWidth: "10%",
        height: "30%",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      },
    };

    setImageToItems(imageDiv);
    console.log(imageDiv);
    // console.log('Updated item:', updatedItem);
  };

  useEffect(() => {
    getPixabayImages("people")
      .then((data) => setImages(data))
      .catch(console.log);
  }, []);

  useEffect(() => {
    if (value) {
      getPixabayImages(value)
        .then((data: any) => setImages(data))
        .catch(console.log);
    }
  }, [value]);

  const addImageToCanvas = (url) => {
    const options = {
      type: "StaticImage",
      metadata: { src: url },
    };
    editor.add(options);
  };

  return (
    <div style={{ display: "flex", height: "100%", flexDirection: "column" }}>
      <div style={{ padding: "2rem 2rem" }} className="flex gap-3 m-auto">
        <input
          type="file"
          accept="image/*"
          id="image-upload"
          className="hidden"
          onChange={handleImageChange}
        />
        <label htmlFor="image-upload" className="cursor-pointer">
          <FaRegImages size={30} color="black" />
        </label>

        {uploading ? (
          <div className="w-[10rem]">
            <Loader type="sync" color="white" />
          </div>
        ) : (
          <button
            className="px-4 py-2 bg-[#000000] rounded-xl w-[10rem]"
            onClick={handleImageUpload}
          >
            Upload Image
          </button>
        )}
      </div>
      <div style={{ flex: 1, overflowX: "auto" }}>
        <Scrollbars>
          <Scrollbars style={{ width: "100%", height: "50%" }} autoHide>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                padding: "0 2rem 2rem",
                whiteSpace: "nowrap",
                width: "1000px",
              }}
            >
              {linkList?.map((image, index) => {
                return (
                  <div
                    style={{
                      display: "inline-block",
                      alignItems: "center",
                      cursor: "pointer",
                      width: "500px",
                    }}
                    key={index}
                    onClick={(e) => {
                      handleAddImage(e, image.url);
                    }}
                  >
                    <img src={image.url} width="100%" alt={`Image ${index}`} />
                  </div>
                );
              })}
            </div>
          </Scrollbars>
          <div className="bg-black w-full flex justify-center items-center font-semibold text-base mb-2">
            Pixabay Images
          </div>
          <Input
            startEnhancer={() => <Icons.Search size={18} />}
            value={search}
            onChange={(e) => setSearch((e.target as any).value)}
            placeholder="Search images"
            clearOnEscape
          />
          <Scrollbars style={{ width: "100%", height: "60%" }} autoHide>
            <div style={{ padding: "2rem 2rem" }}></div>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                padding: "0 2rem 2rem",
                whiteSpace: "nowrap",
                width: "3000px",
                marginTop: "5px",
              }}
            >
              {images.map((img) => (
                <div
                  key={img.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => addImageToCanvas(img.webformatURL)}
                >
                  <img width="100%" src={img.previewURL} alt="preview" />
                </div>
              ))}
            </div>
          </Scrollbars>
        </Scrollbars>
      </div>
    </div>
  );
}

export default ImagesUpload;
