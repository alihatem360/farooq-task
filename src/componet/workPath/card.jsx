import React from "react";
import Card from "react-bootstrap/Card";
const card = ({ title, Body, img }) => {
  return (
    <>
      <Card className="m-3">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <h4 className="py-3">{title}</h4>

          <Card.Text>{Body}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default card;
