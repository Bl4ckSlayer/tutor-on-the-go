import { signOut } from "firebase/auth";
import { Navbar, Nav, Container } from "react-bootstrap";
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
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/home#services">
                  Services
                </Nav.Link>
                <Nav.Link as={Link} to="/blogs">
                  Blogs
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>

                {user ? (
                  <button onClick={handleSignOut}>Signout</button>
                ) : (
                  <Nav.Link as={Link} to="/login">
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
