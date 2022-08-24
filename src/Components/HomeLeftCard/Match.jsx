import React, { useState } from "react";
import "./match.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import { GiSouthAfricaFlag } from "react-icons/gi";
import { BsCalendarDate } from "react-icons/bs";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ListGroup from "react-bootstrap/ListGroup";
import { Matches } from "../../data/matches";

const Match = () => {
  const [value, onChange] = useState(new Date());

  console.log("DATE IS", value);
  return (
    <div className="match">
      <Tabs
        defaultActiveKey="home"
        id="uncontrolled-tab-example"
        className="mb-3 "
      >
        <Tab eventKey="home" title="Current">
          <Accordion defaultActiveKey="0" flush>
            {Matches.map((item) => {
              return (
                <Accordion.Item eventKey={item.id}>
                  <Accordion.Header>
                    <span>
                      <GiSouthAfricaFlag />
                      <span>{item.countryName}</span>
                    </span>
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup as="ul">
                      <ListGroup.Item as="li" active>
                        Results
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        {item.match1}
                      </ListGroup.Item>
                      <ListGroup.Item as="li" disabled>
                      {item.match2}
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                      {item.match3}
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </Tab>
        <Tab eventKey="profile" title="Ante Post">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            ad ab, corrupti consequuntur corporis, perferendis qui nostrum porro
            sunt enim, consectetur unde est voluptates placeat fuga totam at
            illo dolore?
          </p>
        </Tab>
        <Tab
          eventKey="contact"
          title={<BsCalendarDate className="calendericon" />}
        >
          <Calendar onChange={onChange} value={value} classNam="calenderin" />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Match;
