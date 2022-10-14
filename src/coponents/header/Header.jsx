/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import SettingsIcon from "@mui/icons-material/Settings";
import "./header.scss";
const Header = () => {
  const currentLocation = useLocation();
  return (
    <div className="header">
      <div className="logo-container">
        {currentLocation.pathname !== "/" && (
          <Link to="/" data-testid="backbutton">
            <span>
              <ChevronLeftIcon className="icon" />
            </span>
          </Link>
        )}
        <Link to="/" className="logo">
          {" "}
          <div className="logo">Fruit Info</div>
        </Link>
      </div>
      <div className="icon-conatiner">
        <KeyboardVoiceIcon className="icon" data-testid="back-icon" />
        <SettingsIcon className="icon" data-testid="setting" />
      </div>
    </div>
  );
};

export default Header;
