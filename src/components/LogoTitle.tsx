import React from "react";
import logo from "../logo.svg";
import { APP_TITLE } from "../config.js";

interface LogoTitleProps {}

const LogoTitle: React.FC<LogoTitleProps> = (props) => {
  return (
    <div className="AppHeaderBody AnimLogoTitle">
      <img src={logo} className="AppLogo" alt="logo" />
      {APP_TITLE}
    </div>
  );
};

export default LogoTitle;
