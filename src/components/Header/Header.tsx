import "./Header.scss";

import logo from "../../assets/svg/logo.svg";
import Minicart from "../Minicart/Minicart";

function Header() {
  return (
    <div className="containerHeader">
      <div className="contentImageHeader">
        <img className="logoHeader" src={logo} alt="" />
      </div>

      <div className="containerCart">
        <Minicart />
      </div>
    </div>
  );
}

export default Header;
