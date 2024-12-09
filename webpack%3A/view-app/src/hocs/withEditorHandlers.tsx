__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _withAnimationHandlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./withAnimationHandlers */ "./src/hocs/withAnimationHandlers.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "webpack/sharing/consume/default/react-dom/react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_custom_Selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/custom/Selector */ "./src/components/custom/Selector/index.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
// import { EditorContext } from '../../../../scenify-sdk/src/context/editor';





const withEditorHandlers = WrappedComponent => {
  const NewComponent = ({
    editable,
    refContext,
    id,
    src,
    variant = "div",
    className,
    styles,
    text,
    children,
    selected,
    setSelected,
    haveParent,
    editorHooks,
    ...props
  }) => {
    const ref = refContext || (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const element = ref.current;
    const [innerHtml] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(text);
    const rootDiv = document.getElementById("root-div");
    const [selectedCurrent, setSelectedCurrent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const match = styles.transform?.match(/rotate\((.*?)deg\)/);
    const degreeNumber = match ? parseFloat(match[1]) : 0;
    const [editorState, setEditorState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

    // const { setItem, slideIndex } = useSlide();
    const {
      useSlide,
      useEditor
    } = editorHooks;
    if (!useSlide || !useEditor) return;
    const {
      item,
      setItem,
      slideIndex
    } = useSlide();
    const editor = useEditor();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
      const element = ref.current;
      if (element && rootDiv) {
        const containerHeight = rootDiv.clientHeight;
        const containerWidth = rootDiv.clientWidth;
        setEditorState({
          initialTopPercent: element.offsetTop / containerHeight * 100,
          initialLeftPercent: element.offsetLeft / containerWidth * 100,
          initialWidthPercent: styles.width ? parseFloat(styles.width.replace("%", "")) : element.offsetWidth / containerWidth * 100,
          initialHeightPercent: styles.height ? parseFloat(styles.height.replace("%", "")) : element.offsetHeight / containerHeight * 100,
          initialRotate: degreeNumber,
          containerHeight,
          containerWidth,
          fontSize: styles.fontSize ? styles.fontSize : "",
          isMouseUp: selected ? true : false
        });
      }
    }, [element, rootDiv, selected]);
    const editorStateUpdate = () => {
      setSelected(null);
      setSelectedCurrent(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
      window.addEventListener("editorStateUpdate", editorStateUpdate);
      return () => {
        window.removeEventListener("editorStateUpdate", editorStateUpdate);
      };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
      if (selected === id) setSelectedCurrent(true);else setSelectedCurrent(false);
    }, [selected]);
    const getStyles = () => {
      const parentStyles = {
        ...(!haveParent && {
          position: "absolute",
          // top: !draggable ? '50%' : '',
          // left: !draggable ? '50%' : '',
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        })
      };
      const baseStyles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      };

      // console.log('base styles', baseStyles)
      return {
        ...parentStyles,
        ...baseStyles,
        ...styles
      };
    };
    const combinedStyles = getStyles();

    // const DynamicComponent = variant ? variant.toLowerCase() : 'div';

    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
      if (!editorState || !combinedStyles.fontSize || !editorState.fontSize) return;
      let newWidth = combinedStyles.width;
      let newHeight = combinedStyles.height;
      let newFontSize = combinedStyles.fontSize;
      let oldFontSize = editorState.fontSize ? editorState.fontSize : "";
      if (newFontSize && newFontSize !== "") {
        let fontSizeStr = newFontSize.toString();
        if (fontSizeStr.endsWith("%")) {
          let fontSizeValue = parseFloat(fontSizeStr.replace("%", ""));

          // Calculate percentage change in font size
          const prevFontSizeValue = parseFloat(oldFontSize.replace("%", ""));
          const fontSizeChangePercent = (fontSizeValue - prevFontSizeValue) / prevFontSizeValue * 100;

          // Calculate new width and height based on font size change
          const widthChange = editorState.initialWidthPercent / 100 * fontSizeChangePercent;
          const heightChange = editorState.initialHeightPercent / 100 * fontSizeChangePercent;
          newWidth = editorState.initialWidthPercent + widthChange;
          newHeight = editorState.initialHeightPercent + heightChange;
          setEditorState({
            ...editorState,
            fontSize: newFontSize,
            initialWidthPercent: newWidth,
            initialHeightPercent: newHeight,
            isMouseUp: false
          });
          console.log("width and height from fontChange", newWidth, newHeight);
          if (item) {
            const newItem = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(item);
            const currentSlide = newItem[slideIndex];
            const {
              landscape
            } = currentSlide;
            const divs = landscape.divs;
            const currentDiv = divs?.find(div => div.id === id);

            // Update the styles of the current div
            if (currentDiv) {
              currentDiv.styles.width = newWidth + "%";
              currentDiv.styles.height = newHeight + "%";
              currentDiv.fontSize = newFontSize;
            }
            const draftData = JSON.parse(localStorage.getItem("draft"));
            // Save the updated data back to localStorage
            localStorage.setItem("draft", JSON.stringify({
              ...draftData,
              item: newItem
            }));
            setItem(newItem);
            // console.log(draftData);
            if (editor) editor.save(newItem);
            // if (editor) editor.test(mockitem);
          }
        }
      }
    }, [combinedStyles.fontSize]);
    const handleEditDiv = () => {
      setSelected(id);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
      const element = ref.current;
      if (element) {
        element.addEventListener("click", handleEditDiv);
        // console.log('click event added to element id ', id);
      }
      return () => {
        if (element) {
          element.removeEventListener("click", handleEditDiv);
        }
      };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
      console.log();
      if (editorState && editorState.isMouseUp) {
        const newStyles = {
          ...combinedStyles,
          top: editorState.initialTopPercent + "%",
          left: editorState.initialLeftPercent + "%",
          width: editorState.initialWidthPercent + "%",
          height: editorState.initialHeightPercent + "%",
          transform: combinedStyles.transform ? combinedStyles.transform : `rotate(${editorState.initialRotate}deg)`,
          fontSize: editorState.fontSize
        };
        // console.log('newStyles', newStyles);
        // Retrieve existing data from localStorage

        // console.log('the top and value are: ', newStyles.top, newStyles.left);
        console.log("I am not working realtime: ", newStyles.width, newStyles.height);
        if (item) {
          const newItem = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(item);
          const currentSlide = newItem[slideIndex];
          const {
            landscape
          } = currentSlide;
          const divs = landscape.divs;
          const currentDiv = divs?.find(div => div.id === id);

          // Update the styles of the current div
          if (currentDiv) {
            currentDiv.styles = newStyles;
          }
          const draftData = JSON.parse(localStorage.getItem("draft"));
          // Save the updated data back to localStorage
          localStorage.setItem("draft", JSON.stringify({
            ...draftData,
            item: newItem
          }));
          setItem(newItem);
          // console.log(draftData);
          if (editor) editor.save(newItem);
          // if (editor) editor.test(mockitem);
        }
      }
    }, [editorState]);

    // console.log('innerHtml', innerHtml);
    const Mock = () => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(variant, {
        id: id + "-editable",
        className: className,
        style: {
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          ...combinedStyles,
          ...(editorState && {
            top: editorState.initialTopPercent + "%",
            left: editorState.initialLeftPercent + "%",
            width: editorState.initialWidthPercent + "%",
            height: editorState.initialHeightPercent + "%",
            transform: combinedStyles.transform + " " + `rotate(${editorState.initialRotate}deg)`,
            fontSize: editorState.fontSize,
            zIndex: 400
          })
        }
      }, innerHtml || children);
    };
    const AnimatedMock = (0,_withAnimationHandlers__WEBPACK_IMPORTED_MODULE_0__["default"])(Mock);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(WrappedComponent, _extends({
      refContext: ref,
      id: id,
      src: src,
      variant: variant,
      className: className,
      styles: styles,
      text: text,
      children: children,
      selectedCurrent: selectedCurrent
    }, props)), selectedCurrent && /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_custom_Selector__WEBPACK_IMPORTED_MODULE_3__["default"], {
      editorState: editorState,
      setEditorState: setEditorState,
      id: id,
      useSlide: useSlide
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(AnimatedMock, {
      animations: props.animations,
      selectActionHandler: props.handler,
      id: id + "-editable"
    })), document.getElementById("editor-root")));
  };
  return NewComponent;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withEditorHandlers);

//# sourceURL=webpack://view-app/./src/hocs/withEditorHandlers.tsx?