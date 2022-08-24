import React,{useState} from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaHome,FaSearch} from 'react-icons/fa'

const NavMenu = () => {
  const [open,setOpen] = useState(true)

  const handleSearch = () => {
    setOpen(!open)
  }
  return (
    <React.Fragment>
        <div className='NavMenu'>
        <Navbar expand="lg" variant="dark">
    <Container className='Nav '>
     
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto" >
        <Navbar.Brand href="#home"><FaHome className='homeicon'/> </Navbar.Brand>
          <NavDropdown title="ABOUT" id="basic-nav-dropdown " >
            <NavDropdown.Item href="#" >Action</NavDropdown.Item>
            <NavDropdown.Item href="#">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
           <NavDropdown title="STATISTICS" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Item href="#">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>  
          <NavDropdown title="RACE CARD" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Item href="#">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="RESULTS" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
           <NavDropdown title="RACE COURSE" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="COMPETITION" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="SPONSORS" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
     
        </Nav>
        
      </Navbar.Collapse>
      {
        open? <> <FaSearch style ={{color :'white'}} onClick={handleSearch}/></> :
         <>
          <span>
            <input type='text' placeholder='Search'/>
            </span><FaSearch style ={{color :'white'}} onClick={handleSearch}/>
          </>
      }
     
    </Container>
   
  </Navbar>
        </div>
    </React.Fragment>
  )
}

export default NavMenu
