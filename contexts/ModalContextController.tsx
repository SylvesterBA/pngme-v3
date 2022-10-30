import React, { useState, ReactNode } from 'react';
import { ModalContext } from './ModalContext';

export const ModalContextController = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("Title");
  const [description, setDescription] = useState<string | ReactNode>("Description");

  return (
    <ModalContext.Provider
      value={{
        visible,
        setVisible,
        title,
        setTitle,
        description,
        setDescription,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
