import { create } from "zustand";

type UseTestTypeStore = {
  isNewTest: boolean;
  setIsNewTest: (value: boolean) => void;
};

const useTestType = create<UseTestTypeStore>((set) => ({
  isNewTest: true,
  setIsNewTest: (value) => set({ isNewTest: value }),
}));

export default useTestType;
