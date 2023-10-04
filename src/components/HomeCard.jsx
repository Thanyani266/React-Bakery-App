import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const HomeCard = () => {
  return (
    <MDBCard className="bg-light bg-opacity-75 py-5 mt-5">
      <MDBRow className="g-0">
        <MDBCol md="8">
          <MDBCardImage
            src="./food-bread-meal-toast.png"
            alt="food-bread-meal-toast"
            fluid
          />
        </MDBCol>
        <MDBCol md="4">
          <MDBCardBody style={{ marginTop: "15%" }}>
            <MDBCardTitle className="fs-4">Flavorful Cakes</MDBCardTitle>
            <MDBCardText className="fs-5">
              Our cakes are full of flavor and they go great with just about
              anything. You will have few cakes with coffee, as an appetiser, as
              a snack in front of a TV or as a low carlorie treat. We are
              developing new recipes and always searching for new bold flavors.
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
};

export default HomeCard;
