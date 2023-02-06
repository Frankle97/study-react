import React from 'react';
import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";

interface TextStore {
  fontSize: number;
  increaseFontSize: () => void;
  trigger: boolean;
  toggleTrigger: () => void;
}

const useStore = create<TextStore>()((set) => ({
  fontSize: 12,
  increaseFontSize: () => set((state) => ({fontSize: state.fontSize + 6})),
  trigger: false,
  toggleTrigger: () => set((state) => ({trigger: !state.trigger})),
}));

const TextComponent = () => {
  const [fontSize, increaseFontSize] = useStore((state) => [
    state.fontSize,
    state.increaseFontSize
  ]);
  return (
    <div>
      <p style={{fontSize}}>
        으라차차
        <button onClick={increaseFontSize}>
          올려
        </button>
      </p>
    </div>
  );
};

export default TextComponent;
