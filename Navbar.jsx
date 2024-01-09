import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const NavBar = () => {

    const handleAddCount = useSelector(state => state.cart);
    return (<>
        <Navbar expand="lg" className="bg-body-tertiary nav-container">
            <Container fluid>
                <Navbar.Brand href="#">Redux ToolKit</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Nav>
                    <Nav.Link to="/" as={Link}>Products</Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Navbar.Text>
                        <Nav.Link to="/cart" as={Link}>My Bag {handleAddCount.length}</Nav.Link>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </>
    )
}
export default NavBar;