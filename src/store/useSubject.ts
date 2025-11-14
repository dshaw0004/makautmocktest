import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type UseSubjectStoreType = {
  subject: string;
  setSubject: (subject: string) => void;
};
const useSubjectStore = create<UseSubjectStoreType>((set) => ({
  subject: "",
  setSubject: (subject) => set({ subject }),
}));

export default useSubjectStore;

interface SubjectWithCode {
  subject: string;
  subcode: string;
}
type NewSubjectStore = {
  subjects: SubjectWithCode[];
  currentSubject: SubjectWithCode;
  setSubjects: (subject: SubjectWithCode[]) => void;
  setCurrentSubject: (subject: SubjectWithCode) => void;
  clearCurrentSubject: () => void;
};

export const useSubjects = create<NewSubjectStore>()(
  persist(
    (set) => ({
      currentSubject: {
        subject: "",
        subcode: "",
      },
      subjects: [],
      setSubjects: (subject: SubjectWithCode[]) => set({ subjects: subject }),
      setCurrentSubject: (subject: SubjectWithCode) =>
        set({ currentSubject: subject }),
      clearCurrentSubject: () =>
        set({ currentSubject: { subject: "", subcode: "" } }),
    }),
    {
      name: "subject-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // sessionStorage or localStorage
      version: 0,
    },
  ),
);
