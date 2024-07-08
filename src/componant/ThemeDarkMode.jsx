import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDark } from "../hooks/DarkMode";

function ThemeDarkMode() {
  const { isDarkMode, toggleDarkMode } = useDark();
  //   const [isDarkMode, setDarkMode] = useState(false);
  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
    </button>
  );
}

export default ThemeDarkMode;
