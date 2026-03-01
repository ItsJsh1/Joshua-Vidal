import { createContext, useContext, useState } from "react";

// createContext makes a "channel" that components can tune into
const ThemeContext = createContext();

// This is a wrapper component — it wraps your whole app
// and provides the dark mode state to everyone inside
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => setIsDark(prev => !prev);

  return (
    // We "broadcast" isDark and toggleDark to all children
    <ThemeContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

// This is a shortcut hook — instead of writing useContext(ThemeContext)
// every time, you just write useTheme()
export function useTheme() {
  return useContext(ThemeContext);
}