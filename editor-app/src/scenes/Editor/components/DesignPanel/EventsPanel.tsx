import * as React from "react";
import { useState, useEffect, useContext } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import useSlide from "scenify_sdk/useSlide";
import { cloneDeep } from "lodash";
import { aniData } from "./animationData";
import { FaEdit } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import useAppContext from "@/hooks/useAppContext";

interface Props {
  onClick: () => void;
}

const EventsPanel: React.FC<Props> = ({ onClick }) => {
  const { item, setItem, slideIndex, selectedDiv } = useSlide();
  const [trigger, setTrigger] = useState("mount");
  const [events, setEvents] = useState("none");
  const [eventStatus, setEventStatus] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(0);
  const [customAction, setCustomAction] = useState(""); // State for input value
  // const [customActions, setCustomActions] = useState<string[]>([]);
  const { customActions, setCustomActions } = useAppContext();

  useEffect(() => {
    const savedActions = JSON.parse(localStorage.getItem("customActions") || "[]");
    if (savedActions.length > 0) {
      setCustomActions(savedActions);
    }
  }, []);
  

  const handleAddCustomAction = () => {
    if (customAction) {
      if (customActions.includes(customAction)) {
        alert("Action name already exists!");
      } else {
        const updatedActions = [...customActions, customAction];
        setCustomActions(updatedActions);
        localStorage.setItem("customActions", JSON.stringify(updatedActions));
        setCustomAction("");
      }
    }
  };
  
  

  const handleSetInitialState = (id: string) => {
    const newItem = cloneDeep(item);
    const currentSlide = newItem[slideIndex];
    const { landscape } = currentSlide;
    const divs = landscape.divs;
    const currentDiv = divs?.find((div: any) => div.id === id);
    if (currentDiv && !currentDiv.events) {
      currentDiv.events = [];
    }
    setItem(newItem);
  };

  useEffect(() => {
    handleSetInitialState(selectedDiv);
  }, [selectedDiv]);

  const handleDivValue = (id: string) => {
    const newItem = cloneDeep(item);
    const currentSlide = newItem[slideIndex];
    const { landscape } = currentSlide;
    const divs = landscape.divs;
    const currentDiv = divs?.find((div: any) => div.id === id);

    if (currentDiv) {
      const newEvents = {
        payload: "",
        type: events,
        trigger: trigger,
      };

      if (!currentDiv.events) {
        currentDiv.events = [];
      }

      currentDiv.events.push(newEvents);

      const draftData = JSON.parse(localStorage.getItem("draft") as string);
      localStorage.setItem(
        "draft",
        JSON.stringify({ ...draftData, item: newItem })
      );

      setItem(newItem);
      setEventStatus(false);
    }
  };

  const handleEdit = (div) => {
    setEvents(div.type);
    setTrigger(div.trigger);

    setEditing(true);
    setEventStatus(true);
  };

  const handleSave = (id, index) => {
    const newItem = cloneDeep(item);
    const currentSlide = newItem[slideIndex];
    const { landscape } = currentSlide;
    const divs = landscape.divs;
    const currentDiv = divs?.find((div) => div.id === id);

    if (currentDiv) {
      const updatedEvents = {
        payload: "",
        type: events,
        trigger: trigger,
      };

      currentDiv.events.splice(index, 1, updatedEvents);
      setItem(newItem);

      const draftData = JSON.parse(localStorage.getItem("draft") || "{}");
      localStorage.setItem(
        "draft",
        JSON.stringify({
          ...draftData,
          item: newItem,
        })
      );
    }

    setEditing(false);
    setEventStatus(false);
  };

  const currentDiv = item[slideIndex].landscape.divs?.find(
    (div) => div.id === selectedDiv
  );

  return (
    <>
      {currentDiv &&
      currentDiv.events &&
      currentDiv.events.length === 0 &&
      !eventStatus ? (
        <div className="absolute z-[2000] right-0 bg-white text-black flex flex-col items-center gap-4 p-4 top-[50%] translate-y-[-40%] rounded-xl shadow-xl w-[300px] h-auto">
          <button onClick={onClick} className="self-end">
            <IoCloseCircleOutline size={24} color="red" />
          </button>
          <div>No Events Currently</div>
          <button onClick={() => setEventStatus(true)}>
            <IoMdAddCircle size={60} color="purple" />
          </button>
          <div>Add Events</div>
        </div>
      ) : currentDiv ? (
        <div className="absolute z-[2000] right-0 bg-white text-black flex flex-col gap-4 p-4 top-[50%] translate-y-[-40%] rounded-xl shadow-xl w-[300px] h-auto">
          <button onClick={onClick} className="self-end">
            <IoCloseCircleOutline size={24} color="red" />
          </button>
          {currentDiv.events?.map((div, index) => (
            <div className="flex justify-between" key={index}>
              <div>
                {index + 1}. {div.type}
              </div>
              <div
                className="cursor-pointer"
                onClick={() => {
                  handleEdit(div), setEditIndex(index);
                }}
              >
                <FaEdit size={24} color="purple" />
              </div>
            </div>
          ))}
          <hr />
          <div
            className="flex flex-col items-center"
            onClick={() => setEventStatus(true)}
          >
            <button>
              <IoMdAddCircle size={60} color="purple" />
            </button>
            <div>Add new Events</div>
          </div>
        </div>
      ) : null}

      {eventStatus && (
        <div className="absolute z-[2000] right-0 bg-white text-black flex flex-col gap-4 p-4 top-[50%] translate-y-[-40%] rounded-xl shadow-xl w-[300px] h-auto">
          <button onClick={onClick} className="self-end">
            <IoCloseCircleOutline size={24} color="red" />
          </button>
          <h4 className="text-lg font-semibold mb-2">Actions</h4>

          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Add Custom Action</h4>
            <input
              type="text"
              value={customAction}
              onChange={(e) => setCustomAction(e.target.value)}
              placeholder="Enter custom action"
              className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
            />
            <button
              onClick={handleAddCustomAction}
              className="bg-purple-500 text-white p-2 rounded mt-2"
            >
              Add
            </button>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Events</h4>
            <select
              value={events}
              className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
              onChange={(e) => setEvents(e.target.value)}
            >
              <option value="none">None</option>
              <option value="ACTION.NEXT">Next</option>
              <option value="ACTION.PREV">Previous</option>
              <option value="ACTION.RESET">Reset</option>
              <option value="ACTION.GOTOPAGE">Go to page</option>
              <option value="ACTION.SUBMIT">Submit</option>
              <option value="ACTION.CHECKSTATE">Check state</option>
              <option value="ACTION.SETSTATE">Set state</option>
              <option value="ACTION.UPDATESTATE">Update state</option>
              <option value="ACTION.UPDATESTATES">Update states</option>
              <option value="ACTION.REPEATSTATE">Repeat state</option>
              <option value="ACTION.REPLACEONDROP">Replace on drop</option>
              <option value="ACTION.STARTROOM">Start room</option>
              <option value="ACTION.ROOMSENDMSG">Send message</option>
              {customActions.map((action) => (
                <option value={action}>{action}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <h4 className="text-lg font-semibold mb-2">Trigger</h4>
            <select
              value={trigger}
              className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
              onChange={(e) => setTrigger(e.target.value)}
            >
              <option value="mount">Mount</option>
              <option value="hover">Hover</option>
              <option value="click">Click</option>
            </select>
          </div>

          <div className="flex justify-center mb-4">
            {!editing ? (
              <button
                className="bg-[#800080] hover:bg-[#a64ca6] text-white rounded-lg p-4"
                onClick={() => handleDivValue(selectedDiv)}
              >
                <strong>
                  Submit
                  <strong />
                </strong>
              </button>
            ) : (
              <button
                className="bg-[#800080] hover:bg-[#a64ca6] text-white rounded-lg p-4"
                onClick={() => handleSave(selectedDiv, editIndex)}
              >
                <strong>Save</strong>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default EventsPanel;
