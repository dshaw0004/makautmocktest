import { create } from "zustand";

export type UseSubjectStoreType = {
        subject: string;
        setSubject: (subject: string) => void;
};
const useSubjectStore = create<UseSubjectStoreType>((set) => ({
        subject: "",
        setSubject: (subject) => set({ subject }),
}));

export default useSubjectStore;
