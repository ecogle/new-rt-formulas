import React from "react";
import "./Body.css";
import { Accordion } from "react-bootstrap";

export default function Body() {
  return (
    <div className="body">
      <div className="body-text">
        <Accordion defaultActiveKey={0}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Item #1</Accordion.Header>
            <Accordion.Body>This is a test of the accordian</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
