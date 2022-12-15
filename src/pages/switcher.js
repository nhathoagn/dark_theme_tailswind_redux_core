import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hook/useDarkSide";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();

  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );
  console.log("colorTheme", colorTheme);
  console.log("darkSide", darkSide);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div className="m-16 flex flex-col items-center">
        <DarkModeSwitch
          style={{ marginBottom: "2rem" }}
          checked={darkSide}
          onChange={toggleDarkMode}
          size={30}
        />
        <h3 className="text-gray-800 dark:text-gray-300 pt-4">
          {colorTheme === "light" ? "Dark mode" : "Light mode"}
        </h3>
      </div>
    </>
  );
}
