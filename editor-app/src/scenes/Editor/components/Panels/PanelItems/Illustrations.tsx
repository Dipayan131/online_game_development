import * as React from "react";
import { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { getImage, getImages } from "../../../../../services/iconscout";
// import { useEditor } from "../../../../../../../../../scenify-sdk/src";
import useEditor from "scenify_sdk/useEditor";
import { useDebounce } from "use-debounce";

function Illustrations() {
  const [search, setSearch] = useState("");
  const [objects, setObjects] = useState<any[]>([]);
  const [value] = useDebounce(search, 1000);
  const editor = useEditor();

  useEffect(() => {
    getImages("people")
      .then((data: any) => setObjects(data))
      .catch(console.log);
  }, []);

  useEffect(() => {
    if (value) {
      getImages(value)
        .then((data: any) => setObjects(data))
        .catch(console.log);
    }
  }, [value]);
  const downloadImage = (uuid) => {
    getImage(uuid)
      .then((url) => {
        const options = {
          type: "StaticVector",
          metadata: { src: url },
        };
        editor.add(options);
      })
      .catch(console.log);
  };

  return (
    <div style={{ display: "flex", height: "100%", flexDirection: "column" }}>
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
            {objects.map((obj) => (
              <div
                key={obj.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  justifyContent: "center",
                }}
                onClick={() => downloadImage(obj.uuid)}
              >
                <img width="80%" src={obj.urls.thumb} alt="svg object" />
              </div>
            ))}
          </div>
        </Scrollbars>
      </div>
    </div>
  );
}

export default Illustrations;
