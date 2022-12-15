import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeAction } from "../redux/actions/themeAction";

export default function useDarkSide() {
  //   const [theme, setTheme] = useState(localStorage.theme);
  const { dark } = useSelector((state) => state);
  console.log("store", dark);
  const [theme, setTheme] = useState(dark);
  const dispatch = useDispatch();
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    // localStorage.setItem("theme", theme);
    dispatch(themeAction());
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
