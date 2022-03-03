import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(null);

  const isAuth = (token) => {
    setAuth(token);
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        isAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
