import { z } from "zod";
import { create } from "zustand";

export const signUpSchema = z.object({
  nameComplet: z.string().min(3).regex(/\s/, "VALIDATION_FULL_NAME_REQUIRED"),
  password: z.string().min(8),
  email: z.string().email(),
});

export type SignUpSchemaType = z.infer<typeof signUpSchema>;

export interface IVerificationType {
  state: "default" | "success" | "failed" | "pending";
  forms: SignUpSchemaType | undefined;
  error: string;
  code: string;
}

export const useVerificationStore = create<{
  verification: IVerificationType;
  setVerification: (v: IVerificationType) => void;
}>((set) => ({
  verification: { state: "default", error: "", code: "", forms: undefined },
  setVerification: (v) => set({ verification: v }),
}));
