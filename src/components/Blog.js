import React from 'react';
import { trackPromise } from 'react-promise-tracker';
import axios from 'axios';
import { LoadingIndicator } from './LoadingIndicator';
import { Link } from 'react-router-dom';

class Blog extends React.Component {

  constructor(props) {
    super(props);

    this.onLoadMore = this.onLoadMore.bind(this);

    this.state = { 
        blogCollection: [],
        showBlogs: 2
    };
}

onLoadMore() {
  this.setState({
    showBlogs:
    this.state.showBlogs >= this.state.blogCollection.length ?
    this.state.showBlogs : this.state.showBlogs + 1
  })
}

  componentDidMount() {
    window.scrollTo(0, 0);
    trackPromise(
      axios.get('https://inet-mern.herokuapp.com/api/getblog')
          .then(res => {
              console.log(res.data.data);
              this.setState({ blogCollection: res.data.data });
              window.scrollTo(0, 0);
          })
          .catch(function (error) {
              console.log(error);
          }))
}
    render() {
      
      const blog = this.state.blogCollection.reverse().slice(0, this.state.showBlogs).map(function (data, index) {
        return (
          <>
          <div className="card card-row shadow-light-lg mb-6 lift lift-lg">
          <div className="row no-gutters" key={index}>
            <Link to={`/blog/${data._id}`}
              className="col-12 col-md-6 order-md-2 bg-cover card-img-right"
              //style={{backgroundImage: 'url(images/Beginner-guide-to-creating-a-business-website-4.jpg)'}}
              style={{backgroundImage: `url(${data.blogImage})`}}
            >
              <img
                src={data.blogImage}
                alt="..."
                className="img-fluid d-md-none invisible"
              />

              
              <div
                className="shape shape-left shape-fluid-y svg-shim text-white d-none d-md-block"
              >
                <svg
                  viewBox="0 0 112 690"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0h62.759v172C38.62 384 112 517 112 517v173H0V0z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </Link>
            <div className="col-12 col-md-6 order-md-1">
              
            <Link to={`/blog/${data._id}`} className="card-body">
                
                <h3>{data.blogTitle}</h3>

                
                <p className="mb-0 text-muted">
                  {data.blogFront}
                </p>
              </Link>

              
              <Link to={`/blog/${data._id}`} className="card-meta">
                
                <hr className="card-meta-divider" />

                
                <div className="avatar avatar-sm mr-2">
                  <img
                    src="images/avatar-male.png"
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>

                
                <h6 className="text-uppercase text-muted mr-2 mb-0">{data.bloggerName}</h6>

                
                <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                  <time datetime="2020-12-15">{data.blogDate}</time>
                </p>
              </Link>
            </div>
          </div>
        </div>
          </>
        )
      });

        return (
             <>
             <section
      data-jarallax=""
      data-speed=".8"
      className="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover jarallax"
      style={{backgroundImage: 'none'}}
      data-jarallax-original-styles="background-image: url(images/photo-26);"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7 text-center">
            
            <h1 className="display-2 font-weight-bold text-white">Our Blog</h1>

            
            <p className="lead mb-0 text-white-75">
              Keep up to date with what we're working on!
            </p>
          </div>
        </div>
        
      </div>
      
      <div
        id="jarallax-container-0"
        style={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: '-100'
        }}
      >
        <div
          style={{
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'url(images/photo-27.jpg)',
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '1263.33px',
            height: '542.067px',
            overflow: 'hidden',
            pointerEvents: 'none',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            willChange: 'transform, opacity',
            marginTop: '5.46665px',
            transform: 'translate3d(0px, -22.8px, 0px)'
          }}
        ></div>
      </div>
    </section>

    
    <div className="position-relative">
      <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
        <svg
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>

    
    <section className="pt-7 pt-md-10">
      <div className="container">
        <div className="row">
          <div className="col-12">
          <LoadingIndicator></LoadingIndicator>
            {blog}
            
          </div>
        </div>
        
      </div>
      
    </section>

    <section className="py-7 py-md-10">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-8 col-xl-7">
            
            <a
              href="#!"
              className="btn btn-block btn-outline-yellow d-flex align-items-center"
              onClick={this.onLoadMore}
            >
              <span className="mx-auto">Load more</span>
              <i className="fe fe-arrow-right"></i>
            </a>
          </div>
        </div>
        
      </div>
      
    </section>
             </>
        );
    }
}

export default Blog;