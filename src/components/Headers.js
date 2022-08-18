import React from 'react';
import { Link } from "react-router-dom";
import { NavDropdown } from '@themesberg/react-bootstrap';

class Header extends React.Component {

  constructor(props) {
    super(props)

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.state = {
        show: false
    }
  }

  onMouseEnter() {
    this.setState({ show: true })
  }

  onMouseLeave() {
    this.setState({ show: false })
  }

    render () {
        return (
                <div class="hero_area">
    {/* <!-- NAVBAR
    ================================================== --> */}
   
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        {/* <!-- Brand --> */}
        <Link to="/">
        <a class="navbar-brand" href="index.html">
          <img src="/images/inetwrkhub_logo.png" class="navbar-brand-img" alt="..." />
        </a>
        </Link>

        {/* <!-- Toggler --> */}
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Collapse --> */}
        <div class="collapse navbar-collapse" id="navbarCollapse">
          {/* <!-- Toggler --> */}
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-times"></i>
          </button>

          {/* <!-- Navigation --> */}
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link to="/" aria-haspopup="true"
              
                class="nav-link"
                id=""
                data-toggle=""
                
                aria-expanded="false"
              >
                Home
              
              </Link>
            </li>
            
            <NavDropdown title="Company" show={this.state.show}
            onMouseEnter={this.onMouseEnter} 
            onMouseLeave={this.onMouseLeave}
            >
              <NavDropdown.Item>Career</NavDropdown.Item>
            </NavDropdown>

            <li class="nav-item">
            <Link to="/portfolio"
              
                class="nav-link"
                id=""
                data-toggle=""
                href="portfolio.html"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Portfolio
              
              </Link>
            </li>
            <li class="nav-item">
            <Link to="/blog"
                class="nav-link"
                id=""
                data-toggle=""
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </Link>
            </li>
            <li class="nav-item">
            <Link to="/services"
              
                class="nav-link"
                id=""
                data-toggle=""
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              
              </Link>
            </li>
            
          </ul>

          {/* <!-- Button --> */}
          <Link to="/contact"
            class="navbar-btn btn btn-sm btn-theme lift ml-auto "
          >
            
            Contact
            </Link>
          
          
          
        </div>
      </div>
    </nav>
    
    <div class="whatsapp">
      <a href="https://api.whatsapp.com/send?phone=7000318920" target="_blank" rel="noreferrer" style={{color: 'white !important'}}>
        <img src="/images/whatsapp.png" alt="icon" />
      </a>
    </div>
    
    </div>
        );
    }
}

export default Header;