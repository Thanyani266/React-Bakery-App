import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import FreshlyBaked from '../assets/Freshly_Baked2.jpg';

const AboutPage = () => {
  return (
    <div>
      <h1 className="fw-bold border text-danger bg-danger bg-opacity-50 rounded mt-5 mb-4">
        About Us
      </h1>
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol md="6">
            <MDBTypography tag="h6" className="text-muted mb-5">
              Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
              consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
              in. This is Photoshop&apos;s version of Lorem Ipsum. Proin gravida
              nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis
              bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
            </MDBTypography>
            <MDBTypography tag="h5">
              <MDBIcon
                fas
                icon="hand-point-right"
                color="danger"
                className="me-1"
              />
              Work with heart
            </MDBTypography>
            <MDBTypography>
              Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
              consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
              in.
            </MDBTypography>
            <MDBTypography tag="h5">
              <MDBIcon
                fas
                icon="hand-point-right"
                color="danger"
                className="me-1"
              />
              Reliable services
            </MDBTypography>
            <MDBTypography>
              Donec vitae sapien ut libero venenatis faucibu. Nullam quis ante.
              Etiam sit amet orci eget eros faucibus tincidunt
            </MDBTypography>
            <MDBTypography tag="h5">
              <MDBIcon
                fas
                icon="hand-point-right"
                color="danger"
                className="me-1"
              />
              Great support
            </MDBTypography>
            <MDBTypography>
              vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
              consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus
              in.
            </MDBTypography>
          </MDBCol>
          <MDBCol md="6">
            <MDBCardImage
              src={FreshlyBaked}
              alt="about-image"
              className="rounded img-fluid w-100"
              fluid
              style={{ maxWidth: "600px" }}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default AboutPage;
