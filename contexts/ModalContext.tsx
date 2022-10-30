import { createContext, ReactNode } from 'react';

export interface ModalContextProps {
  visible: boolean;
  title: string;
  description: ReactNode | JSX.Element | string;
  setVisible: (value: boolean) => void;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
}

export const ModalContext = createContext<ModalContextProps | undefined>(undefined);
