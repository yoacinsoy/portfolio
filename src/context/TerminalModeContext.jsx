"use client";

import { createContext, useContext, useEffect, useState } from "react";

const TerminalModeContext = createContext();

export function TerminalModeProvider({ children }) {
  const [terminalMode, setTerminalMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("terminal-mode");
    if (saved) setTerminalMode(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("terminal-mode", JSON.stringify(terminalMode));
  }, [terminalMode]);

  return (
    <TerminalModeContext.Provider value={{ terminalMode, setTerminalMode }}>
      {children}
    </TerminalModeContext.Provider>
  );
}

export function useTerminalMode() {
  return useContext(TerminalModeContext);
}
