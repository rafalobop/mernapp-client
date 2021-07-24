import { useState, createContext } from 'react';

export const AuthContext = createContext();

export default function AuthProvider(props) {
  const [user, setUser] = useState(null);

  const isLogin = (userCredentials) => setUser({ id: 1, role: 'user' });
  const isLogout = () => setUser(null);

  const isLogged = () => !!user;
  const hasRole = (role) => user?.role === role;

  const contextValue = {
    user,
    isLogged,
    hasRole,
    isLogin,
    isLogout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}
