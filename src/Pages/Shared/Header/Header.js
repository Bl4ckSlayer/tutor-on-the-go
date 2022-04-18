import { signOut } from "firebase/auth";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import AllFunctions from "../../../Hooks/AllFunctions";
import logo from "../../../Images/logo.png";

const Header = () => {
  const [user] = useAuthState(auth);
  const [
    cart,
    setCart,
    addToCart,
    addToPackage,
    DeleteItem,
    emptyCart,
    emptyPackage,
  ] = AllFunctions();
  const handleSignOut = () => {
    emptyCart();
    signOut(auth);
  };
  console.log(user);
  return (
    <div>
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          sticky="top"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src={logo} height={50} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  className="fw-bolder text-white fs-5"
                  as={Link}
                  to="/services"
                >
                  Services
                </Nav.Link>
                <Nav.Link
                  className="fw-bolder text-white fs-5"
                  as={Link}
                  to="/blogs"
                >
                  Blogs
                </Nav.Link>
                <Nav.Link
                  className="fw-bolder text-white fs-5"
                  as={Link}
                  to="/about"
                >
                  About
                </Nav.Link>
              </Nav>
              <Nav>
                {user ? (
                  <h2 className="fw-bolder text-white mt-2 mx-2 fs-5 ">
                    {user.displayName}
                  </h2>
                ) : (
                  ""
                )}

                {user ? (
                  <Button
                    className="fw-bolder text-white fs-5 btn-warning"
                    onClick={handleSignOut}
                  >
                    Signout
                  </Button>
                ) : (
                  <Nav.Link
                    className="fw-bolder text-white fs-5"
                    as={Link}
                    to="/login"
                  >
                    Login
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
