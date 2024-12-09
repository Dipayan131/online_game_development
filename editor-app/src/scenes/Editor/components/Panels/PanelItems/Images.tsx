import * as React from "react";
import { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Icons from "../../../../../components/icons";
import { getPixabayImages, PixabayImage } from "../../../../../services/pixabay";
import useEditor from "scenify_sdk/useEditor";
import { useDebounce } from "use-debounce";

function Images() {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState<PixabayImage[]>([]);
  const [value] = useDebounce(search, 1000);
  const editor = useEditor();

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

  const addImageToCanvas = (url: string) => {
    if (editor && typeof editor.add === 'function') {
      const options = {
        type: "StaticImage",
        metadata: { src: url },
      };
      editor.add(options);
    } else {
      console.error("Editor is not initialized or add method is not available.");
    }
  };

  return (
    <div style={{ display: "flex", height: "100%", flexDirection: "column" }}>
      {/* <div style={{ padding: '2rem 2rem' }}>
        <Input
          startEnhancer={() => <Icons.Search size={18} />}
          value={search}
          onChange={(e) => setSearch((e.target as any).value)}
          placeholder="Search images"
          clearOnEscape
        />
      </div> */}
      <div style={{ flex: 1 }}>
        <Scrollbars>
          <div
            style={{
              display: "grid",
              gap: "0.5rem",
              padding: "0 2rem 2rem",
              gridTemplateColumns: "1fr 1fr",
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
                <img width="100%" style={{ opacity: 1 }} src={img.previewURL} alt="preview" />
              </div>
            ))}
          </div>
        </Scrollbars>
      </div>
    </div>
  );
}

export default Images;
