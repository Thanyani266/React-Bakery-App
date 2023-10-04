import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBTypography,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
} from "mdb-react-ui-kit";

const FeaturedSpecials = () => {
  return (
    <MDBCard className="shadow-0 bg-light bg-opacity-75 md-12 mt-5">
      <MDBCardHeader className="fw-bold display-6">
        Featured Specials
      </MDBCardHeader>
      <MDBCardBody>
        <MDBTypography blockquote className="mb-0">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="6" className="mb-3">
                <MDBCard className="bg-warning bg-opacity-25">
                  <MDBCardImage
                    src="/madeiracake.webp"
                    position="top"
                    alt="madeira cake"
                    style={{ maxHeight: "350px" }}
                  />
                  <MDBCardBody style={{ height: "300px" }}>
                    <MDBCardTitle>Plain Madeira Cake 350g</MDBCardTitle>
                    <MDBCardText>
                      Our bakery offers bread, rolls, French loaves and so much
                      more, these fresh bakes are made with the finest
                      ingredients and are of the highest quality.
                    </MDBCardText>
                    <MDBCardText
                      style={{
                        clipPath:
                          "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
                        textDecoration: "line-through",
                      }}
                      className="bg-secondary text-white"
                    >
                      Was R 26.99
                    </MDBCardText>
                    <MDBCardText
                      style={{
                        clipPath:
                          "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",
                      }}
                      className="bg-warning text-white"
                    >
                      Now R 24.99
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="6" className="mb-3">
                <MDBCard className="bg-warning bg-opacity-25">
                  <MDBCardImage
                    src="/monastry.webp"
                    position="top"
                    alt="madeira cake"
                    style={{ maxHeight: "350px" }}
                  />
                  <MDBCardBody style={{ height: "300px" }}>
                    <MDBCardTitle>Monastry Rolls 6 Pack</MDBCardTitle>
                    <MDBCardText>
                      Pack more flavour into your shopping cart with monastry
                      rolls that pack heaps of flavour into every bite.
                    </MDBCardText>
                    <MDBCardText
                      style={{
                        clipPath:
                          "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
                        textDecoration: "line-through",
                      }}
                      className="bg-secondary text-white mt-5"
                    >
                      Was R 32.99
                    </MDBCardText>
                    <MDBCardText
                      style={{
                        clipPath:
                          "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",
                      }}
                      className="bg-warning text-white"
                    >
                      Now R 29.99
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <div className="w-100"></div>
              <MDBCol md="6" className="mb-3">
                <MDBCard className="bg-warning bg-opacity-25">
                  <MDBCardImage
                    src="/chocolatecake.webp"
                    position="top"
                    alt="madeira cake"
                    style={{ maxHeight: "350px" }}
                  />
                  <MDBCardBody style={{ height: "300px" }}>
                    <MDBCardTitle>Rocky Road Chocolate Cake</MDBCardTitle>
                    <MDBCardText>
                      Freshly baked chocolate cake with delicious toppings.
                    </MDBCardText>
                    <MDBCardText
                      style={{
                        clipPath:
                          "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
                        textDecoration: "line-through",
                      }}
                      className="bg-secondary text-white mt-5"
                    >
                      Was R 32.99
                    </MDBCardText>
                    <MDBCardText
                      style={{
                        clipPath:
                          "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",
                      }}
                      className="bg-warning text-white"
                    >
                      Now R 29.99
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="6" className="mb-3">
                <MDBCard className="bg-warning bg-opacity-25">
                  <MDBCardImage
                    src="/queencakes.webp"
                    position="top"
                    alt="madeira cake"
                    style={{ maxHeight: "350px" }}
                  />
                  <MDBCardBody style={{ height: "300px" }}>
                    <MDBCardTitle>Queen Cakes 10 Pack</MDBCardTitle>
                    <MDBCardText>
                      Queen cakes are a dessert cake prepared with typical cake
                      ingredients and top it with all your favourite icings.
                    </MDBCardText>
                    <MDBCardText
                      style={{
                        clipPath:
                          "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
                        textDecoration: "line-through",
                      }}
                      className="bg-secondary text-white"
                    >
                      Was R 33.99
                    </MDBCardText>
                    <MDBCardText
                      style={{
                        clipPath:
                          "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",
                      }}
                      className="bg-warning text-white"
                    >
                      Now R 29.99
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBTypography>
      </MDBCardBody>
    </MDBCard>
  );
};

export default FeaturedSpecials;
