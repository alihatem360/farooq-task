import Carousel from "react-bootstrap/Carousel";
import CarouselImage from "../../images/lee-campbell-DtDlVpy-vvQ-unsplash.jpg";
import CarouselImage2 from "../../images/christopher-gower-m_HRfLhgABo-unsplash.jpg";
import CarouselImage3 from "../../images/sergey-zolkin-_UeY8aTI6d0-unsplash.jpg";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item interval={100000000000000000}>
        <img className="d-block w-100" src={CarouselImage3} alt="First slide" />
        <Carousel.Caption>
          <h3 className="">
            ندرس احتياجاتك ونوظف تكنولوجيا المعلومات والإدارة بناء على
            استراتيجيات عملك لابتكار حلول رقمية تخلق فرصاً جديد تحقق نتائجك
            المستهدفة
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100000000000000000}>
        <img
          className="d-block w-100"
          src={CarouselImage2}
          alt="Second slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={100000000000000000}>
        <img className="d-block w-100" src={CarouselImage} alt="Third slide" />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
