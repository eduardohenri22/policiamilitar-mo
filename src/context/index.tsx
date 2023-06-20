import { Children, createContext, useContext, useState } from "react";

export const UserContext = createContext({});

export interface IUser {
  nome: string;
  patente: string;
}

export interface IUserProviders {
  children: React.ReactNode;
}

export const UserProvider = ({ children }: IUserProviders) => {
  const [nome, setNome] = useState<IUser | any>("");

  return (
    <UserContext.Provider value={{ nome, setNome }}>
      {children}
    </UserContext.Provider>
  );
};
