import * as React from 'react';
import { MdOutlineDesignServices, MdAnimation, MdLayers, MdEvent, MdPanToolAlt } from 'react-icons/md';

interface Props {
  onClick: (activePanel: string) => void;
}

export default function ButtonsPanel({ onClick }: Props) {
  const SIZE = 25;
  const COLOR = '#8b3dff';

  return (
    <div className="absolute z-[2000] right-0 bg-white text-black flex flex-col gap-2 p-1 top-[50%] translate-y-[-50%] rounded-xl shadow-xl">
      <button onClick={() => onClick('styles')}>
        <MdOutlineDesignServices title="Edit Panel" size={SIZE} color={COLOR} />
      </button>
      <button onClick={() => onClick('animations')}>
        <MdAnimation size={SIZE} title="Animation Panel" color={COLOR} />
      </button>
      <button onClick={() => onClick('layers')}>
        <MdLayers size={SIZE} color={COLOR} />
      </button>
      <button onClick={() => onClick('events')}>
        <MdPanToolAlt size={SIZE} color={COLOR}/>
      </button>
      
    </div>
  );
}
