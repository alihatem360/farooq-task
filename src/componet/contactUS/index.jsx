import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const ContactUs = () => {
  const titles = [
    "محادثة فوورية",
    "البريد الالكتروني",
    "الهاتف",
    "العنوان",
    "الموقع الالكتروني",
    "الوسائل الاجتماعية",
  ];
  return (
    <div className="contactUs">
      <Container>
        <Row xs={1} md={2} className="g-4 justify-content-md-center">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>{titles[idx]}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row xs={1} md={2} className="g-4 justify-content-md-center my-3">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>تواصل معنا </Card.Title>
                <Card.Text>
                  <ul>
                    <li> طلب وكالة </li>
                    <li>طلب وكالة </li>
                    <li>طلب مووقع/ تطبيق </li>
                    <li>طلب تسويق الكتروني </li>
                    <li>طلب إنشاء محتوى وهوية بصرية </li>
                    <li>طلب إنشاء محتوى وهوية</li>
                    <li>طلب أنظمة خاصة</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
