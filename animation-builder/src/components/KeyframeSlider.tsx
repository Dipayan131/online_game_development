import React, { useState, useEffect } from 'react';

interface Keyframe {
  partition: number;
  cssData: { [key: string]: string };
}

interface KeyframeSliderProps {
  handlePartitionClick: (percent: number) => void;
  selectedCategory: { name: string } | null;
}

const KeyframeSlider: React.FC<KeyframeSliderProps> = ({ handlePartitionClick, selectedCategory }) => {
  const [selectedPartition, setSelectedPartition] = useState<number | null>(null);
  const [keyframes, setKeyframes] = useState<Keyframe[]>([]);

  useEffect(() => {
    if (selectedCategory) {
      const storedKeyframes = JSON.parse(localStorage.getItem(selectedCategory.name) || '[]');
      setKeyframes(Array.isArray(storedKeyframes) ? storedKeyframes : []);
    }
  }, [selectedCategory]);

  const handlePartitionSelection = (percent: number) => {
    setSelectedPartition(percent);
  };

  const handleAddCss = () => {
    if (selectedPartition !== null && selectedCategory) {
      const newKeyframes = [...keyframes, { partition: selectedPartition, cssData: {} }];
      setKeyframes(newKeyframes);
      localStorage.setItem(selectedCategory.name, JSON.stringify(newKeyframes));
      handlePartitionClick(selectedPartition);
    }
  };

  const isCssAdded = (percent: number) => {
    return keyframes.some(frame => frame.partition === percent && Object.keys(frame.cssData).length > 0);
  };

  return (
    <div className="keyframe-slider">
      <div className="partitions-container">
        {Array.from({ length: 101 }, (_, i) => i).map((percent) => (
          <div
            className={`partition ${selectedPartition === percent ? 'selected' : ''} ${isCssAdded(percent) ? 'css-added' : ''}`}
            key={percent}
            onClick={() => handlePartitionSelection(percent)}
          >
            {selectedPartition === percent && (
              <div className="popup">
                <button className="css-btn" onClick={handleAddCss}>Add Styles at {percent}%</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyframeSlider;
