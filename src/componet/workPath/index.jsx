import React from "react";
import Header from "../../Utility/Header";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "./card";
import Footer from "../../Utility/Footer";
const index = () => {
  return (
    <>
      <Header title={"خطوات العمل"} />
      <CardGroup>
        <Card
          title={"الدعم والمساندة الفنية اثناء العمل"}
          Body={"نقوم بتوفير فريق فني متخصص للدعم والمساندة اثناء العمل"}
          img={"https://picsum.photos/id/1/200/300"}
        />

        <Card
          title={"الدعم والمساندة الفنية اثناء العمل"}
          Body={"نقوم بتوفير فريق فني متخصص للدعم والمساندة اثناء العمل"}
          img={"https://picsum.photos/id/2/200/300"}
        />

        <Card
          title={"مرحلة دراسة الوضع الحالي"}
          Body={"نقوم بتوفير فريق فني متخصص للدعم والمساندة اثناء العمل"}
          img={"https://picsum.photos/id/3/200/300"}
        />

        <Card
          title={"الدعم والمساندة الفنية اثناء العمل"}
          Body={"نقوم بتوفير فريق فني متخصص للدعم والمساندة اثناء العمل"}
          img={"https://picsum.photos/id/4/200/300"}
        />
      </CardGroup>

      <Footer title={" استشارة مجانية تحول الي قائمة تحديد الاختياجات "} />
    </>
  );
};

export default index;
