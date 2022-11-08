import { Button } from "bootstrap";
import React from "react";
import { Navbar, Nav, Container, FormControl } from "react-bootstrap";
// import logo from "../../images/logo.png";
// import login from "../../images/login.png";
// import cart from "../../images/cart.png";
// import { Link } from "react-router-dom";

import Dropdown from "./Dropdown";
const NavBarLogin = () => {
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Dropdown
              title={"من نحن"}
              items={["الهيكل التنظيمي ", "عن الشركة"]}
            />

            <Nav.Item>
              <Nav.Link href="#">احسب موقعك بنفسك</Nav.Link>
            </Nav.Item>
            <Dropdown
              title={"حلولنا للتحول الرقمي"}
              items={["الهيكل التنظيمي ", "عن الشركة"]}
            />

            <Dropdown
              title={"استشارات"}
              items={[
                "اطلب استشارة ",
                "جميع الاستشارات",
                "البحث في الاستيشارات من خلال الكلمات",
                "البحث",
              ]}
            />

            <Nav.Item>
              <Nav.Link href="#">الاسئلة الشائعة</Nav.Link>
            </Nav.Item>

            <Dropdown
              title={"تواصل معنا"}
              items={[
                "طلب و كالة ",
                "طلب توظيف ",
                "طلب حلول رقمية ",
                "طلب انظمة و برامج ",
                "شكوي / مقترح",
              ]}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
