import React, { useState, useEffect } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { MdCrop, MdAutoFixHigh, MdLightMode, MdTexture, MdColorLens, MdAspectRatio, MdCropRotate, MdCropFree } from 'react-icons/md';
import { TbAdjustments, TbInnerShadowRightFilled, TbBoxAlignLeft } from "react-icons/tb";
import { CiAlignTop, CiAlignBottom, CiAlignCenterH, CiAlignLeft, CiAlignRight, CiAlignCenterV } from "react-icons/ci";
import useSlide from 'scenify_sdk/useSlide';
import { cloneDeep } from 'lodash';
import ImageCropper from './ImageCropper';

interface ImagePanelProps {
  imageUrl: string | null;
  onClick: () => void;
  onCropped: (croppedImageUrl: string) => void;
}


const aspectRatios = [
  { label: "16:9", value: 16 / 9 },
  { label: "4:3", value: 4 / 3 },
  { label: "1:1", value: 1 },
  { label: "2:1", value: 2 },
];

const SIZE = 25;
const COLOR = "#8b3dff";

const tabs = {
  EFFECTS: 'Effects',
  ADJUST: 'Adjust',
  CROP: 'Crop',
};

export default function ImagePanel({ imageUrl, onClick, onCropped }) {
  const { item, setItem, slideIndex, selectedDiv } = useSlide();
  const [activeTab, setActiveTab] = useState(tabs.EFFECTS);
  const [opacity, setOpacity] = useState(1);
  const [boxShadow, setBoxShadow] = useState('');
  const [aspectRatio, setAspectRatio] = useState(aspectRatios[0].value);
  const [brightness, setBrightness] = useState(1);
  const [contrast, setContrast] = useState(1);
  const [sharpness, setSharpness] = useState(0);
  const [blur, setBlur] = useState(0);
  const [sepia, setSepia] = useState(0);
  const [saturate, setSaturate] = useState(1);
  const [hueRotate, setHueRotate] = useState(0);
  const [invert, setInvert] = useState(0);
  const [highlight, setHighlight] = useState(0);
  const [shadow, setShadow] = useState(0);
  const [whites, setWhites] = useState(0);
  const [blacks, setBlacks] = useState(0);
  const [isCropPopupOpen, setIsCropPopupOpen] = useState(false);
  const [croppedArea, setCroppedArea] = useState(null);
  const imageSrc = 'https://res.cloudinary.com/dyq1mioyr/image/upload/v1712824974/Batch2024/dwgkeurtbk5myqdcmujp.webp';

  const handleCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
    console.log('Cropped area:', croppedArea);
    console.log('Cropped area pixels:', croppedAreaPixels);
    setCroppedArea(croppedAreaPixels);
  };

  const ImagePanelProps = ({ imageUrl }) => {
    console.log('ImagePanel received imageUrl:', imageUrl);
  }

  const handleDivValue = (id) => {
    const newItem = cloneDeep(item);
    const currentSlide = newItem[slideIndex];
    const { landscape } = currentSlide;
    const divs = landscape.divs;
    const currentDiv = divs?.find(div => div.id === id);
    if (currentDiv) {
      currentDiv.styles = {
        ...currentDiv.styles,
        opacity,
        boxShadow,
        filter: `brightness(${brightness}) contrast(${contrast}) blur(${blur}px) sepia(${sepia}) saturate(${saturate}) hue-rotate(${hueRotate}deg) invert(${invert})`,
        highlight,
        shadow,
        whites,
        blacks,
      };
      const draftData = JSON.parse(localStorage.getItem('draft'));
      localStorage.setItem('draft', JSON.stringify({ ...draftData, item: newItem }));
      setItem(newItem);
    }
  };

  const handleAspectRatioChange = (id) => {
    const newItem = cloneDeep(item);
    const currentSlide = newItem[slideIndex];
    const { landscape } = currentSlide;
    const divs = landscape.divs;
    const currentDiv = divs?.find(div => div.id === id);
    if (currentDiv) {
      const { width, height } = currentDiv.styles;
      const currentWidth = width || 100;
      const currentHeight = height || 100;

      let newWidth, newHeight;
      if (currentWidth / currentHeight > aspectRatio) {
        newWidth = currentHeight * aspectRatio;
        newHeight = currentHeight;
      } else {
        newWidth = currentWidth;
        newHeight = currentWidth / aspectRatio;
      }

      currentDiv.styles = {
        ...currentDiv.styles,
        width: newWidth,
        height: newHeight,
      };

      const draftData = JSON.parse(localStorage.getItem('draft'));
      localStorage.setItem('draft', JSON.stringify({ ...draftData, item: newItem }));
      setItem(newItem);
    }
  };

  const handleSetInitialState = (id) => {
    const newItem = cloneDeep(item);
    const currentSlide = newItem[slideIndex];
    const { landscape } = currentSlide;
    const divs = landscape.divs;
    const currentDiv = divs?.find(div => div.id === id);
    if (currentDiv) {
      const { opacity, boxShadow, width, height, filter, highlight, shadow, whites, blacks } = currentDiv.styles;
      setOpacity(opacity);
      setBoxShadow(boxShadow);
      setAspectRatio(width / height);
      setHighlight(highlight || 0);
      setShadow(shadow || 0);
      setWhites(whites || 0);
      setBlacks(blacks || 0);
      if (filter) {
        const filters = filter.split(' ').reduce((acc, item) => {
          const [name, value] = item.split('(');
          acc[name] = parseFloat(value);
          return acc;
        }, {});
        setBrightness(filters.brightness || 1);
        setContrast(filters.contrast || 1);
        setBlur(filters.blur || 0);
        setSepia(filters.sepia || 0);
        setSaturate(filters.saturate || 1);
        setHueRotate(filters['hue-rotate'] || 0);
        setInvert(filters.invert || 0);
      }
    }
  };

  const handleAlignmentChange = (alignment) => {
    const newItem = cloneDeep(item);
    const currentSlide = newItem[slideIndex];
    const { landscape } = currentSlide;
    const divs = landscape.divs;
    const currentDiv = divs?.find(div => div.id === selectedDiv);

    if (currentDiv) {
      const { width, height } = currentDiv.styles;
      const containerWidth = landscape.width || 1000;
      const containerHeight = landscape.height || 1000;

      let newLeft = currentDiv.styles.left;
      let newTop = currentDiv.styles.top;

      switch (alignment) {
        case 'top':
          newTop = 190;
          break;
        case 'middle':
          newLeft = 380;
          newTop = 250;
          break;
        case 'bottom':
          newTop = 320;
          break;
        case 'left':
          newLeft = 110;
          break;
        case 'center':
          newLeft = 380;
          newTop = 250;
          break;
        case 'right':
          newLeft = 630;
          break;
        default:
          break;
      }

      currentDiv.styles = {
        ...currentDiv.styles,
        top: newTop !== undefined ? newTop : currentDiv.styles.top,
        left: newLeft !== undefined ? newLeft : currentDiv.styles.left,
      };

      const draftData = JSON.parse(localStorage.getItem('draft'));
      localStorage.setItem('draft', JSON.stringify({ ...draftData, item: newItem }));
      setItem(newItem);
    }
  };

  useEffect(() => {
    handleSetInitialState(selectedDiv);
  }, [selectedDiv]);

  useEffect(() => {
    if (selectedDiv) {
      handleDivValue(selectedDiv);
    }
  }, [opacity, boxShadow, brightness, contrast, blur, sepia, saturate, hueRotate, invert, highlight, shadow, whites, blacks, aspectRatio, selectedDiv]);


  return (
    <div className="absolute z-[2000] right-0 bg-white text-black flex flex-col gap-4 p-4 top-[50%] translate-y-[-50%] rounded-xl shadow-xl w-[300px] h-[90%] overflow-y-auto">
      <button onClick={onClick} className="self-end" title="Close">
        <IoCloseCircleOutline size={24} color="red" />
      </button>
      <div className="flex mb-4">
        {Object.values(tabs).map(tab => (
          <button
            key={tab}
            className={`flex-1 py-2 ${activeTab === tab ? 'border-b-2 border-blue-500' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            <div className="flex flex-col items-center justify-center">
              {tab === tabs.EFFECTS && <MdAutoFixHigh size={24} />}
              {tab === tabs.ADJUST && <TbAdjustments size={24} />}
              {tab === tabs.CROP && <MdCrop size={24} />}
              <span>{tab}</span>
            </div>
          </button>
        ))}
      </div>

      {activeTab === tabs.EFFECTS && (
        <div>
          <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <TbInnerShadowRightFilled />
            Shadow
          </h4>
          <div className="flex gap-3 items-center mb-4">
            <button
              className={`flex flex-col items-center justify-center shadow-button ${boxShadow === 'none' && 'selected'}`}
              onClick={() => setBoxShadow('none')}
            >
              <div className="w-10 h-10 rounded-lg border border-2"></div>
              <h4>None</h4>
            </button>
            <button
              className={`flex flex-col items-center justify-center shadow-button ${boxShadow === '0em 0.3em 0.8em rgba(0, 0, 0, 0.3)' && 'selected'}`}
              onClick={() => setBoxShadow('0em 0.3em 0.8em rgba(0, 0, 0, 0.3)')}
            >
              <div
                className="w-10 h-10 rounded-lg border border-2"
                style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0em 0.3em 0.8em' }}
              ></div>
              <h4>Soft</h4>
            </button>
            <button
              className={`flex flex-col items-center justify-center shadow-button ${boxShadow === '0.1em 0.2em 0.3em rgba(0, 0, 0, 0.3)' && 'selected'}`}
              onClick={() => setBoxShadow('0.1em 0.2em 0.3em rgba(0, 0, 0, 0.3)')}
            >
              <div
                className="w-10 h-10 rounded-lg border border-2"
                style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0.1em 0.2em 0.3em' }}
              ></div>
              <h4>Regular</h4>
            </button>
            <button
              className={`flex flex-col items-center justify-center shadow-button ${boxShadow === '0.2em 0.2em 0em rgba(0, 0, 0, 0.3)' && 'selected'}`}
              onClick={() => setBoxShadow('0.2em 0.2em 0em rgba(0, 0, 0, 0.3)')}
            >
              <div
                className="w-10 h-10 rounded-lg border border-2"
                style={{ boxShadow: 'rgba(0, 0, 0, 0.3) 0.2em 0.2em 0em' }}
              ></div>
              <h4>Hard</h4>
            </button>
          </div>
        </div>
      )}

      {activeTab === tabs.ADJUST && (
        <div>
          <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <MdLightMode />
            Light
          </h4>
          <label className="block mb-2">Brightness</label>
          <div className="flex items-center mb-4">
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={brightness}
              onChange={(e) => setBrightness(parseFloat(e.target.value))}
              className="w-full h-1 custom-slider"
            />
            <input
              type="number"
              min="0"
              max="2"
              step="0.1"
              value={brightness}
              onChange={(e) => setBrightness(parseFloat(e.target.value))}
              className="ml-2 w-16 text-center border border-gray-300 rounded"
            />
          </div>
          <label className="block mb-2">Contrast</label>
          <div className="flex items-center mb-4">
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={contrast}
              onChange={(e) => setContrast(parseFloat(e.target.value))}
              className="w-full h-1 custom-slider"
            />
            <input
              type="number"
              min="0"
              max="2"
              step="0.1"
              value={contrast}
              onChange={(e) => setContrast(parseFloat(e.target.value))}
              className="ml-2 w-16 text-center border border-gray-300 rounded"
            />
          </div>
          <label className="block mb-2">Highlight</label>
          <div className="flex items-center mb-4">
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={highlight}
              onChange={(e) => setHighlight(parseInt(e.target.value, 10))}
              className="w-full h-1 custom-slider"
            />
            <input
              type="number"
              min="0"
              max="100"
              step="1"
              value={highlight}
              onChange={(e) => setHighlight(parseInt(e.target.value, 10))}
              className="ml-2 w-16 text-center border border-gray-300 rounded"
            />
          </div>
          <label className="block mb-2">Shadow</label>
          <div className="flex items-center mb-4">
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={shadow}
              onChange={(e) => setShadow(parseInt(e.target.value, 10))}
              className="w-full h-1 custom-slider"
            />
            <input
              type="number"
              min="0"
              max="100"
              step="1"
              value={shadow}
              onChange={(e) => setShadow(parseInt(e.target.value, 10))}
              className="ml-2 w-16 text-center border border-gray-300 rounded"
            />
          </div>
          <label className="block mb-2">Whites</label>
          <div className="flex items-center mb-4">
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={whites}
              onChange={(e) => setWhites(parseInt(e.target.value, 10))}
              className="w-full h-1 custom-slider"
            />
            <input
              type="number"
              min="0"
              max="100"
              step="1"
              value={whites}
              onChange={(e) => setWhites(parseInt(e.target.value, 10))}
              className="ml-2 w-16 text-center border border-gray-300 rounded"
            />
          </div>
          <label className="block mb-2">Blacks</label>
          <div className="flex items-center mb-4">
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={blacks}
              onChange={(e) => setBlacks(parseInt(e.target.value, 10))}
              className="w-full h-1 custom-slider"
            />
            <input
              type="number"
              min="0"
              max="100"
              step="1"
              value={blacks}
              onChange={(e) => setBlacks(parseInt(e.target.value, 10))}
              className="ml-2 w-16 text-center border border-gray-300 rounded"
            />
          </div>
          <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <MdTexture />
            Texture
          </h4>
          <label className="block mb-2">Sharpness</label>
          <div className="flex items-center mb-4">
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={sharpness}
              onChange={(e) => setSharpness(parseInt(e.target.value, 10))}
              className="w-full h-1 custom-slider"
            />
            <input
              type="number"
              min="0"
              max="100"
              step="1"
              value={sharpness}
              onChange={(e) => setSharpness(parseInt(e.target.value, 10))}
              className="ml-2 w-16 text-center border border-gray-300 rounded"
            />
          </div>
          <label className="block mb-2">Blur</label>
          <div className="flex items-center mb-4">
            <input
              type="range"
              min="0"
              max="10"
              step="0.1"
              value={blur}
              onChange={(e) => setBlur(parseFloat(e.target.value))}
              className="w-full h-1 custom-slider"
            />
            <input
              type="number"
              min="0"
              max="10"
              step="0.1"
              value={blur}
              onChange={(e) => setBlur(parseFloat(e.target.value))}
              className="ml-2 w-16 text-center border border-gray-300 rounded"
            />
          </div>
          <label className="block mb-2">Invert</label>
          <div className="flex items-center mb-4">
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={invert}
              onChange={(e) => setInvert(parseFloat(e.target.value))}
              className="w-full h-1 custom-slider"
            />
            <input
              type="number"
              min="0"
              max="1"
              step="0.1"
              value={invert}
              onChange={(e) => setInvert(parseFloat(e.target.value))}
              className="ml-2 w-16 text-center border border-gray-300 rounded"
            />
          </div>
          <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <MdColorLens />
            Color
          </h4>
          <label className="block mb-2">Sepia</label>
          <div className="flex items-center mb-4">
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={sepia}
              onChange={(e) => setSepia(parseFloat(e.target.value))}
              className="w-full h-1 custom-slider"
            />
            <input
              type="number"
              min="0"
              max="1"
              step="0.1"
              value={sepia}
              onChange={(e) => setSepia(parseFloat(e.target.value))}
              className="ml-2 w-16 text-center border border-gray-300 rounded"
            />
          </div>
          <label className="block mb-2">Saturation</label>
          <div className="flex items-center mb-4">
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={saturate}
              onChange={(e) => setSaturate(parseFloat(e.target.value))}
              className="w-full h-1 custom-slider"
            />
            <input
              type="number"
              min="0"
              max="2"
              step="0.1"
              value={saturate}
              onChange={(e) => setSaturate(parseFloat(e.target.value))}
              className="ml-2 w-16 text-center border border-gray-300 rounded"
            />
          </div>
          <label className="block mb-2">Hue</label>
          <div className="flex items-center mb-4">
            <input
              type="range"
              min="0"
              max="360"
              step="1"
              value={hueRotate}
              onChange={(e) => setHueRotate(parseInt(e.target.value, 10))}
              className="w-full h-1 custom-slider"
            />
            <input
              type="number"
              min="0"
              max="360"
              step="1"
              value={hueRotate}
              onChange={(e) => setHueRotate(parseInt(e.target.value, 10))}
              className="ml-2 w-16 text-center border border-gray-300 rounded"
            />
          </div>
        </div>
      )}

      {activeTab === tabs.CROP && (
        <div>
          <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <MdAspectRatio />
            Aspect Ratio
          </h4>
          <div className="flex gap-2 border-2 rounded  mb-4">
            {aspectRatios.map(({ label, value }) => (
              <button
                key={label}
                className={`flex-1 py-2 ${aspectRatio === value ? 'border-2 rounded border-blue-300' : ''}`}
                onClick={() => setAspectRatio(value)}
              >
                {label}
              </button>
            ))}
          </div>
          <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <MdCropFree />
            Crop Image
          </h4>
          <button
            className="px-2 py-1 mb-3 border rounded bg-blue-500 text-white"
            onClick={() => setIsCropPopupOpen(true)}
          >
            Crop Image
          </button>
          {isCropPopupOpen && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-4 rounded-lg shadow-lg w-full h-[65%] max-w-lg relative">
                <h4 className="text-lg font-semibold mb-4 flex justify-between items-center">
                  Crop Image
                  <button
                    className="absolute top-4 right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center"
                    onClick={() => setIsCropPopupOpen(false)}
                  >
                    &times;
                  </button>
                </h4>
                <div className="flex justify-center w-full h-[90%]">
                  <ImageCropper
                    imageUrl={imageUrl}
                    onCropped={onCropped}
                    className="opacity-100"
                  // onCropComplete={imageUrl}
                  />
                </div>
                <div className="flex justify-center mt-4">
                </div>
              </div>
            </div>
          )}

          <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <TbBoxAlignLeft />
            Align to Page
          </h4>
          <div className="grid grid-cols-3 gap-2">
            {/* Added buttons for alignment options */}
            <button onClick={() => handleAlignmentChange('top')} className="p-2 bg-gray-200 rounded flex items-center justify-center">
              <CiAlignTop className="mr-1" />Top
            </button>
            <button onClick={() => handleAlignmentChange('left')} className="p-2 bg-gray-200 rounded flex items-center justify-center">
              <CiAlignLeft className="mr-1" />Left
            </button>
            <button onClick={() => handleAlignmentChange('center')} className="p-2 bg-gray-200 rounded flex items-center justify-center">
              <CiAlignCenterV className="mr-1" />Center
            </button>
            <button onClick={() => handleAlignmentChange('middle')} className="p-2 bg-gray-200 rounded flex items-center justify-center">
              <CiAlignCenterH className="mr-1" />Middle
            </button>
            <button onClick={() => handleAlignmentChange('right')} className="p-2 bg-gray-200 rounded flex items-center justify-center">
              <CiAlignRight className="mr-1" />Right
            </button>
            <button onClick={() => handleAlignmentChange('bottom')} className="p-2 bg-gray-200 rounded flex items-center justify-center">
              <CiAlignBottom className="mr-1" />Bottom
            </button>
          </div>

          <button
            onClick={() => handleAspectRatioChange(selectedDiv)}
            className="bg-blue-500 border-2 p-2 mt-3 text-white py-2 rounded-md"
          >
            Apply
          </button>
        </div>
      )
      }
    </div >
  );
}
