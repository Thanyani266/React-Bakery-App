import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import cakes from '../assets/cakes-hero.jpg';
import vanilla from '../assets/vanillacup.jpg';
import Breads from '../assets/Mixed-Breads.jpg';
import sidecakeI from '../assets/side-cake1.png';
import sidecakeII from '../assets/side-cake2.png';
import cupcake from '../assets/side-cupcake.png';
import sidepie from '../assets/side-pie1.png';

const MenuPage = () => {
  return (
    <>
      <MDBCarousel showControls dealy={3000} className="mt-5">
        <MDBCarouselItem
          style={{ maxHeight: "450px" }}
          className="w-100 d-block rounded"
          itemId={1}
          src={cakes}
          alt="..."
        />
        <MDBCarouselItem
          style={{ maxHeight: "450px" }}
          className="w-100 d-block rounded"
          itemId={2}
          src={vanilla}
          alt="..."
        />
        <MDBCarouselItem
          style={{ maxHeight: "450px" }}
          className="w-100 d-block rounded"
          itemId={3}
          src={Breads}
          alt="..."
        />
      </MDBCarousel>
      <h1 className="fw-bold border text-danger bg-danger bg-opacity-50 rounded mt-4 mb-4">
        Menu
      </h1>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="4">
            <MDBCardImage
              src={sidecakeI}
              style={{ maxWidth: "400px", marginTop: "8%" }}
              className="img-fluid w-100"
            />
            <MDBCardImage
              src={sidecakeII}
              style={{ maxWidth: "400px" }}
              className="img-fluid w-100 mt-2"
            />
          </MDBCol>
          <MDBCol md="8">
            <MDBCard className="shadow-0 bg-light bg-opacity-50">
              <MDBCardHeader className="fw-bolder text-uppercase fs-4">
                Specialty Cakes
              </MDBCardHeader>
              <MDBCardBody className="bg-secondary bg-opacity-50 text-light rounded mb-1">
                <MDBCardTitle style={{ fontFamily: "cursive" }}>
                  Red Velvet
                </MDBCardTitle>
                <MDBCardText>
                  Light chocolate cake with whipped vanilla icing. Also
                  available with sweet cream cheese icing.
                </MDBCardText>
                <MDBCardText
                  style={{
                    clipPath:
                      "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
                  }}
                  className="bg-danger bg-opacity-75 fw-bolder"
                >
                  R 549.99
                </MDBCardText>
              </MDBCardBody>
              <MDBCardBody
                className="rounded text-dark mb-1"
                style={{ background: "azure", opacity: 0.6 }}
              >
                <MDBCardTitle style={{ fontFamily: "cursive" }}>
                  Confetti
                </MDBCardTitle>
                <MDBCardText>
                  Vanilla cake with confetti sprinkles inside with chocolate and
                  vanilla buttercream.
                </MDBCardText>
                <MDBCardText
                  style={{
                    clipPath:
                      "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
                  }}
                  className="bg-warning bg-opacity-75 fw-bolder"
                >
                  R 409.99
                </MDBCardText>
              </MDBCardBody>
              <MDBCardBody className="bg-secondary bg-opacity-50 text-light rounded mb-1">
                <MDBCardTitle style={{ fontFamily: "cursive" }}>
                  Banana
                </MDBCardTitle>
                <MDBCardText>
                  Moist banana cake with chocolate or caramel meringue
                  buttercream and caramel drizzle.
                </MDBCardText>
                <MDBCardText
                  style={{
                    clipPath:
                      "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
                  }}
                  className="bg-danger bg-opacity-75 fw-bolder"
                >
                  R 96.99
                </MDBCardText>
              </MDBCardBody>
              <MDBCardBody
                className="rounded text-dark"
                style={{ background: "azure", opacity: 0.6 }}
              >
                <MDBCardTitle style={{ fontFamily: "cursive" }}>
                  Devil&apos;s Food
                </MDBCardTitle>
                <MDBCardText>
                  Made with dutch cocoa. Your choice of chocolate, caramel or
                  mocha buttercream or caramel cream cheese icing
                </MDBCardText>
                <MDBCardText
                  style={{
                    clipPath:
                      "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
                  }}
                  className="bg-warning bg-opacity-75 fw-bolder"
                >
                  R 899.99
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol md="8">
            <MDBCard className="bg-light bg-opacity-50 shadow-0">
              <MDBCardHeader className="fw-bolder text-uppercase fs-4">
                Classic cupcakes
              </MDBCardHeader>
              <MDBCardBody className="bg-secondary bg-opacity-50 text-light rounded mb-1">
                <MDBCardTitle style={{ fontFamily: "cursive" }}>
                  Vanilla
                </MDBCardTitle>
                <MDBCardText>
                  12 pack of rich, buttery, old-fashioned cupcakes with a light
                  crumb. Our most popular cupcakes.
                </MDBCardText>
                <MDBCardText
                  style={{
                    clipPath:
                      "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
                  }}
                  className="bg-danger bg-opacity-75 fw-bolder"
                >
                  R 79.99
                </MDBCardText>
              </MDBCardBody>
              <MDBCardBody
                className="rounded text-dark"
                style={{ background: "azure", opacity: 0.6 }}
              >
                <MDBCardTitle style={{ fontFamily: "cursive" }}>
                  Chocolate
                </MDBCardTitle>
                <MDBCardText>
                  12 pack of rich moist cupcakes with a smooth velvety texture
                  and dark chocolate flavour.
                </MDBCardText>
                <MDBCardText
                  style={{
                    clipPath:
                      "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
                  }}
                  className="bg-warning bg-opacity-75 fw-bolder"
                >
                  R 82.99
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <MDBCardImage
              src={cupcake}
              className="rounded img-fluid w-100"
              style={{ maxWidth: "400px", marginTop: "8%" }}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol md="4">
            <MDBCardImage
              src={sidepie}
              style={{ maxWidth: "300px" }}
              className="img-fluid w-100 mt-5"
            />
          </MDBCol>
          <MDBCol md="8">
            <MDBCard className="shadow-0 bg-light bg-opacity-50">
              <MDBCardHeader className="fw-bolder text-uppercase fs-4">
                pies
              </MDBCardHeader>
              <MDBCardBody className="bg-secondary bg-opacity-50 text-light rounded mb-1">
                <MDBCardTitle style={{ fontFamily: "cursive" }}>
                  Apple
                </MDBCardTitle>
                <MDBCardText>
                  Piled high with apples and a touch of cinnamon.
                </MDBCardText>
                <MDBCardText
                  style={{
                    clipPath:
                      "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
                  }}
                  className="bg-danger bg-opacity-75 fw-bolder"
                >
                  R 259.99
                </MDBCardText>
              </MDBCardBody>
              <MDBCardBody
                className="rounded text-dark mb-1"
                style={{ background: "azure", opacity: 0.6 }}
              >
                <MDBCardTitle style={{ fontFamily: "cursive" }}>
                  Apple Crumb
                </MDBCardTitle>
                <MDBCardText>
                  Apple filling with a crumbly sweet topping.
                </MDBCardText>
                <MDBCardText
                  style={{
                    clipPath:
                      "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
                  }}
                  className="bg-warning bg-opacity-75 fw-bolder"
                >
                  R 298.99
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default MenuPage;
