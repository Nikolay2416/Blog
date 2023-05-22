import {Link} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import i from "../../assets/i.jpg";

const Header = () => {
  return (
    <div className="bg-secondary">
      {[false].map((expand) => (
        <Navbar key={expand} bg="secondary" expand={expand} className="mb-3 col-sm-9 m-auto">
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="navbar-dark"/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <div className="w-50 m-auto mb-2">
                    <img src={i} alt="avatarPost" className="w-100 rounded"/>
                  </div>
                  <p className="w-50 m-auto">Николай</p>
                  <p className="w-50 m-auto mb-5">kolyaa2010@mail.ru</p>
                  <Link to="/" className="text-decoration-none text-dark m-2 border-bottom w-50 m-auto mb-3">Список постов</Link>
                  <Link to="/AboutMePage" className="text-decoration-none text-dark m-2 border-bottom w-50 m-auto">Обо мне</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Navbar.Brand><Link to="/" className="text-decoration-none text-white">Blog</Link></Navbar.Brand>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;