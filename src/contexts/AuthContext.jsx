import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

const TOKEN_KEY = "devtrack_token";
const USER_KEY = "devtrack_user";

function sanitizeInput(value) {
  return value.trim().replace(/[<>]/g, "");
}

export function AuthProvider({ children }) {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedToken = sessionStorage.getItem(TOKEN_KEY);
    const savedUser = sessionStorage.getItem(USER_KEY);

    if (savedToken) setToken(savedToken);
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        sessionStorage.removeItem(USER_KEY);
      }
    }
  }, []);

  const login = ({ email, password }) => {
    const cleanEmail = sanitizeInput(email).toLowerCase();
    const cleanPassword = sanitizeInput(password);

    if (!cleanEmail || !cleanPassword) {
      return { success: false, message: "Email and password are required." };
    }

    if (!cleanEmail.includes("@")) {
      return { success: false, message: "Enter a valid email address." };
    }

    if (cleanPassword.length < 6) {
      return { success: false, message: "Password must be at least 6 characters." };
    }

    const fakeToken = `jwt-demo-${Date.now()}`;
    const authUser = {
      email: cleanEmail,
      name: cleanEmail.split("@")[0],
    };

    sessionStorage.setItem(TOKEN_KEY, fakeToken);
    sessionStorage.setItem(USER_KEY, JSON.stringify(authUser));

    setToken(fakeToken);
    setUser(authUser);

    return { success: true };
  };

  const register = ({ name, email, password, confirmPassword }) => {
    const cleanName = sanitizeInput(name);
    const cleanEmail = sanitizeInput(email).toLowerCase();
    const cleanPassword = sanitizeInput(password);
    const cleanConfirm = sanitizeInput(confirmPassword);

    if (!cleanName || !cleanEmail || !cleanPassword || !cleanConfirm) {
      return { success: false, message: "All fields are required." };
    }

    if (!cleanEmail.includes("@")) {
      return { success: false, message: "Enter a valid email address." };
    }

    if (cleanPassword.length < 6) {
      return { success: false, message: "Password must be at least 6 characters." };
    }

    if (cleanPassword !== cleanConfirm) {
      return { success: false, message: "Passwords do not match." };
    }

    const fakeToken = `jwt-demo-${Date.now()}`;
    const authUser = {
      email: cleanEmail,
      name: cleanName,
    };

    sessionStorage.setItem(TOKEN_KEY, fakeToken);
    sessionStorage.setItem(USER_KEY, JSON.stringify(authUser));

    setToken(fakeToken);
    setUser(authUser);

    return { success: true };
  };

  const logout = () => {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(USER_KEY);
    setToken("");
    setUser(null);
  };

  const value = useMemo(
    () => ({
      token,
      user,
      isAuthenticated: Boolean(token),
      login,
      register,
      logout,
    }),
    [token, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}