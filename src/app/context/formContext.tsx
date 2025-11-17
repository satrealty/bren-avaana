// context/FormContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import dynamic from "next/dynamic";

const Popup =dynamic(()=>import("@/components/ui/popup"),{
  ssr:false,
})

type FormContextType = {
  openForm: (content: ReactNode, title?: string) => void;
  closeForm: () => void;
};

const FormContext = createContext<FormContextType | null>(null);

export function useFormContext() {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("useFormContext must be used inside FormProvider");
  return ctx;
}

export function FormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formContent, setFormContent] = useState<ReactNode>(null);
  const [title, setTitle] = useState<string | undefined>(undefined);

  const openForm = (content: ReactNode, popupTitle?: string) => {
    setFormContent(content);
    setTitle(popupTitle);
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
    setFormContent(null);
    setTitle(undefined);
  };

  return (
    <FormContext.Provider value={{ openForm, closeForm }}>
      {children}

      <Popup open={isOpen} onClose={closeForm} title={title}>
        {formContent}
      </Popup>
    </FormContext.Provider>
  );
}
