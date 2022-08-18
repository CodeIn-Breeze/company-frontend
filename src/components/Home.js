import React from "react";
import { trackPromise } from "react-promise-tracker";
import { Link } from "react-router-dom";
import TestimonialSlider from "./TestimonialSlider";
import axios from "axios";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
  responsiveClass: true,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 6,
      }
  },
};

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blogCollection: [],
      showBlogs: 3,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    trackPromise(
      axios
        .get("https://inet-mern.herokuapp.com/api/getblog")
        .then((res) => {
          console.log(res.data.data);
          this.setState({ blogCollection: res.data.data });
          window.scrollTo(0, 0);
        })
        .catch(function (error) {
          console.log(error);
        })
    );
  }

  render() {
    const blog = this.state.blogCollection
      .reverse()
      .slice(0, this.state.showBlogs)
      .map(function (data, index) {
        return (
          <>
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              {/* <!-- Card --> */}
              <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg" key={index}>
                {/* <!-- Image --> */}
                <Link to={`/blog/${data._id}`} className="card-img-top">
                  {/* <!-- Image --> */}
                  <img
                    src={data.blogImage}
                    alt="..."
                    className="card-img-top"
                  />

                  {/* <!-- Shape --> */}
                  <div className="position-relative">
                    <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                      <svg
                        viewBox="0 0 2880 480"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </Link>

                {/* <!-- Body --> */}
                <Link to={`/blog/${data._id}`} className="card-body">
                  {/* <!-- Heading --> */}
                  <h3>{data.blogTitle}</h3>

                  {/* <!-- Text --> */}
                  <p className="mb-0 temp" >
                    {data.blogFront}
                  </p>
                </Link>
                {/* <!-- Meta --> */}
                <Link to={`/blog/${data._id}`} className="card-meta mt-auto">
                  {/* <!-- Divider --> */}
                  <hr className="card-meta-divider" />
                  <div className="avatar avatar-sm mr-2">
                    <img
                      src="/images/avatar-male.png"
                      alt="..."
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  <h6 className="text-uppercase text-muted mr-2 mb-0">
                    {data.bloggerName}
                  </h6>
                  <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                    <time datetime="2020-12-15">{data.blogDate}</time>
                  </p>
                </Link>
              </div>
            </div>
          </>
        );
      });

    return (
      <div>
        <div className="hero_area">
          <section className="slider_section">
            <div className="slider_container">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  >
                    01
                  </li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  >
                    02
                  </li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  >
                    03
                  </li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 px-0">
                          <div className="img-box">
                            {/* <!-- <img src="images/slider (2).jpg" alt="INetworkHub" /> --> */}
                            <lottie-player
                              src="json/design_agency.json"
                              background="transparent"
                              speed="0.8"
                              loop
                              autoplay
                            ></lottie-player>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="detail-box">
                            <h1>
                              Design
                              <br />
                              Agency
                            </h1>
                            <p>
                              Make the proper look On the Web With Our coming up
                              Designing Solutions.
                            </p>
                            <Link to="/contact" style={{ display: "hidden" }}>
                              <button className="button">Contact Us</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 px-0">
                          <div className="img-box">
                            {/* <!-- <img src="images/slider (1).jpg" alt="INetworkHub" /> --> */}
                            <lottie-player
                              src="json/web-development.json"
                              background="transparent"
                              speed="0.8"
                              loop
                              autoplay
                            ></lottie-player>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="detail-box">
                            <h1>
                              Development
                              <br />
                              Agency
                            </h1>
                            <p>
                              We develop your ideas into consummated dreams.
                            </p>
                            <Link to="/contact" style={{ display: "hidden" }}>
                              <button className="button">Contact Us</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-md-6 px-0">
                          <div className="img-box">
                            {/* <!-- <img src="images/slider (3).jpg" alt="INetworkHub" /> --> */}
                            <lottie-player
                              src="json/content-writing.json"
                              background="transparent"
                              speed="0.8"
                              loop
                              autoplay
                            ></lottie-player>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="detail-box">
                            <h1>
                              Content
                              <br />
                              Writing
                            </h1>
                            <p>
                              CodeIn Breeze Pvt. Ltd. is a content writing agency offering
                              content development services.
                            </p>
                            <Link to="/contact" style={{ display: "hidden" }}>
                              <button className="button">Contact Us</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel_btn-box">
                  <a
                    className="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span className="sr-only">Previous</span>
                  </a>
                  <img src="images/line.png" alt="line" />
                  <a
                    className="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* <!-- service section --> */}

        <section className="service_section layout_padding">
          <div className="container">
            <div className="heading_container">
              <h2>
                Ser<span>vi</span>ces
              </h2>
              <p>Build Your Business with us</p>
            </div>
            <div className="row">
              <div className="col-lg-6 ">
                <div className="img-container tab-content">
                  <div
                    className="img-box tab-pane fade show active"
                    id="img1"
                    role="tabpanel"
                  >
                    <img
                      src="images/IllustrationWebDevelopment.svg"
                      alt="Web Design"
                    />
                    {/* <!-- <lottie-player src="json/Web design.json" background="transparent"
              speed="0.8" style="margin-left: -90px;" loop autoplay></lottie-player> --> */}
                  </div>
                  <div
                    className="img-box tab-pane fade  "
                    id="img2"
                    role="tabpanel"
                  >
                    <img
                      src="images/IllustrationApplicationDevelopment.svg"
                      alt="Web Development"
                    />
                    {/* <!-- <lottie-player src="json/Web development.json" background="transparent"
              speed="0.8" style="margin-left: -90px;" loop autoplay></lottie-player> --> */}
                  </div>
                  <div
                    className="img-box tab-pane fade  "
                    id="img3"
                    role="tabpanel"
                  >
                    <img
                      src="images/IllustrationWebDesign.svg"
                      alt="App Development"
                    />
                    {/* <!-- <lottie-player src="json/App.json" background="transparent"
              speed="0.8" style="margin-left: -90px;" loop autoplay></lottie-player> --> */}
                  </div>
                  <div
                    className="img-box tab-pane fade  "
                    id="img4"
                    role="tabpanel"
                  >
                    <img src="images/IllustrationSEO.svg" alt="Chatbots" />
                    {/* <!-- <lottie-player src="json/chatbot.json" background="transparent"
              speed="0.8" style="margin-left: -90px;" loop autoplay></lottie-player> --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="detail-container nav nav-tabs"
                  id="myTab"
                  role="tablist"
                >
                  <div
                    className="detail-box active"
                    id="img1-tab"
                    data-toggle="tab"
                    href="#img1"
                    role="tab"
                    aria-selected="true"
                  >
                    <h4>
                      Web <br />
                      Design
                    </h4>
                  </div>
                  <div
                    className="detail-box"
                    id="img2-tab"
                    data-toggle="tab"
                    href="#img2"
                    role="tab"
                    aria-selected="false"
                  >
                    <h4>
                      Website <br />
                      Development
                    </h4>
                  </div>
                  <div
                    className="detail-box"
                    id="img2-tab"
                    data-toggle="tab"
                    href="#img3"
                    role="tab"
                    aria-selected="false"
                  >
                    <h4>
                      App <br />
                      Development
                    </h4>
                  </div>
                  <div
                    className="detail-box"
                    id="img2-tab"
                    data-toggle="tab"
                    href="#img4"
                    role="tab"
                    aria-selected="false"
                  >
                    <h4>
                      AI <br /> Chatbots <br />
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="btn-box">
              <Link to="/services">View All</Link>
            </div>
          </div>
        </section>

        {/* <!-- end service section --> */}
        <section className="portfolio_section ">
          <div className="heading_container">
            <h2>
              Por<span>tf</span>olio
            </h2>
            <p>
              See how businesses like yours found solutions with CodeIn Breeze Pvt. Ltd..
            </p>
          </div>
          <div className="portfolio_container py-10">
            <div className="box-1">
              <Link to="/portfolio">
                <div className="img-box">
                  <img
                    src="images/upcoming.jpg"
                    data-filter=".upcoming"
                    alt="Upcoming"
                  />
                  <div className="btn-box">
                    <h2 className="text-center">Websites</h2>
                  </div>
                </div>
              </Link>
              <Link to="/portfolio">
                <div className="img-box">
                  <img src="images/live.jpg" alt="Live" />
                  <div className="btn-box">
                    <h2>Upcoming Websites</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="box-2">
              <Link to="/portfolio">
                <div className="img-box b-3">
                  <img
                    src="images/graphic.jpg"
                    alt="Graphics"
                    width="120px"
                    height="120px"
                  />
                  <div className="btn-box">
                    <h2>Graphics</h2>
                  </div>
                </div>
              </Link>
              <Link to="/portfolio">
                <div className="img-box b-4">
                  <img src="images/logos.jpg" alt="Logos" />
                  <div className="btn-box">
                    <h2>LOGOS</h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* <!-- logo section --> */}

        <section className="logo_section layout_padding">
          <div className="container">
            <div className="heading_container">
              <h2>
                A N<span>EW</span> Logo <br />
                FOR YOUR COMPANY
              </h2>
              <p>
                From business websites to entertainment websites we out do them
                all.
              </p>
            </div>
          </div>
          <div className="logo_container layout_padding">
            <div className="carousel-wrap">
              <OwlCarousel className="owl-carousel" id="owl-example" loop items={6} nav {...options} autoplay>
                <div className="item">
                  <div className="box  b1">
                    <a href="http://www.manalytica.in/">
                      <div className="img-box">
                        <img src="images/logo(4).png" alt="MAnalytica" />
                      </div>
                      <div className="detail-box">
                        
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="box b2">
                    <a href="http://www.daretodream.co.in/">
                      <div className="img-box">
                        <img src="/images/logo(5).png" alt="Dare to Dream" />
                      </div>
                      <div className="detail-box">
                        
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="box  b1">
                    <a href="https://poochoh.com/">
                      <div className="img-box">
                        <img src="/images/logo.png" alt="Poochoh" />
                      </div>
                      <div className="detail-box">
                        
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="box b2">
                    <a href="https://codeinbreeze.com/">
                      <div className="img-box">
                        <img src="/images/My11Beast.png" alt="My11Beast" />
                      </div>
                      <div className="detail-box">
                        
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="box  b1">
                    <a href="http://www.wowwordsofwise.co.in/">
                      <div className="img-box">
                        <img src="/images/logo(8).png" alt="WoW" />
                      </div>
                      <div className="detail-box">
                        
                      </div>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="box b2">
                    <div className="img-box">
                      <img src="/images/logo_infi.png" alt="Infinexy" />
                    </div>
                    <div className="detail-box">
                      
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box  b1">
                    <div className="img-box">
                      <img src="/images/processed.jpeg" alt="Wellhunus" />
                    </div>
                    <div className="detail-box">
                      
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="box b2">
                    <div className="img-box">
                      <img src="/images/processed2.jpeg" alt="Surya Pharma" />
                    </div>
                    <div className="detail-box">
                      
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>

        {/* <!-- end logo section --> */}

        <section className="started_section pt-10 pb-8">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="detail-box">
                  <div className="heading_container">
                    <h2>
                      Lets <span>Get</span> Started <br />
                      Your Project
                    </h2>
                    <p>
                      Get in touch with our team of experts and we will let you
                      know what is best for bussiness.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 offset-md-1">
                <div className="btn-box">
                  <Link to="/contact">Let’s talk</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="team layout_padding-bottom pt-10">
          <div className=" client_section">
            <div className="heading_container">
              <h2 className="pb-8">
                Our <span>Team</span> Members
              </h2>
            </div>
            <div className=" row col-md-12">
              <div className="box col-md-3">
                <div className="client_id">
                  <div className="name">
                    <h4>
                      Raj <br />
                      Keshri
                    </h4>
                    <h6>"Founder & DIRECTOR"</h6>
                  </div>
                  <div className="img-box">
                    <img src="images/Raj.png" alt="Raj" />
                  </div>
                  <ul className="social-icon-three">
                    <li>
                      <a
                        href="https://www.facebook.com/raj.keshri.756"
                        target="blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/_strange._life_"
                        target="blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/raj-keshri-b500b416a/"
                        target="blank"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:contactinetworkhub@gmail.com">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="box col-md-3">
                <div className="client_id">
                  <div className="name">
                    <h4>
                      Sauhard <br />
                      Mishra
                    </h4>
                    <h6>"Co-Founder & General Manager"</h6>
                  </div>
                  <div className="img-box">
                    <img src="images/Sauhard.png" alt="Sauhard" />
                  </div>
                  <ul className="social-icon-three">
                    <li>
                      <a
                        href="https://www.facebook.com/sauhard.mishra.1"
                        target="blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/sauhard111"
                        target="blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/sauhard-mishra-907126185/"
                        target="blank"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:contactinetworkhub@gmail.com">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
            <div className="btn-box pt-10">
              <Link to="/team">View All</Link>
            </div>
          </div>
        </section>

        <section
          className="pt-7 pt-md-10"
          style={{ backgroundColor: "#2F2F2F" }}
        >
          <div className="container">
            <div className="row align-items-center mb-5 heading-blog">
              <div className="col-12 col-md text-white">
                {/* <!-- Heading --> */}
                <h3 className="mb-0">Latest Blog</h3>

                {/* <!-- Text --> */}
                <p className="mb-0">Here’s what we've been up to recently.</p>
              </div>
              <div className="col-12 col-md-auto ">
                {/* <!-- Button --> */}
                <Link to="/blog" className="btn btn-sm btn-outline-yellow ">
                  View all
                </Link>
              </div>
            </div>
            {/*  <!-- / .row --> */}
            <div className="row">
              {blog}
            </div>
            {/* <!-- / .row --> */}
          </div>
          {/* <!-- / .container --> */}
          <br />
          <br />
        </section>

        <br />
        <TestimonialSlider></TestimonialSlider>
      </div>
    );
  }
}

export default Home;
