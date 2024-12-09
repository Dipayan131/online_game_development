import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { cloneDeep } from "lodash";
import useData from "firebase_app/useData";
const IconView = React.lazy(() => import("slide_app/IconView"));
import useSlide from "scenify_sdk/useSlide";

function Templates() {
  const [value, setValue] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [template, setTemplate] = useState(null);
  const [state] = useState();
  const handlers = {};
  const navigate = useNavigate();
  const { item, setItem, slideIndex, setSlideIndex } = useSlide();
  const { data } = useData("/games");

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedTemplateKey, setSelectedTemplateKey] = useState(null);
  const open = Boolean(anchorEl);

  const handleViewTemplate = (key) => {
    setIsSelected(true);
    setTemplate(data[key]);
  };

  const handleMenuClick = (event, key) => {
    setAnchorEl(event.currentTarget);
    setSelectedTemplateKey(key);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedTemplateKey(null);
  };

  const handleAddNewCanvas = () => {
    if (selectedTemplateKey) {
      const newItems = cloneDeep(item);
      newItems.splice(item.length, 0, selectedTemplateKey);
      setItem(newItems);
      const draftData = JSON.parse(localStorage.getItem("draft"));
      localStorage.setItem(
        "draft",
        JSON.stringify({ ...draftData, item: newItems })
      );
    }
    handleMenuClose();
    setIsSelected(false);
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
              overflow: "hidden",
              marginTop: "1rem"
            }}
          >
            {data && !isSelected
              ? Object.keys(data).map((key) => (
                  <div
                    className="relative top-0 left-0 overflow-hidden"
                    key={key}
                    style={{ position: "relative" }}
                  >
                    <div
                      style={{
                        width: "150px",
                        height: "100px",
                        aspectRatio: "3/2",
                        transform: "scale(0.2)",
                        transformOrigin: "left top",
                        borderRadius: "40px",
                      }}
                      onClick={() => handleViewTemplate(key)}
                    >
                      <IconView
                        viewType="ICON"
                        state={state}
                        data={data[key]?.item[0]}
                        {...handlers}
                        key={key}
                        editable={false}
                      />
                    </div>
                  </div>
                ))
              : template &&
                Array.isArray(template.item) &&
                template.item.map((slide, index) => {
                  const newItem = slide;
                  newItem.landscape.divs = newItem.landscape.divs.map((div) => {
                    return { ...div, id: div.id + "-template" };
                  });
                  return (
                    <div
                      className="relative top-0 left-0"
                      key={index}
                      style={{ position: "relative" }}
                    >
                      <div
                        style={{
                          width: "150px",
                          height: "100px",
                          aspectRatio: "3/2",
                          transform: "scale(0.2)",
                          transformOrigin: "left top",
                          borderRadius: "40px",
                        }}
                      >
                        <IconView
                          viewType="ICON"
                          state={state}
                          data={slide}
                          {...handlers}
                          slideIndex={index}
                          key={index}
                          editable={false}
                        />
                      </div>
                      <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={(event) => handleMenuClick(event, newItem)}
                        style={{
                          position: "absolute",
                          top: "0",
                          right: "0",
                        }}
                      >
                        <MoreVertIcon />
                      </IconButton>
                    </div>
                  );
                })}
          </div>
        </Scrollbars>
      </div>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: "20ch",
          },
        }}
      >
        <MenuItem onClick={handleAddNewCanvas}>Add at new canvas</MenuItem>
      </Menu>
    </div>
  );
}

export default Templates;
