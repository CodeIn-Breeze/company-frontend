import React from 'react';
import { Link } from "react-router-dom";


class Footer extends React.Component {
  render() {
    return (
      
        <div>
          <section className="info_section  pt-5">
            <div className="social_container">
              <div className="social_box">
                <a href="https://codeinbreeze.com/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://codeinbreeze.com/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://codeinbreeze.com/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://codeinbreeze.com/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="info_container ">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-lg-4">
                    <h6>
                      ABOUT US
              </h6>
                    <p>
                      Bring your online business with us. Let us take care of all the hard stuff and you focus on expanding your business.  We specialize in building websites, Mobile applications, SEO optimization and many more ,so that you always stay ahead in the market.
              </p>
                  </div>
                  <div className="col-md-6 col-lg-2">
                    <h6>
                      Company
              </h6>
                    <Link to="/about"><li> About </li></Link>
                    <Link to="/team"><li> Team </li></Link>
                    {/* <Link to="/training"><li> Training </li></Link> */}
                    <Link to="/carrer"><li> Career </li></Link>
                    <Link to="/contact"><li> Contact </li></Link>
                  </div>
                  <div className="col-md-6 col-lg-2">
                    <h6>
                      View
              </h6>
                    <Link to="/services"><li>Services</li></Link>
                    <Link to="/portfolio"><li>Portfolio</li></Link>
                    <Link to="/blog"><li>Blog</li></Link>
                    {/* <Link to="/terms"><li>Terms Of Use</li></Link>
                    <Link to="/policy"><li>Privacy Policy</li></Link> */}
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <h6>
                      CONTACT US
              </h6>
                    <div className="info_link-box">
                      <Link to="/contact">
                        <img src="/images/location-footer.png" alt="location" />
                        <span>D-12, Shiv Palace, Khajuri Kalan, Piplani, Bhopal(M.P.) India - 462022
                        </span>
                      </Link>
                      <a href="tel:8602286724">
                        <img src="/images/call.png" alt="call" />
                        <span>+91 8602286724 <br />  +91 7000318920 </span>

                      </a>
                      <a href="mailto:codeinbreeze@gmail.com">
                        <img src="/images/mail.png" alt="mail" />
                        <span> codeinbreeze@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- footer section --> */}
            <section className=" footer_section">
              <div className="container">
                <p>
                  Proudly Created By <a href="https://codeinbreeze.com/" style={{ color: '#8A2BE2' }}>CodeIn Breeze Pvt. Ltd.</a>
                  <br />
                  © CodeIn Breeze Pvt. Ltd. 2021-22. All Rights Reserved.
                </p>
              </div>
            </section>
            {/* <!-- footer section --> */}

          </section>
        </div>
        
      
    );
  }
}

export default Footer;