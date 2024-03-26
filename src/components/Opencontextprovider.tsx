import { ReactNode, useState, Dispatch, SetStateAction, createContext } from "react";

type Functiontypes = {
  children: ReactNode;
};

type Opencontexttype = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const Opencontext = createContext<Opencontexttype>({ isOpen: false, setIsOpen: () => {} });

export function OpenContextProvider({ children }: Functiontypes) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Opencontext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </Opencontext.Provider>
  );
}
