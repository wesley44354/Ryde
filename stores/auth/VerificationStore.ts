import { create } from "zustand";

export interface IVerificationType {
  state: "default" | "success" | "failed" | "pending";
  error: string;
  email: string;
  code: string;
}

export const useVerificationStore = create<{
  verification: IVerificationType;
  setVerification: (v: IVerificationType) => void;
}>((set) => ({
  verification: { state: "default", error: "", code: "", email: "" },
  setVerification: (v) => set({ verification: v }),
}));
