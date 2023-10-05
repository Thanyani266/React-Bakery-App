import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import meal from '../assets/food-bread-meal-toast.png';

const HomeCard = () => {
  return (
    <MDBCard className="bg-light bg-opacity-75 py-5 mt-5">
      <MDBRow className="g-0">
        <MDBCol md="7">
          <MDBCardImage
            src={meal}
            alt="food-bread-meal-toast"
            className='img-fluid w-100'
          />
        </MDBCol>
        <MDBCol md="5">
          <MDBCardBody style={{ marginTop: "15%" }}>
            <MDBCardTitle className="fs-4 fw-bold" style={{textShadow: '2px 2px #E4A11B'}}>Flavorful Cakes</MDBCardTitle>
            <MDBCardText className="fs-5 text-secondary">
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
