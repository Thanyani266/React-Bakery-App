import { Link } from "react-router-dom";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBRow,
  MDBContainer,
  MDBCol,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";

const Carousel = () => {
  return (
    <MDBCarousel dark fade className="mt-5">
      <MDBCarouselItem
        className="w-100 d-block rounded"
        itemId={1}
        src="/bakery5.jpg"
        alt="hero section"
      >
        <MDBContainer>
          <MDBRow>
            <MDBCol center style={{ marginBottom: "20%" }}>
              <MDBTypography
                tag="h2"
                className="display-4 fw-bolder text-danger"
                style={{ textShadow: "2px 2px #fff" }}
              >
                A Symphony of Flour, Yeast, and Love: The Artisan Bakery
                Masterpiece
              </MDBTypography>
              <Link to="/menu">
                <MDBBtn className="btn-lg fs-4 btn-warning">
                  Check our Menu
                </MDBBtn>
              </Link>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBCarouselItem>
    </MDBCarousel>
  );
};

export default Carousel;
