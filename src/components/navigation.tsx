import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavMenu() {
  return (
    <Navbar bg='light' variant='light'>
      <Nav className="mr-auto">

        <Nav.Link as={Link} to="/users" href="/users">
          Users
        </Nav.Link>

        <Nav.Link as={Link} to="/projects" href="/projects">
          Projects
        </Nav.Link>
        <Nav.Link as={Link} to="/meetings" href="/meetings">
          Meetings
        </Nav.Link>
        <Nav.Link as={Link} to="/leaves" href="/leaves">
          Leaves
        </Nav.Link>
        <Nav.Link as={Link} to="/rooms" href="/rooms">
          Rooms
        </Nav.Link>
      </Nav>
      {/* <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-primary">Search</Button>
      </Form> */}
    </Navbar>





  )
}


/*
 <Navbar bg="light" expand="lg">
 <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

          <Nav.Link href="/users">Users</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/meetings">Meetings</Nav.Link>
         <Nav.Link href="/leaves">Leaves</Nav.Link>
          <Nav.Link href="/rooms">Rooms</Nav.Link>

        </Nav>

      </Navbar.Collapse>
    </Navbar>



<Navbar>
      <Nav.Link href="/users">
        Users
      </Nav.Link>
      <Nav.Link href="/projects">
        Projects
      </Nav.Link>
      <Nav.Link href="/meetings">
        Meetings
      </Nav.Link>
      <Nav.Link href="/leaves">
        Leaves
      </Nav.Link>
      <Nav.Link href="/rooms">
        Rooms
      </Nav.Link>
    </Navbar>

*/