import React from 'react';
import { Link } from "react-router-dom";

class Header extends React.Component {
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
          <img src="/images/CodeIn_Breeze_crop.png" class="navbar-brand-img" alt="..." />
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
            
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                id="navbarcompany"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                renderMenuOnMount={true}
              >
                Company <i class="fa fa-caret-down"></i>
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarcompany">
              <Link to="/about"
                 class="list-group-item">
                  <div class="icon icon-sm text-theme">
                    <i class="fas fa-info-circle" style={{fontSize: '30px'}}></i>
                  </div>
                  <div class="ml-4">
                    <h6 class="font-weight-bold text-uppercase text-theme mb-0">
                      About
                    </h6>
                  </div>
                
                </Link>
                <Link to="/team"
                 class="list-group-item">
                  <div class="icon icon-sm text-theme">
                    <i class="fas fa-users" style={{fontSize: '30px'}}></i>
                  </div>
                  <div class="ml-4">
                    <h6 class="font-weight-bold text-uppercase text-theme mb-0">
                      Team
                    </h6>
                  </div>
                
                </Link>
                {/* <Link to="/training"
                 class="list-group-item" href="training.html">
                  <div class="icon icon-sm text-theme">
                    <i class="fas fa-laptop" style={{fontSize: '30px'}}></i>
                  </div>
                  <div class="ml-4">
                    <h6 class="font-weight-bold text-uppercase text-theme mb-0">
                      Training
                    </h6>
                  </div>
                
                </Link> */}
                <Link to="/carrer"
                 class="list-group-item">
                  <div class="icon icon-sm text-theme">
                    <i class="fas fa-briefcase" style={{fontSize: '30px'}}></i>
                  </div>
                  <div class="ml-4">
                    <h6 class="font-weight-bold text-uppercase text-theme mb-0">
                      Career
                    </h6>
                  </div>
                
                </Link>
                {/* <Link to="/testimonial"
                 class="list-group-item">
                  <div class="icon icon-sm text-theme">
                    <i class="fas fa-comments" style={{fontSize: '30px'}}></i>
                  </div>
                  <div class="ml-4">
                    <h6 class="font-weight-bold text-uppercase text-theme mb-0">
                      Testimonials
                    </h6>
                  </div>
                
                </Link> */}
              </ul>
            </li>
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
      <a href="https://api.whatsapp.com/send?phone=+918602286724" target="_blank" rel="noreferrer" style={{color: 'white !important'}}>
        <img src="/images/whatsapp.png" alt="icon" />
      </a>
    </div>
    
    </div>
        );
    }
}

export default Header;