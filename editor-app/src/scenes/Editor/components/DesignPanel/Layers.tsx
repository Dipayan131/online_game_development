import React, { useState, useEffect } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  IoCloseCircleOutline,
  IoTrashBinOutline,
  IoEyeOutline,
  IoEyeOffOutline,
  IoPencilOutline,
  IoChevronDownOutline,
  IoChevronForwardOutline,
  IoArrowUp,
  IoArrowDown,
} from "react-icons/io5";
import useSlide from "scenify_sdk/useSlide";
import { cloneDeep } from "lodash";

interface Props {
  onClick: () => void;
}

export default function Layers({ onClick }: Props) {
  const { item, setItem, slideIndex } = useSlide();
  const [isEditing, setIsEditing] = useState<{ [key: number]: boolean }>({});
  const [layerNames, setLayerNames] = useState<{ [key: number]: string }>({});
  const [selectedLayers, setSelectedLayers] = useState<number[]>([]);
  const [groupInfo, setGroupInfo] = useState([]);
  const [openGroups, setOpenGroups] = useState({});

  const toggleGroup = (groupId) => {
    setOpenGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };

  useEffect(() => {
    if (
      item &&
      item[slideIndex] &&
      item[slideIndex].landscape &&
      item[slideIndex].landscape.divs
    ) {
      const newItem = cloneDeep(item);
      let needsUpdate = false;

      newItem[slideIndex].landscape.divs.forEach((div, index) => {
        const newZIndex = newItem[slideIndex].landscape.divs.length - index;
        if (div.styles.zIndex !== newZIndex) {
          div.styles.zIndex = newZIndex;
          needsUpdate = true;
        }
      });

      if (needsUpdate) {
        setItem(newItem);

        const draftData = JSON.parse(localStorage.getItem("draft"));
        localStorage.setItem(
          "draft",
          JSON.stringify({ ...draftData, item: newItem })
        );
      }
    }
  }, [item, slideIndex, setItem]);

  useEffect(() => {
    const storedDraft = JSON.parse(localStorage.getItem("draft")) || {};
    if (storedDraft.groupInfo) {
      setGroupInfo(storedDraft.groupInfo);
    }
  }, []);

  const handleDelete = (index) => {
    const newItem = cloneDeep(item);
    newItem[slideIndex].landscape.divs.splice(index, 1);

    // Update groupInfo to remove the layer from any group
    const updatedGroups = groupInfo
      .map((group) => {
        return {
          ...group,
          layers: group.layers.filter((layerIndex) => layerIndex !== index),
        };
      })
      .filter((group) => group.layers.length > 0); // Optionally remove empty groups

    // Update all indexes in groupInfo after deletion
    const adjustedGroups = updatedGroups.map((group) => ({
      ...group,
      layers: group.layers.map((layerIndex) =>
        layerIndex > index ? layerIndex - 1 : layerIndex
      ),
    }));

    setItem(newItem);
    setGroupInfo(adjustedGroups);

    const draftData = JSON.parse(localStorage.getItem("draft"));
    localStorage.setItem(
      "draft",
      JSON.stringify({ ...draftData, item: newItem, groupInfo: adjustedGroups })
    );
  };

  const handleMouseEnter = (index) => {
    const newItem = cloneDeep(item);
    newItem[slideIndex].landscape.divs[index].styles = {
      ...newItem[slideIndex].landscape.divs[index].styles,
      backgroundColor: "rgb(237, 250, 252)",
      border: "2px solid #8B3DFF",
    };
    setItem(newItem);
  };

  const handleMouseLeave = (index) => {
    const newItem = cloneDeep(item);
    const { backgroundColor, border, ...restStyles } =
      newItem[slideIndex].landscape.divs[index].styles;
    newItem[slideIndex].landscape.divs[index].styles = restStyles;
    setItem(newItem);
  };

  const handleClose = () => {
    const newItem = cloneDeep(item);
    newItem[slideIndex].landscape.divs.forEach((div) => {
      if ((div.styles.backgroundColor, div.styles.border)) {
        delete div.styles.backgroundColor;
        delete div.styles.border;
      }
    });
    setItem(newItem);

    const draftData = JSON.parse(localStorage.getItem("draft"));
    localStorage.setItem(
      "draft",
      JSON.stringify({ ...draftData, item: newItem })
    );
    onClick();
  };

  const toggleVisibility = (index) => {
    const newItem = cloneDeep(item);
    const currentVisibility =
      newItem[slideIndex].landscape.divs[index].styles.visibility;
    newItem[slideIndex].landscape.divs[index].styles.visibility =
      currentVisibility === "hidden" ? "visible" : "hidden";
    setItem(newItem);

    const draftData = JSON.parse(localStorage.getItem("draft"));
    localStorage.setItem(
      "draft",
      JSON.stringify({ ...draftData, item: newItem })
    );
  };

  const moveLayer = (dragIndex, hoverIndex) => {
    const newItem = cloneDeep(item);
    const dragItem = newItem[slideIndex].landscape.divs[dragIndex];
    newItem[slideIndex].landscape.divs.splice(dragIndex, 1);
    newItem[slideIndex].landscape.divs.splice(hoverIndex, 0, dragItem);

    // Update z-index after moving layers
    newItem[slideIndex].landscape.divs.forEach((div, index) => {
      div.styles.zIndex = newItem[slideIndex].landscape.divs.length - index;
    });

    setItem(newItem);

    const draftData = JSON.parse(localStorage.getItem("draft"));
    localStorage.setItem(
      "draft",
      JSON.stringify({ ...draftData, item: newItem })
    );
  };

  const handleEdit = (index) => {
    setIsEditing((prev) => ({ ...prev, [index]: true }));
    setLayerNames((prev) => ({
      ...prev,
      [index]:
        item[slideIndex].landscape.divs[index].name || `Layer: ${index + 1}`,
    }));
  };

  const handleNameChange = (index, name) => {
    setLayerNames((prev) => ({ ...prev, [index]: name }));
  };

  const handleNameSave = (index) => {
    const newItem = cloneDeep(item);
    newItem[slideIndex].landscape.divs[index].name = layerNames[index];
    setItem(newItem);

    const draftData = JSON.parse(localStorage.getItem("draft"));
    localStorage.setItem(
      "draft",
      JSON.stringify({ ...draftData, item: newItem })
    );
    setIsEditing((prev) => ({ ...prev, [index]: false }));
  };

  const LayerItem = ({ index, children }) => {
    const [, drop] = useDrop({
      accept: "layer-item",
      hover: (item) => {
        if (!item) {
          return;
        }
        const dragIndex = (item as { index: number }).index;
        if (dragIndex === index) {
          return;
        }
        moveLayer(dragIndex, index);
        (item as { index: number }).index = index;
      },
    });

    const [{ isDragging }, drag] = useDrag({
      type: "layer-item",
      item: () => {
        return { index };
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const opacity = isDragging ? 0.5 : 1;

    return (
      <div ref={(node) => drag(drop(node))} style={{ opacity }}>
        {children}
      </div>
    );
  };

  const handleCreateGroup = (arrangedLayers) => {
    const newGroupID = groupInfo.length + 1; // Generate a new group ID
    const newGroup = { id: newGroupID, layers: arrangedLayers };
    console.log("seleted layers: ",selectedLayers)
    setGroupInfo([...groupInfo, newGroup]);
    setSelectedLayers([]);

    // Save to local storage
    const draftData = JSON.parse(localStorage.getItem("draft"));
    localStorage.setItem(
      "draft",
      JSON.stringify({
        ...draftData,
        item,
        groupInfo: [...groupInfo, newGroup],
      })
    );
  };

  const toggleGroupVisibility = (groupId) => {
    // console.log("look here: ", groupId)
    const newItem = cloneDeep(item);
    const group = groupInfo.find((group) => group.groupId === groupId);
  
    if (group) {
      group.layers.forEach((index) => {
        const currentVisibility =
          newItem[slideIndex].landscape.divs[index].styles.visibility;
        newItem[slideIndex].landscape.divs[index].styles.visibility =
          currentVisibility === "hidden" ? "visible" : "hidden";
      });
  
      setItem(newItem);
  
      const draftData = JSON.parse(localStorage.getItem("draft"));
      localStorage.setItem(
        "draft",
        JSON.stringify({ ...draftData, item: newItem })
      );
    }
  };
  
  const handleDeleteGroup = (groupId) => {
    const newItem = cloneDeep(item);
    const group = groupInfo.find((group) => group.groupId === groupId);
  
    if (group) {
      // Remove the layers in reverse order to prevent index shifting issues
      group.layers
        .slice()
        .sort((a, b) => b - a)
        .forEach((index) => {
          newItem[slideIndex].landscape.divs.splice(index, 1);
        });
  
      // Adjust groupInfo to remove the deleted group and update indexes
      const updatedGroups = groupInfo
        .filter((g) => g.groupId !== groupId)
        .map((group) => ({
          ...group,
          layers: group.layers.map((layerIndex) =>
            layerIndex > Math.min(...group.layers)
              ? layerIndex - group.layers.length
              : layerIndex
          ),
        }));
  
      setItem(newItem);
      setGroupInfo(updatedGroups);
  
      const draftData = JSON.parse(localStorage.getItem("draft"));
      localStorage.setItem(
        "draft",
        JSON.stringify({ ...draftData, item: newItem, groupInfo: updatedGroups })
      );
    }
  };

  const handleUp = (index) => {
    const newItem = cloneDeep(item)

    let temp = newItem[slideIndex].landscape.divs[index];
    newItem[slideIndex].landscape.divs[index] = newItem[slideIndex].landscape.divs[index-1];
    newItem[slideIndex].landscape.divs[index-1] = temp;

    setItem(newItem);
  };
  
  const handleDown = (index) => {
    const newItem = cloneDeep(item)

    let temp = newItem[slideIndex].landscape.divs[index];
    newItem[slideIndex].landscape.divs[index] = newItem[slideIndex].landscape.divs[index+1];
    newItem[slideIndex].landscape.divs[index+1] = temp;

    setItem(newItem);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="absolute z-[2000] right-0 bg-white text-black flex flex-col gap-4 p-4 top-[50%] translate-y-[-50%] rounded-xl shadow-xl w-[300px] h-[90%]">
        <button onClick={handleClose} className="self-end">
          <IoCloseCircleOutline size={24} color="red" />
        </button>
        <div>
          <h4 className="text-lg font-semibold mb-2">Layers</h4>
          <ul className="list-disc pl-4">
            {item[slideIndex]?.landscape?.divs &&
              item[slideIndex]?.landscape?.divs.map((layer, index) => {
                if (
                  layer.id === "root-div" ||
                  groupInfo.some((group) => group.layers.includes(index))
                ) {
                  return null;
                } else {
                  const isSelected = selectedLayers.includes(index);

                  return (
                    <LayerItem index={index} key={index}>
                      <li
                        className="flex items-center gap-2 cursor-pointer my-1"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        style={{
                          backgroundColor: layer.styles.backgroundColor,
                          borderColor: layer.styles.borderColor,
                          borderStyle: "solid",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => {
                            if (isSelected) {
                              setSelectedLayers(
                                selectedLayers.filter((i) => i !== index)
                              );
                            } else {
                              setSelectedLayers([...selectedLayers, index]);
                            }
                          }}
                        />
                        {layer.styles.visibility === "hidden" ? (
                          <IoEyeOffOutline
                            size={20}
                            color="black"
                            onClick={() => toggleVisibility(index)}
                          />
                        ) : (
                          <IoEyeOutline
                            size={20}
                            color="black"
                            onClick={() => toggleVisibility(index)}
                          />
                        )}
                        {isEditing[index] ? (
                          <>
                            <input
                              type="text"
                              value={layerNames[index]}
                              onChange={(e) =>
                                handleNameChange(index, e.target.value)
                              }
                              autoFocus
                              className="border rounded px-2 py-1"
                            />
                            <button onClick={() => handleNameSave(index)}>
                              ✔️
                            </button>
                          </>
                        ) : (
                          <>
                            {layer.text ? (
                              <span>{layer.text}</span>
                            ) : (
                              <span>Image</span>
                            )}
                            <IoPencilOutline
                              size={20}
                              color="black"
                              onClick={() => handleEdit(index)}
                            />
                          </>
                        )}
                        <IoTrashBinOutline
                          size={20}
                          color="red"
                          onClick={() => handleDelete(index)}
                        />
                        {index !== 0 && (
                          <IoArrowUp size={20} onClick={() => handleUp(index)} />
                        )}
                        {index !== item[slideIndex]?.landscape?.divs.length-1 && (
                          <IoArrowDown size={20} onClick={() => handleDown(index)} />
                        )}
                      </li>
                    </LayerItem>
                  );
                  
                }
              })}
          </ul>

          {/* Render grouped layers */}
          {groupInfo.map((group, groupIndex) => (
            <div key={`group-${groupIndex}`} className="group-layers">
              <div
  className="flex items-center gap-2 cursor-pointer"
  onClick={() => toggleGroup(group.groupId)}
>
  {openGroups[group.groupId] ? (
    <IoChevronDownOutline size={20} />
  ) : (
    <IoChevronForwardOutline size={20} />
  )}
  <h5>Layer {group.groupId}</h5>
  {/* Visibility Button */}
  <IoEyeOutline
    size={20}
    color="black"
    onClick={() => toggleGroupVisibility(group.groupId)}
  />
  {/* Delete Button */}
  <IoTrashBinOutline
    size={20}
    color="red"
    onClick={() => handleDeleteGroup(group.groupId)}
  />
</div>

              {openGroups[group.groupId] && (
                <ul className="list-disc pl-4">
                  {group.layers.map((index) => {
                    const layer = item[slideIndex]?.landscape?.divs[index];
                    return (
                      <LayerItem index={index} key={index}>
                        <li
                          className="flex items-center gap-2 cursor-pointer my-1"
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={() => handleMouseLeave(index)}
                          style={{
                            backgroundColor: layer.styles.backgroundColor,
                            borderColor: layer.styles.borderColor,
                            borderStyle: "solid",
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={selectedLayers.includes(index)}
                            onChange={() => {
                              if (selectedLayers.includes(index)) {
                                setSelectedLayers(
                                  selectedLayers.filter((i) => i !== index)
                                );
                              } else {
                                setSelectedLayers([...selectedLayers, index]);
                              }
                            }}
                          />
                          {layer.styles.visibility === "hidden" ? (
                            <IoEyeOffOutline
                              size={20}
                              color="black"
                              onClick={() => toggleVisibility(index)}
                            />
                          ) : (
                            <IoEyeOutline
                              size={20}
                              color="black"
                              onClick={() => toggleVisibility(index)}
                            />
                          )}
                          {isEditing[index] ? (
                            <>
                              <input
                                type="text"
                                value={layerNames[index]}
                                onChange={(e) =>
                                  handleNameChange(index, e.target.value)
                                }
                                autoFocus
                                className="border rounded px-2 py-1"
                              />
                              <button onClick={() => handleNameSave(index)}>
                                ✔️
                              </button>
                            </>
                          ) : (
                            <>
                              <span>{layer.text || `Layer: ${index + 1}`}</span>
                              <IoPencilOutline
                                size={20}
                                color="black"
                                onClick={() => handleEdit(index)}
                              />
                            </>
                          )}
                          <IoTrashBinOutline
                            size={20}
                            color="red"
                            onClick={() => handleDelete(index)}
                          />
                          {index !== 0 && (
                          <IoArrowUp size={20} onClick={() => handleUp(index)} />
                        )}
                        {index !== item[slideIndex]?.landscape?.divs.length-1 && (
                          <IoArrowDown size={20} onClick={() => handleDown(index)} />
                        )}
                        </li>
                      </LayerItem>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}

          <button
            onClick={() => handleCreateGroup(selectedLayers)}
            className="bg-blue-500 rounded-sm text-white p-2"
          >
            Create a Group
          </button>
        </div>
      </div>
    </DndProvider>
  );
}
