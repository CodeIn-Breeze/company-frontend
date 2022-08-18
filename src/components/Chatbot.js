import React from 'react';

class Chatbots extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
}
    render() {
        return (
             <>
             <section className="pt-8 pt-md-11">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-6">
            <h2>We Provide <span className="text-theme">Chatbots </span></h2>
            <p className="font-size-lg  mb-6 mb-md-0">
              A computer program designed to simulate conversation with human users, especially over the 
              internet. Our experts work closely with you to ensure that your agent has a solid knowledge 
              base and the right conversational skills to speak your company's language. We add all of our 
              most advanced features and configure the right tools based on the visitors to your website. 
              We even go a step further by monitoring and reviewing the chats to "train" your agent with you. 
              The end result is a fully customized, highly effective automated agent that expands your existing 
              workforce, other Chatbots even come close.
            </p>
          </div>
          <div className="col-12 col-md-6 col-xl-5">
            <div className="row no-gutters">
              {/* <!-- <img
                src="images/IllustrationApplicationDevelopment.svg"
                alt="App Development"
                width="100%"
              /> --> */}
              <lottie-player src="../json/chatbot.json" background="transparent"
              speed="0.8"  loop autoplay></lottie-player>
            </div>
          </div>
        </div>
        
      </div>
      
    </section>

    <section className="py-8 py-md-11">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-5 order-md-2 text-center">
            <h2>Advantages of a Chabot<br /></h2>
          </div>
          <div className="col-12 col-md-6 order-md-1">
            <div className="card card-border border-theme shadow-lg">
              <div className="card-body">
                <div className="list-group list-group-flush">
                  <div className="list-group-item d-flex align-items-center">
                    <div className="mr-auto">
                      <p className="font-weight-bold mb-1">
                        Gather Customer Insights
                      </p>
                    </div>
                    <div
                      className="badge badge-rounded-circle badge-theme-soft ml-4"
                    >
                      <i className="fe fe-check"></i>
                    </div>
                  </div>

                  <div className="list-group-item d-flex align-items-center">
                    <div className="mr-auto">
                      <p className="font-weight-bold mb-1">
                        Increase Sales
                      </p>
                    </div>
                    <div
                      className="badge badge-rounded-circle badge-theme-soft ml-4"
                    >
                      <i className="fe fe-check"></i>
                    </div>
                  </div>

                  <div className="list-group-item d-flex align-items-center">
                    <div className="mr-auto">
                      <p className="font-weight-bold mb-1">Available 24/7</p>
                    </div>
                    <div
                      className="badge badge-rounded-circle badge-theme-soft ml-4"
                    >
                      <i className="fe fe-check"></i>
                    </div>
                  </div>

                  <div className="list-group-item d-flex align-items-center">
                    <div className="mr-auto">
                      <p className="font-weight-bold mb-1">Save Money</p>
                    </div>
                    <div
                      className="badge badge-rounded-circle badge-theme-soft ml-4"
                    >
                      <i className="fe fe-check"></i>
                    </div>
                  </div>

                  <div className="list-group-item d-flex align-items-center">
                    <div className="mr-auto">
                      <p className="font-weight-bold mb-1">Improve Customer Satisfaction</p>
                    </div>
                    <div
                      className="badge badge-rounded-circle badge-theme-soft ml-4"
                    >
                      <i className="fe fe-check"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </section>

    <section className="pt-5 pt-md-5 pb-12 pb-md-6">
      <div className="container">
        <h2 className="display-3 py-6 text-center">Chatbot</h2>
        <div className="row">
          <div className="col-12 col-md-4">
            <a className="card shadow-light-lg mb-7" href="www.codeinbreeze.com">
              <div className="card-zoom">
                <img className="card-img" src="../images/skincare.jpg" alt="..." />
              </div>
              <div className="card-img-overlay card-img-overlay-hover">
                <div className="card-body bg-white">
                  <div
                    className="shape shape-bottom-100 shape-fluid-x svg-shim text-white"
                  >
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
                  <h6 className="text-uppercase mb-1 text-muted">E-Commerce</h6>
                  <h4 className="mb-0">Cosmetics & Skincare e-commerce chatbot</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-12 col-md-4">
            <a className="card shadow-light-lg mb-7" href="www.codeinbreeze.com">
              <div className="card-zoom">
                <img className="card-img" src="../images/he.jfif" alt="..." />
              </div>
              <div className="card-img-overlay card-img-overlay-hover">
                <div className="card-body bg-white">
                  <div
                    className="shape shape-bottom-100 shape-fluid-x svg-shim text-white"
                  >
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
                  <h6 className="text-uppercase mb-1 text-muted">
                    Education & Coaching
                  </h6>
                  <h4 className="mb-0">Health & Weight Loss Coach Chatbot</h4>
                </div>
              </div>
            </a>
          </div>

          <div className="col-12 col-md-4">
            <a className="card shadow-light-lg mb-7" href="www.codeinbreeze.com">
              <div className="card-zoom">
                <img className="card-img" src="../images/dental.jpg" alt="..." />
              </div>
              <div className="card-img-overlay card-img-overlay-hover">
                <div className="card-body bg-white">
                  <div
                    className="shape shape-bottom-100 shape-fluid-x svg-shim text-white"
                  >
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
                  <h6 className="text-uppercase mb-1 text-muted">Commercial</h6>
                  <h4 className="mb-0">Dental Clinic Chatbot</h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
             </>
        );
    }
}

export default Chatbots;