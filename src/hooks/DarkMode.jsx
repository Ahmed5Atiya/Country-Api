import { createContext, useContext, useEffect } from "react";
import useLocalStorageState from "./useLocalStorageState";

const DarkContext = createContext();

function DarkMode({ children }) {
  const [isDarkMode, setDarkMode] = useLocalStorageState(false, "isDarkMode");

  function toggleDarkMode() {
    setDarkMode((isDarkMode) => !isDarkMode);
  }

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    },
    [isDarkMode]
  );
  return (
    <DarkContext.Provider value={{ isDarkMode, toggleDarkMode, setDarkMode }}>
      {children}
    </DarkContext.Provider>
  );
}

function useDark() {
  const context = useContext(DarkContext);
  if (context === undefined) throw new Error("use is outside ");
  return context;
}
export { DarkMode, useDark };
