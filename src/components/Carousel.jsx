import { Link } from "react-router-dom";
import {
  MDBRow,
  MDBContainer,
  MDBCol,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import Bakery5 from '../assets/bakery5.jpg';

const Carousel = () => {
  return (
    <div className='bg-image mt-5'>
      <img
        className="w-100 img-fluid rounded"
        src={Bakery5}
        alt="hero section"
      />
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
        <MDBContainer>
          <MDBRow>
            <MDBCol center style={{ marginBottom: "20%" }}>
              <MDBTypography
                tag="h2"
                className="display-4 fw-bolder carousel-heading"
              >
                A Symphony of Flour, Yeast, and Love: The Artisan Bakery
                Masterpiece
              </MDBTypography>
              <Link to="/menu">
                <MDBBtn className="btn-lg btn-warning carousel-btn">
                  Check our Menu
                </MDBBtn>
              </Link>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
