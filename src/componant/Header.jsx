import ThemeDarkMode from "./ThemeDarkMode";

function Header() {
  return (
    <header>
      <h2>Where are You From ?</h2>
      <div className="dark">
        {/* <CiLight /> */}
        <ThemeDarkMode />
      </div>
    </header>
  );
}

export default Header;
