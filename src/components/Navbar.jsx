import ToolsIcon from "./ToolsIcon";
import '../style/Navbar.css'
import logo from '../assets/logo_invalnerina.svg'

function Navbar() {
  return (
    <nav className="navbar">
      <ToolsIcon />
      <img src={logo} alt="Logo" style={{ height: "32px", width: "auto", maxWidth: "100px" }} />
    </nav>
  );
}

export default Navbar;