import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBBtn,
  MDBCollapse,
  MDBTypography,
} from "mdb-react-ui-kit";
import "./Header.css";

const Header = () => {
  const [showBasic, setShowBasic] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/menu") {
      setActiveTab("Menu");
    } else if (location.pathname === "/about") {
      setActiveTab("About");
    }
  }, [location]);

  return (
    <MDBNavbar expand="lg" fixed="top" light bgColor="warning">
      <MDBContainer fluid>
        <Link to="/">
          <MDBNavbarBrand className="bg-white rounded-pill text-danger px-1">
            Mben&apos;s bakery
          </MDBNavbarBrand>
        </Link>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem className="navb-item">
              <Link to="/">
                <MDBTypography
                  tag="p"
                  active
                  aria-current="page"
                  className={`text-uppercase fs-5 mt-3 mx-2 ${
                    activeTab === "Home" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Home")}
                >
                  Home
                </MDBTypography>
              </Link>
            </MDBNavbarItem>
            <MDBNavbarItem className="navb-item">
              <Link to="/menu">
                <MDBTypography
                  tag="p"
                  className={`text-uppercase fs-5 mt-3 mx-2 ${
                    activeTab === "Menu" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("Menu")}
                >
                  Menu
                </MDBTypography>
              </Link>
            </MDBNavbarItem>

            <MDBNavbarItem className="navb-item">
              <Link to="/about">
                <MDBTypography
                  className={`text-uppercase fs-5 mt-3 mx-2 ${
                    activeTab === "About" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("About")}
                >
                  About Us
                </MDBTypography>
              </Link>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Search Products"
              aria-label="Search"
            />
            <MDBBtn color="danger">Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
