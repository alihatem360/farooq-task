import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Accordion from "react-bootstrap/Accordion";

const AccordionItemcustom = ({ eventKey, header }) => {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{header}</Accordion.Header>
      <Accordion.Body>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default AccordionItemcustom;
