import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Accordion from "react-bootstrap/Accordion";
import Header from "../../Utility/Header";
import AccordionItemcustom from "./AccordionItemcustom";
import Footer from "../../Utility/Footer";
const ConToDig = () => {
  return (
    <>
      <Header title={"حلولنا للتحول الرقمي"} />
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>خدماتنا الرقمية</Card.Title>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>التحول الرقمي</Accordion.Header>
                <Accordion.Body>
                  <Accordion defaultActiveKey="0">
                    <AccordionItemcustom
                      eventKey="0"
                      header="مواقع ومنصات الكترونية"
                    />
                    <AccordionItemcustom
                      eventKey="1"
                      header="تطبيقات الهاتف الذكي"
                    />
                    <AccordionItemcustom eventKey={"2"} header={"استضافة"} />
                  </Accordion>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>المحتوي الرقمي</Accordion.Header>
                <Accordion.Body>
                  <Accordion defaultActiveKey="0">
                    <AccordionItemcustom
                      eventKey="0"
                      header="انفوجرافيك ونوشن جرافيك"
                    />
                    <AccordionItemcustom
                      eventKey="1"
                      header="تطبيقات الهاتف الذكي"
                    />
                    <AccordionItemcustom
                      eventKey={"2"}
                      header={"الهوية البصرية"}
                    />
                    <AccordionItemcustom
                      eventKey={"3"}
                      header={"كتابة المحتوي"}
                    />
                  </Accordion>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>التسويق الرقمي</Accordion.Header>
                <Accordion.Body>
                  <Accordion defaultActiveKey="0">
                    <AccordionItemcustom
                      eventKey="0"
                      header="التسويق عبر الانترنت"
                    />
                    <AccordionItemcustom
                      eventKey="1"
                      header="التسويق عبر السوشيال ميديا"
                    />
                    <AccordionItemcustom
                      eventKey={"2"}
                      header={"التسويق عبر البريد الالكتروني"}
                    />
                  </Accordion>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion />
              <Accordion.Body />
            </Accordion>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>أنظمة تارجت الرقمية</Card.Title>
            <Accordion defaultActiveKey="0">
              <AccordionItemcustom eventKey="0" header="التجارة الرقمية " />
              <AccordionItemcustom eventKey="1" header="اإلدارة اإللكترونية" />
              <AccordionItemcustom
                eventKey="2"
                header="بيانات تارجت الرقمية "
              />
              <AccordionItemcustom eventKey="3" header="الفاتورة الرقمية" />
            </Accordion>
          </Card.Body>
        </Card>
      </CardGroup>
      <Footer title={"استشارة مجانية إلنشاءتظامك/ برنامجك الخاص"} />
    </>
  );
};

export default ConToDig;
