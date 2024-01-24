import React from 'react'

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import menu from '../../menu-json-api/menu.json';
import company from '../../Company-Details/Company.json'


function Subhead() {
  return (
    <div>
      <h4>Subhead</h4>
    </div>
  )
}

function Mainmenu({ demo }) {
  return (
    <>
      <Link to={demo.link} className={demo.isButton ? "btn btn-primary": "nav-link"}>
      {demo.label}
      </Link>
    </>
  );
}

function DropdownMenu({ demo }) {
  return (
    <>
      <NavDropdown title={demo.label} id="basic-nav-dropdown">
        {
          demo.dropdownMenu.map((data,index)=>{
            return <Mainmenu demo={data} key={index}/>
          })
         }
      </NavDropdown>
    </>
  );
}


function Header() {
  console.log(company);
  return (
    <>
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Link to="/" className='navbar-brand'>
              <img src={company.logo} width={40} className='2' />
              &nbsp;
              {company.name}
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"

              />
            </Form> */}
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                {/* <Link to="/Learn Page" className='nav-link'>Learn</Link>
              <Link to="/Reference Page" className='nav-link'>Reference</Link>
              <Link to="/Community Page" className='nav-link'>Community</Link>
              <Link to="/Blog Page" className='nav-link'>Blog</Link>
              <Link to="/Github Page" className='nav-link'>Github</Link> */}
                {
                  menu.map((item, index) => {
                    //  console.log(item,index)
                    // return <Link to={item.link} key={index} className='nav-link'>{item.label}</Link>
                    if (item.isDropDown) {
                      return <DropdownMenu demo={item} key={index} />
                    }
                    return <Mainmenu demo={item} key={index} />
                  })
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Header;