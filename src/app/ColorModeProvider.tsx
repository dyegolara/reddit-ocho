"use client";
import React, { useEffect, useState } from "react";
import useColorMode, { ColorMode, LIGHT } from "@/app/useColorMode";

const ThemeContext = React.createContext({
  systemColorMode: LIGHT,
  colorMode: LIGHT,
  // @ts-ignore
  setColorMode: React.Dispatch<React.SetStateAction<ColorMode>>,
});

export const useTheme = () => React.useContext(ThemeContext);

export default function ColorModeProvider({
  children,
  autoDetect = true,
}: {
  children: React.ReactNode;
  autoDetect?: boolean;
}) {
  const systemColorMode = useColorMode();
  const [colorMode, setColorMode] = useState<ColorMode>(systemColorMode);

  useEffect(() => {
    if (autoDetect) setColorMode(systemColorMode);
  }, [systemColorMode, autoDetect]);

  return (
    <body className={`${colorMode}-theme`}>
      <ThemeContext.Provider
        value={{ colorMode, setColorMode, systemColorMode }}
      >
        {children}
      </ThemeContext.Provider>
    </body>
  );
}
