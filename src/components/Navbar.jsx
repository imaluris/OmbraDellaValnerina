import ToolsIcon from "./ToolsIcon";
import '../style/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <ToolsIcon />
      <img src="src/assets/logo_invalnerina.svg" alt="Logo" style={{ height: "32px"}} />
    </nav>
  );
}

export default Navbar;