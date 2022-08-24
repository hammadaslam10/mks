import React from "react";
import "./rightside.css";
import ListGroup from "react-bootstrap/ListGroup";
import { Competitions } from "../../data/competition";

const Competition = () => {
  return (
    <div className="competition">
      <ListGroup as="ul">
        <ListGroup.Item as="li" active className="activeheader">
          Competition
        </ListGroup.Item>
        {Competitions.map((item) => {
          return (
            <ListGroup.Item as="li" className="competitiongroup" key={item.id}>
              <span className="competitionlist">{item.name}</span>
              <span className="competitionupdate">{item.status}</span>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Competition;
