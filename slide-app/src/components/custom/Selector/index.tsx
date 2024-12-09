// import { useContext, useEffect, useState } from "react";
// import "./index.css";
// import useDRR from "../../../hooks/useDRR";
// import { MdDelete } from "react-icons/md";
// import { BiSolidDuplicate } from "react-icons/bi";
// import { EditorContext } from "../../../../../../scenify-sdk/src/context/editor";
// import { cloneDeep } from "lodash";
// import { v4 } from "uuid";

// const Selector = ({
//   editorState,
//   setEditorState,
//   id,
// }: {
//   editorState: any;
//   setEditorState: any;
//   id: string;
// }) => {
//   const [newwidth, setWidth] = useState(null);
//   const [newheight, setHeight] = useState(null);
//   const [newtop, setTop] = useState(null);
//   const [newleft, setLeft] = useState(null);
//   const [newrotate, setRotate] = useState(null);

//   const {
//     width,
//     height,
//     top,
//     left,
//     rotate,
//     elementRef,
//     handleMouseDown,
//     mouseUp,
//   } = useDRR(
//     editorState.initialTopPercent,
//     editorState.initialLeftPercent,
//     editorState.initialWidthPercent,
//     editorState.initialHeightPercent,
//     editorState.initialRotate,
//     editorState.containerWidth,
//     editorState.containerHeight
//   );

//   const { item, setItem, slideIndex } = useContext(EditorContext);

//   useEffect(() => {
//     setEditorState((prev) => {
//       let newFontSize = prev.fontSize;

//       if (prev.fontSize && prev.fontSize !== "") {
//         let fontSizeStr = prev.fontSize.trim();

//         if (fontSizeStr.endsWith("%")) {
//           let fontSizeValue = parseFloat(fontSizeStr.replace("%", ""));

//           // Calculate percentage change in width and height
//           const prevWidthPercent = prev.initialWidthPercent;
//           const prevHeightPercent = prev.initialHeightPercent;
//           const widthChangePercent =
//             ((width - prevWidthPercent) / prevWidthPercent) * 100;
//           const heightChangePercent =
//             ((height - prevHeightPercent) / prevHeightPercent) * 100;

//           // Calculate new font size based on percentage change
//           const averageChange = (widthChangePercent + heightChangePercent) / 2;
//           const newSizePercentage = fontSizeValue + averageChange;
//           newFontSize = `${newSizePercentage}%`;
//         }
//       }

//       return {
//         ...prev,
//         initialTopPercent: top,
//         initialLeftPercent: left,
//         initialHeightPercent: height,
//         initialWidthPercent: width,
//         initialRotate: rotate,
//         isMouseUp: mouseUp,
//         fontSize: newFontSize,
//       };
//     });
//   }, [width, height, top, left, rotate, mouseUp]);

//   useEffect(() => {
//     setWidth(editorState.initialWidthPercent);
//     setHeight(editorState.initialHeightPercent);
//     setTop(editorState.initialTopPercent);
//     setLeft(editorState.initialLeftPercent);
//     setRotate(editorState.initialRotate);
//     // console.log('selector changed');
//   }, [editorState]);

//   const handleDeleteElement = () => {
//     const newItem = cloneDeep(item);
//     const currentSlide = newItem[slideIndex];
//     const { landscape } = currentSlide;
//     const divs = landscape.divs;
//     const updatedDivs = divs?.filter((div: any) => div.id !== id);
//     landscape.divs = updatedDivs;
//     const draftData = JSON.parse(localStorage.getItem("draft"));
//     localStorage.setItem(
//       "draft",
//       JSON.stringify({ ...draftData, item: newItem })
//     );
//     setItem(newItem);
//   };

//   const handleDuplicateElement = () => {
//     const newItem = cloneDeep(item);
//     const currentSlide = newItem[slideIndex];
//     const { landscape } = currentSlide;
//     const divs = landscape.divs;
//     const currentDiv = divs?.find((div: any) => div.id === id);
//     if (currentDiv) {
//       const duplicatedDiv = cloneDeep({ ...currentDiv });
//       duplicatedDiv.id = duplicatedDiv.id + "-" + v4();
//       duplicatedDiv.styles.top = top + 5 + "%";
//       duplicatedDiv.styles.left = left + 5 + "%";
//       console.log(
//         "top and left",
//         duplicatedDiv.styles.top,
//         duplicatedDiv.styles.left
//       );
//       divs.push(duplicatedDiv);
//       const draftData = JSON.parse(localStorage.getItem("draft"));
//       localStorage.setItem(
//         "draft",
//         JSON.stringify({ ...draftData, item: newItem })
//       );
//       setItem(newItem);
//     }
//   };

