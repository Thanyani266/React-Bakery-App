import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter
      bgColor="light"
      className="text-center text-lg-start text-muted bg-opacity-25 rounded mt-5"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="danger" fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="danger" fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="danger" fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="danger" fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="danger" fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="danger" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="bg-danger text-center rounded-pill text-white fw-bold  mb-4">
                Mben&apos;s bakery
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Bread
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Cakes
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Scones
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Deserts
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Recipes
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon color="danger" icon="home" className="me-2" />
                Dzwerani 266701, RSA
              </p>
              <p>
                <MDBIcon color="danger" icon="envelope" className="me-3" />
                info@mbenisbakery.co.za
              </p>
              <p>
                <MDBIcon color="danger" icon="phone" className="me-3" /> + 27 83
                4567 881
              </p>
              <p>
                <MDBIcon color="danger" icon="print" className="me-3" /> + 27 83
                4567 895
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="text-center text-white bg-danger bg-opacity-50 p-4">
        © 2023 Copyright:
        <a className="fw-bold text-danger" href="https://mdbootstrap.com/">
          Thanyi&apos;s Ghost
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
