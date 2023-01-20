import style from "./styles/Navbar.module.css";

const openBracket = "{"
const closeBracket = "}"

function Navbar() {
  return (
    <div className="d-none d-md-block">
      <div className={style.links}>
        <ul>
          <a href="#skills">
            <li>{openBracket} Skills {closeBracket}</li>
          </a>
          <a href="#projects">
            <li>{openBracket} Projects {closeBracket}</li>
          </a>
          <a href="#me">
            <li>{openBracket} Me {closeBracket}</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
