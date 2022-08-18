import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render () {
        return (
            <div>
                <section className="agency_section">
                    <div className="agency_container">
                        <div className="box ">
                        <div className="detail-box">
                            <div className="heading_container">
                            <h2>
                                About <span>CodeIn Breeze</span> Pvt. Ltd.
                            </h2>
                            </div>
                            <p>
                            We have a young team extremely qualified in computer code designer, developing, coming up with and digital selling. We have consultants in style and custom computer code development in enterprise solutions, web, and mobile applications. Each of our applications could be a combination of the most recent technologies.
                            </p>
                            {/* <!-- <a href="about.html">
                            Read More
                            </a> --> */}
                        </div>
                        </div>
                    </div>
                </section>
 

                {/* <!-- VALUES--> */}
                <section className="py-md-4 pt-8 pt-md-8">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                    
                    <div className="col-12 col-md-6 col-xl-5">
                        <div className="row no-gutters">
                        <div className="position-relative">
                            {/* <!-- Image --> */}
                            <div>
                            {/* <!-- <img src="images/photo-21.jpg" className="img-fluid" alt="..." /> --> */}
                            <lottie-player src="json/about-us.json" background="transparent"
                        speed="0.8"  loop autoplay style={{width: '500px', height: '370px', marginLeft: '-70px'}}></lottie-player>
                            </div>
                        </div>
                        </div>
                        {/* <!-- / .row --> */}
                    </div>
                    <div className="col-12 mt-5 mb-4 col-md-6">
                        {/* <!-- Heading --> */}
                        <h2>
                        Analyzing Needs, Developing and
                        <span className="text-primary-desat"> Maintaining It </span>
                        </h2>

                        {/* <!-- Text --> */}
                        <p className="font-size-lg text-muted mb-6 mb-md-0">
                        CodeIn Breeze Pvt. Ltd. framework helps us to hurry up the project
                        development method and cut back overall development prices. Our
                        main goal is to form advanced computer code solutions that look
                        fantastic and however area unit very easy to use. Our initial
                        priority is to take care of sensible business relations with our
                        correct work.
                        </p>
                    </div>
                    </div>
                    {/* <!-- / .row --> */}
                </div>
                {/* <!-- / .container --> */}
                </section>

                <section className="pt-6 pt-md-8 apply-btn text-white" style={{backgroundColor: '#2f2f2f'}}>
                <div className="container pb-6 pb-md-8 border-bottom">
                    <div className="row align-items-center">
                    <div className="col-12 col-md">
                        {/* <!-- Heading --> */}
                        <h3 className="font-weight-bold mb-1">
                        Interested in joining our team?
                        </h3>

                        {/* <!-- Text --> */}
                        <p className="font-size-lg mb-5 mb-md-0">
                        Hit us up and we'll get in touch with you.
                        </p>
                    </div>
                    <div className="col-12 col-md-auto">
                        {/* <!-- Button --> */}
                        <Link to="/carrer" className="btn btn-primary lift"> Apply now </Link>
                    </div>
                    </div>
                    {/* <!-- / .row --> */}
                </div>
                {/* <!-- / .container --> */}
                </section>
                {/* <!-- FEATURES--> */}
                <section className="bg-gray-200 py-8 py-md-13">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 text-center">
                        
                        <h1 className="font-weight-bold text-black">CodeIn Breeze Pvt. Ltd.</h1>

                        
                        <p className="font-size-lg text-muted mb-9">
                        Analyzing needs, developing in keeping with your needs and more
                        maintaining it.
                        </p>
                    </div>
                    </div>
                    
                    <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 lift pt-5 text-center">
                        
                        <div className="icon icon-lg mb-4">
                        <img src="images/messages-bubble.9431a844.svg" alt="message" />
                        </div>

                        
                        <h3 className="font-weight-bold text-black">Discover</h3>

                        
                        <p className="text-muted mb-8">
                        The first step in coming up with a roaring application is to
                        assemble info concerning the project.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 lift pt-5 text-center">
                        
                        <div className="icon icon-lg mb-4">
                        <img src="images/delivered.39576ccb.svg" alt="delivered" />
                        </div>

                        
                        <h3 className="font-weight-bold text-black">Planing & Proposal</h3>

                        
                        <p className="text-muted mb-8 mb-lg-0">
                        Using the knowledge gathered from part one, we tend to place along
                        an entire project arrange for your project.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 lift pt-5 text-center">
                        
                        <div className="icon icon-lg mb-4">
                        <img src="images/mountain.ec5fc7aa.svg" alt="mountain" />
                        </div>

                        
                        <h3 className="font-weight-bold text-black">UI/UX Styles</h3>

                        
                        <p className="text-muted mb-8 mb-md-0">
                        We discuss along, exchange concepts till we tend to hit the
                        ultimate coming up with of the project.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 lift pt-5 pb-4 text-center">
                        
                        <div className="icon icon-lg mb-4">
                        <img src="images/code.96cc8451.svg" alt="code" />
                        </div>

                        
                        <h3 className="font-weight-bold text-black">Software Development</h3>

                        
                        <p className="text-muted mb-8 mb-lg-0">
                        We produce custom code applications on prime of our framework to
                        scale back the time interval and project overall price.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 lift pt-5 pb-4 text-center">
                        {/* <!-- Icon --> */}
                        <div className="icon icon-lg mb-4">
                        <img src="images/user-shield.2a37e21f.svg" alt="user" />
                        </div>

                        {/* <!-- Heading --> */}
                        <h3 className="font-weight-bold text-black">Testing & Delivery</h3>

                        {/* <!-- Text --> */}
                        <p className="text-muted mb-8 mb-md-0">
                        We take a look at your developed project so you will not face any
                        downside in in operation it.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 lift pt-5 pb-4 text-center">
                        {/* <!-- Icon --> */}
                        <div className="icon icon-lg mb-4">
                        <img src="images/shield.eb07e5ce.svg" alt="shield" />
                        </div>

                        {/* <!-- Heading --> */}
                        <h3 className="font-weight-bold text-black">Maintenance & Promotion</h3>

                        {/* <!-- Text --> */}
                        <p className="text-muted mb-0">
                        Once the project is finished, our digital promoting consultants
                        will assist you to legalize your resolution.
                        </p>
                    </div>
                    </div>
                    {/* <!-- / .row --> */}
                </div>
                {/* <!-- / .container --> */}
                </section>

                {/* <!-- SHAPE
                ================================================== --> */}
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

                <section className="py-6 py-md-8 border-bottom" style={{backgroundColor: '#2f2f2f'}}>
                <div className="container">
                    <div className="row align-items-center ml-8 justify-content-center">
                    <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
                        {/* <!-- Brand --> */}
                        <div
                        className="img-fluid mb-2 mb-md-0 svg-shim w-25"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Amazon AWS"
                        >
                        <img src="images/amazonaws.svg" alt="AWS" />
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
                        {/* <!-- Brand --> */}
                        <div
                        className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim w-25"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Android"
                        >
                        <img src="images/android.svg" alt="Android" />
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
                        {/* <!-- Brand --> */}
                        <div
                        className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim w-25"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="MySQL"
                        >
                        <img src="images/mysql.svg" alt="MySQL" />
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
                        {/* <!-- Brand --> */}
                        <div
                        className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim w-25"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="PHP"
                        >
                        <img src="images/php.svg" alt="Php" />
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
                        {/* <!-- Brand --> */}
                        <div
                        className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim w-25"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="GCloud"
                        >
                        <img src="images/googlecloud.svg" alt="GoogleCloud" />
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
                        {/* <!-- Brand --> */}
                        <div
                        className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim w-25"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Django"
                        >
                        <img src="images/django.svg" alt="Django" />
                        </div>
                    </div>
                    </div>
                    <div
                    className="row align-items-center ml-8 mt-8 icon-p-2 justify-content-center"
                    >
                    <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
                        {/* <!-- Brand --> */}
                        <div
                        className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim w-25"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="CSS3"
                        >
                        <img src="images/css3.svg" alt="CSS" />
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
                        {/* <!-- Brand --> */}
                        <div
                        className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim w-25"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Javascript"
                        >
                        <img src="images/javascript.svg" alt="Javascript" />
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
                        {/* <!-- Brand --> */}
                        <div
                        className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim w-25"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="React"
                        >
                        <img src="images/react.svg" alt="React" />
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
                        {/* <!-- Brand --> */}
                        <div
                        className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim w-25"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Angular"
                        >
                        <img src="images/angular.svg" alt="Angular" />
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
                        {/* <!-- Brand --> */}
                        <div
                        className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim w-25"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Node Js"
                        >
                        <img src="images/node-dot-js.svg" alt="Node" />
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
                        {/* <!-- Brand --> */}
                        <div
                        className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim w-25"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Vue"
                        >
                        <img src="images/vue-dot-js.svg" alt="Vue" />
                        </div>
                    </div>
                    </div>
                    {/* <!-- / .row --> */}
                </div>
                {/* <!-- / .container --> */}
                </section>
                <br />
                <br />
            </div>
        );
    }
}

export default About;