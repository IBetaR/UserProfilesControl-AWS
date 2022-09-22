import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Ibetar - Developments</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/users">Users List</Nav.Link>
            <Nav.Link href="/profile-card">User Card</Nav.Link>
            <Nav.Link href="/users/info">User Panel</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;