//   return (
//     <div
//       className="awStMQ "
//       style={{
//         // position: 'absolute',
//         // top: `${top}%`,
//         // left: `${left}%`,
//         width: `${newwidth}%`,
//         height: `${newheight}%`,
//         zIndex: "200",
//       }}
//       ref={elementRef}
//     >
//       <div
//         className="OAPPpQ Jvdx_Q FB7MHA"
//         style={{
//           position: "absolute",
//           top: `${newtop}%`,
//           left: `${newleft}%`,
//           width: `${newwidth}%`,
//           height: `${newheight}%`,
//           zIndex: "500",
//           transform: `translate(-50%, -50%) rotate(${newrotate}deg)`,
//           // transformOrigin: 'center',
//         }}
//         // ref={elementRef}
//         tabIndex={5}
//       >
//         {mouseUp && (
//           <div className="flex gap-2 items-center justify-center absolute z-[2000] top-[-80px] left-[50%] translate-x-[-50%] text-black shadow-xl px-6 py-1.5 rounded-lg bg-white">
//             <button onClick={handleDeleteElement}>
//               <MdDelete size={30} color="#a568ff" />
//             </button>
//             <button onClick={handleDuplicateElement}>
//               <BiSolidDuplicate size={30} color="#a568ff" />
//             </button>
//           </div>
//         )}
//         <div className="USePRA wqPZwA"></div>
//       </div>
//       <div
//         className="OAPPpQ FB7MHA"
//         style={{
//           position: "absolute",
//           top: `${newtop}%`,
//           left: `${newleft}%`,
//           width: `${newwidth}%`,
//           height: `${newheight}%`,
//           zIndex: "500",
//           transform: `translate(-50%, -50%) rotate(${newrotate}deg)`,
//           // transformOrigin: 'center',
//         }}
//       >
//         <div
//           className="w-full h-full cursor-move"
//           onMouseDown={(e) => handleMouseDown(e, "drag")}
//         ></div>
//         <div className="o0HGhg YE6wQA" tabIndex={-1}>
//           <div className="kLSz8Q">
//             <div className="kos7Ag LUSARA LYCvQw">
//               <div
//                 className="z9y2Mg wJ9_lg cursor-nwse-resize"
//                 onMouseDown={(e) => {
//                   handleMouseDown(e, "resize", "top-left");
//                 }}
//               ></div>
//               <div className="GgAMiQ"></div>
//             </div>
//             <div className="kos7Ag r6m0yg LYCvQw">
//               <div
//                 className="z9y2Mg wJ9_lg cursor-nesw-resize"
//                 onMouseDown={(e) => {
//                   handleMouseDown(e, "resize", "top-right");
//                 }}
//               ></div>
//               <div className="GgAMiQ"></div>
//             </div>
//             <div className="kos7Ag wAGCuQ LYCvQw">
//               <div
//                 className="z9y2Mg wJ9_lg cursor-nesw-resize"
//                 onMouseDown={(e) => {
//                   handleMouseDown(e, "resize", "bottom-left");
//                 }}
//               ></div>
//               <div className="GgAMiQ"></div>
//             </div>
//             <div className="kos7Ag xWYclg LYCvQw">
//               <div
//                 className="z9y2Mg wJ9_lg cursor-nwse-resize"
//                 onMouseDown={(e) => {
//                   handleMouseDown(e, "resize", "bottom-right");
//                 }}
//               ></div>
//               <div className="GgAMiQ"></div>
//             </div>
//             <div className="wM7XEg q_0Aqg">
//               <div className="kos7Ag VvGHxQ VvGHxQ SXvZVg">
//                 <div
//                   className="z9y2Mg wJ9_lg cursor-pointer"
//                   onMouseDown={(e) => handleMouseDown(e, "rotate")}
//                 ></div>
//                 <span className="GgAMiQ">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       fill="currentColor"
//                       d="M15.25 18.48V15a.75.75 0 1 0-1.5 0v4c0 .97.78 1.75 1.75 1.75h4a.75.75 0 1 0 0-1.5h-2.6a8.75 8.75 0 0 0-2.07-15.53.75.75 0 1 0-.49 1.42 7.25 7.25 0 0 1 .91 13.34zM8.75 5.52V9a.75.75 0 0 0 1.5 0V5c0-.97-.78-1.75-1.75-1.75h-4a.75.75 0 0 0 0 1.5h2.6a8.75 8.75 0 0 0 2.18 15.57.75.75 0 0 0 .47-1.43 7.25 7.25 0 0 1-1-13.37z"
//                     ></path>
//                   </svg>
//                 </span>
//               </div>
//               <div className="VvGHxQ kos7Ag qkJfsw VvGHxQ">
//                 <div
//                   className="FfO0rw z9y2Mg"
//                   onMouseDown={(e) => handleMouseDown(e, "drag")}
//                 ></div>
//                 <span className="GgAMiQ">
//                   <svg
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       d="M14.22 6.573a.75.75 0 1 0 1.06-1.06l-2.145-2.146a1.25 1.25 0 0 0-1.77 0L9.22 5.513a.75.75 0 0 0 1.06 1.06l1.22-1.22v5.899H5.602l1.22-1.22a.75.75 0 0 0-1.06-1.06l-2.147 2.145a1.251 1.251 0 0 0 0 1.77l2.146 2.145a.75.75 0 1 0 1.06-1.06l-1.219-1.22H11.5v5.897l-1.22-1.22a.75.75 0 1 0-1.06 1.061l2.145 2.146a1.248 1.248 0 0 0 1.77 0l2.145-2.146a.75.75 0 1 0-1.06-1.06L13 18.65v-5.898h5.898l-1.22 1.22a.75.75 0 0 0 1.06 1.06l2.147-2.146a1.252 1.252 0 0 0 0-1.77l-2.146-2.145a.75.75 0 0 0-1.06 1.06l1.219 1.22H13V5.354l1.22 1.22Z"
//                       fill="currentColor"
//                     ></path>
//                   </svg>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Selector;
