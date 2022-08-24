import React from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { FcAlarmClock, FcBookmark } from "react-icons/fc";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaHorseHead } from "react-icons/fa";

const TopMenu = () => {
  return (
    <React.Fragment>
      <div className="TopMenu">
        <Container>
          <Navbar expand="lg" >
            <Container className="containerforflex"></Container>
            <span className="spanforflex">
            <span className="firstop">
              <div className="time">
                <FcAlarmClock className="icon" />
                <p>NextRace</p>
              </div>
              <div className="subscribe">
                <FcBookmark className="icon" />
                <br />
                <p>Subscribe</p>
              </div>
            </span>
            <span className="sectop">
              <div className="Account">
                <RiAccountCircleLine className="iconacc" />
                <br />
                <p>MyAccount</p>
              </div>
              <div className="Tracker">
                <FaHorseHead className="icon" />
                <br />
                <p>Tracker</p>
              </div>

              <select className="lang">
                <option value="English">en</option>
                <option value="Arabic">ar</option>
              </select>
            </span>
            </span>
          </Navbar>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default TopMenu;
