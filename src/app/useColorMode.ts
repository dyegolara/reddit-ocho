import { useEffect, useState } from "react";

export const LIGHT = "light";
export const DARK = "dark";

export type ColorMode = typeof LIGHT | typeof DARK;

const useColorMode = ({
  autoDetect = true,
}: {
  autoDetect?: boolean;
} = {}): {
  colorMode: ColorMode;
  setColorMode: (colorMode: ColorMode) => void;
  systemColorMode: ColorMode;
} => {
  const [systemColorMode, setSystemColorMode] = useState<ColorMode>(LIGHT);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const changeHandler = () =>
      setSystemColorMode(mediaQuery.matches ? DARK : LIGHT);

    changeHandler(); // Call handler right away so state gets updated with initial value

    mediaQuery.addEventListener("change", changeHandler);

    return () => mediaQuery.removeEventListener("change", changeHandler);
  }, []); // Empty array ensures effect is only run on mount and unmount

  const [colorMode, setColorMode] = useState<ColorMode>(systemColorMode);

  useEffect(() => {
    if (autoDetect) setColorMode(systemColorMode);
  }, [systemColorMode, autoDetect]);

  return {
    colorMode,
    setColorMode,
    systemColorMode,
  };
};

export default useColorMode;
