import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useGameStore = create(
  devtools((set, get) => ({
    sceneNumber: 0,
    timer: 0,
    result: "Pending",
    gameState: {},
    setTimer: (updateFn) => set((state) => ({ timer: updateFn(state.timer) })),
    updateGameState: (updateFn) =>
      set((state) => ({ gameState: updateFn(state.gameState) })),
    setGameState: (newState) =>
      set((state) => {
        if (
          JSON.stringify(state.gameState) !==
          JSON.stringify({ ...state.gameState, ...newState })
        ) {
          return { gameState: { ...state.gameState, ...newState } };
        }
        return state;
      }),
    nextScene: () => set((state) => ({ sceneNumber: state.sceneNumber + 1 })),
    prevScene: () => set((state) => ({ sceneNumber: state.sceneNumber - 1 })),
    resetScene: () => set({ sceneNumber: 0 }),
    getLatestGameState: () => get().gameState,
  }))
);

export default useGameStore;
