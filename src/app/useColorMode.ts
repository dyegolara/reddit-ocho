import { useEffect, useState } from "react";

export const LIGHT = "light";
export const DARK = "dark";

export type ColorMode = typeof LIGHT | typeof DARK;

const useColorMode = (): ColorMode => {
  const [systemColorMode, setSystemColorMode] = useState<ColorMode>(LIGHT);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const changeHandler = () =>
      setSystemColorMode(mediaQuery.matches ? DARK : LIGHT);

    changeHandler(); // Call handler right away so state gets updated with initial value

    mediaQuery.addEventListener("change", changeHandler);

    return () => mediaQuery.removeEventListener("change", changeHandler);
  }, []); // Empty array ensures effect is only run on mount and unmount

  return systemColorMode;
};

export default useColorMode;
