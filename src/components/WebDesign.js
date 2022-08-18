import React from 'react';

class WebDesign extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
}
    render() {
        return (
             <div>
                 <section className="pt-8 pt-md-11">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-5">
            <h2><span className="text-primary-desat">Web Design </span></h2>

            {/* <!-- Text --> */}
            <p className="font-size-lg mb-6 mb-md-0" style={{fontFamily: 'poppins'}}>
              The first factor a possible client visiting your web site will is
              “look at it”. thus before your services may impress him/her,
              he/she ought to be affected with a powerful visual strategy. this
              is able to position your business and interact with your audience
              like ne'er before. Now, so as to drag off such a large task, won’t
              you would like somebody reliable?
            </p>
              
          </div>
          <div className="col-12 col-md-7 col-xl-6">
            <div className="row no-gutters">
              {/* <!-- <img src="images/IllustrationWebDesign.svg" alt="Web Design" width="100%" /> --> */}
              <lottie-player src="../json/Webdesign.json" background="transparent"
              speed="0.8"  loop autoplay></lottie-player>
            </div>
          </div>  
        </div>
        {/* <!-- / .row --> */}
      </div>
      {/* <!-- / .container --> */}
    </section>
    <section className="pt-8 pt-md-11">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <p className="font-size-lg  mb-7 mb-md-9">
            Now, in order to pull off such a huge task, won’t you want someone
            reliable? Who better than CodeIn Breeze Pvt. Ltd., a corporation that is one
            among the simplest skilled web style company. supplying you with
            wings by providing innovative web development services and
            specializing in straightforward static websites, vast CMS we have
            tendency top sites and e-commerce portals we positively become
            your most suitable option.
            </p>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <section className="pt-8 pt-md-11">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <h2>
              Make the proper look On the Web With Our coming up Designing
              Solutions. Gift the most effective user expertise to your
              customers by hiring us!
            </h2>
            <p className="font-size-lg mb-7 mb-md-9">
              “Paint your imaginations bright, with the colors of our web
              planning services" Why are our Web Designing services bright and
              right for you? as a result of we all know precisely the way to
              apply the newest style trends to convey the correct color to your
              project. At CodeIn Breeze Pvt. Ltd., every web site style strategy imbibes
              the precise theme to fit your purpose. Our focus is often
              assaulting user expertise so are our Web site solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-8 py-md-11">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-5 order-md-2">
            <h2>
              “From business websites to entertainment websites we outdo them
              all“<br />
            </h2>
          </div>
          <div className="col-12 col-md-6 order-md-1">
            <div className="card card-border border-theme shadow-lg">
              <div className="card-body">
                <div className="list-group list-group-flush">
                  <div className="list-group-item d-flex align-items-center">
                    <div className="mr-auto">
                      <p className="font-weight-bold mb-1">Landing Pages</p>
                    </div>
                    <div
                      className="badge badge-rounded-circle badge-theme-soft ml-4"
                    >
                      <i className="fe fe-check"></i>
                    </div>
                  </div>

                  <div className="list-group-item d-flex align-items-center">
                    <div className="mr-auto">
                      <p className="font-weight-bold mb-1">Flash website design</p>
                    </div>
                    <div
                      className="badge badge-rounded-circle badge-theme-soft ml-4"
                    >
                      <i className="fe fe-check"></i>
                    </div>
                  </div>

                  <div className="list-group-item d-flex align-items-center">
                    <div className="mr-auto">
                      <p className="font-weight-bold mb-1">Static website design</p>
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
                        Responsive website design
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
                      <p className="font-weight-bold mb-1">CMS solutions</p>
                    </div>
                    <div
                      className="badge badge-rounded-circle badge-theme-soft ml-4"
                    >
                      <i className="fe fe-check"></i>
                    </div>
                  </div>

                  <div className="list-group-item d-flex align-items-center">
                    <div className="mr-auto">
                      <p className="font-weight-bold mb-1">E-banners</p>
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
                        Graphic Design/ Logo Design/ Brochures
                      </p>
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
        {/* <!-- / .row --> */}
      </div>
      {/* <!-- / .container --> */}
    </section>
             </div>
        );
    }
}

export default WebDesign;