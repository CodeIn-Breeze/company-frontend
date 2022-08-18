import React from 'react';
import {
    Link,
} from "react-router-dom";

class Services extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render () {
        return (
            <div>
                <section className="py-12">
                    <div className="container">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 col-md-10 col-lg-10 text-center">
                                    <h1 className="display-2">Our Services</h1>
                                    <p className="font-size-lg text-muted mb-7 mb-md-9">
                                        We design and develop websites & applications with love, care and of course quality
                                        so that you can get a lead in your business.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            
                            <div className="col-12 col-md-6 col-lg-4">

                                <div
                                    className="card card-border border-primary-yellow shadow-lg mb-6 mb-md-8 lift lift-lg"
                                >
                                    <div className="card-body text-center">
                                        <div className="icon-circle bg-theme-yellow text-white mb-5">
                                            <i className="fas fa-code" style={{fontSize: '30px'}}></i>
                                        </div>
                                        <h4 className="font-weight-bold">Web Development</h4>


                                        <p className="text-gray-700 mb-5">
                                            Having an online presence in today's time is a must if you want your business or
                                            brand to grow and reach a large amount customer base. Tell us what you want and we
                                            will hook you up with the best you can get.
                                        </p>

                                        <Link to={"/webdev"} style={{color: '#8A2BE2'}}>View</Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-12 col-md-6 col-lg-4">

                                <div
                                    className="card card-border border-primary-yellow shadow-lg mb-6 mb-md-8 lift lift-lg"
                                >
                                    <div className="card-body text-center">
                                        <div className="icon-circle bg-theme-yellow text-white mb-5">
                                            <i className="fab fa-android" style={{fontSize: '30px'}}></i>
                                        </div>
                                        <h4 className="font-weight-bold">App Development</h4>


                                        <p className="text-gray-700 mb-5">
                                            Mobile applications are a great way to get close to your customers and always
                                            be in reach. Tell us what you want and let our team of experts handle the rest.
                                        </p>

                                        <Link to="/appdev" style={{color: '#8A2BE2'}}>View</Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-12 col-md-6 col-lg-4">

                                <div
                                    className="card card-border border-primary-yellow shadow-lg mb-6 mb-md-8 lift lift-lg"
                                >
                                    <div className="card-body text-center">
                                        <div className="icon-circle bg-theme-yellow text-white mb-5">
                                            <i
                                                className="fab fa-wordpress-simple"
                                                style={{fontSize: '30px'}}
                                            ></i>
                                        </div>
                                        <h4 className="font-weight-bold">Web Design</h4>


                                        <p className="text-gray-700 mb-5">
                                            Having a beautiful and good looking website draws attention and makes you look
                                            professional and trustworthy. Our team strives to deliver the best we can and
                                            bring you ahead of the crowd.
                </p>

                                        <Link to="/webdesign"><a href="web-design.html" style={{color: '#8A2BE2'}}>View</a></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4">

                                <div
                                    className="card card-border border-primary-yellow shadow-lg mb-6 mb-md-8 lift lift-lg"
                                >
                                    <div className="card-body text-center">
                                        <div className="icon-circle bg-theme-yellow text-white mb-5">
                                            <i className="fas fa-search" style={{fontSize: '30px'}}></i>
                                        </div>
                                        <h4 className="font-weight-bold">SEO</h4>


                                        <p className="text-gray-700 mb-5">
                                            Having a website is just half of the work other half is bringing traffic to it.
                                            SEO is one of the most important things to make your website shine in a sea of
                                            other websites.
                </p>

                                        <Link to="/seo" style={{color: '#8A2BE2'}}>View</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4">

                                <div
                                    className="card card-border border-primary-yellow shadow-lg mb-6 mb-md-8 lift lift-lg"
                                >
                                    <div className="card-body text-center">
                                        <div className="icon-circle bg-theme-yellow text-white mb-5">
                                            <i className="fas fa-icons" style={{fontSize: '30px'}}></i>
                                        </div>
                                        <h4 className="font-weight-bold">Social Media Marketing</h4>

                                        <p className="text-gray-700 mb-5">
                                            Get to your target crowd through various social media platforms to promote your
                                            new business or products.
                </p>

                                        <Link to="/socialmedia" style={{color: '#8A2BE2'}}>View</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                {/* <!-- Card --> */}
                                <div
                                    className="card card-border border-primary-yellow shadow-lg mb-6 mb-md-8 lift lift-lg"
                                >
                                    <div className="card-body text-center">
                                        <div className="icon-circle bg-theme-yellow text-white mb-5">
                                            <i className="fas fa-globe" style={{fontSize: '30px'}}></i>
                                        </div>
                                        <h4 className="font-weight-bold">Web Scraping</h4>

                                        {/* <!-- Text --> */}
                                        <p className="text-gray-700 mb-5">
                                            We tend to simply get large leads for your exploitation custom codes so an efficient
                                            sales strategy will stem up among some minutes.
                </p>

                                        <Link to="/webscrapping" style={{color: '#8A2BE2'}}>View</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                {/* <!-- Card --> */}
                                <div
                                    className="card card-border border-primary-yellow shadow-lg mb-6 mb-md-8 lift lift-lg"
                                >
                                    <div className="card-body text-center">
                                        <div className="icon-circle bg-theme-yellow text-white mb-5">
                                            <i className="fas fa-tools" style={{fontSize: '30px'}}></i>
                                        </div>
                                        <h4 className="font-weight-bold">Penetration Testing</h4>

                                        {/* <!-- Text --> */}
                                        <p className="text-gray-700 mb-5">
                                            A pen test allows the end user to determine any security weakness of the entire
                                            web application and across its components, including the source code, database,
                                            and back-end network.
                </p>

                                        <Link to="/pentest" style={{color: '#8A2BE2'}}>View</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                {/* <!-- Card --> */}
                                <div
                                    className="card card-border border-primary-yellow shadow-lg mb-6 mb-md-8 lift lift-lg"
                                >
                                    <div className="card-body text-center">
                                        <div className="icon-circle bg-theme-yellow text-white mb-5">
                                            <i className="far fa-edit" style={{fontSize: '30px'}}></i>
                                        </div>
                                        <h4 className="font-weight-bold">Content Writing</h4>

                                        {/* <!-- Text --> */}
                                        <p className="text-gray-700 mb-5">
                                            We offer made-to-order content writing services to all or any our shoppers enabling
                                            them to become a lot of visible online.
                                        </p>

                                        <Link to="/contentwriting" style={{color: '#8A2BE2'}}>View</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                {/* <!-- Card --> */}
                                <div
                                    className="card card-border border-primary-yellow shadow-lg mb-6 mb-md-8 lift lift-lg"
                                >
                                    <div className="card-body text-center">
                                        <div className="icon-circle bg-theme-yellow text-white mb-5">
                                            <i className="fas fa-database" style={{fontSize: '30px'}}></i>
                                        </div>
                                        <h4 className="font-weight-bold">Databases</h4>

                                        {/* <!-- Text --> */}
                                        <p className="text-gray-700 mb-5">
                                            Managing a large amount of data and large number of databases can become quite
                                            cumbersome some times. Let’s us our in-house team of database experts takes care of it.
                                        </p>

                                        <Link to="/databases" style={{color: '#8A2BE2'}}>View</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                {/* <!-- Card --> */}
                                <div
                                    className="card card-border border-primary-yellow shadow-lg mb-6 mb-md-8 lift lift-lg"
                                >
                                    <div className="card-body text-center">
                                        <div className="icon-circle bg-theme-yellow text-white mb-5">
                                            <i className="fas fa-laptop-code" style={{fontSize: '30px'}}></i>
                                        </div>
                                        <h4 className="font-weight-bold">Web Maintenance</h4>

                                        {/* <!-- Text --> */}
                                        <p className="text-gray-700 mb-5">
                                            As time passes by old website goes obsolete as new technologies emerges, or you may
                                            need a new feature. We specialize in updating the existing websites and bringing them
                                            to current standards in both performance and security.
                                        </p>

                                        <Link to="/webmaintenance" style={{color: '#8A2BE2'}}>View</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-lg-4">
                                {/* <!-- Card --> */}
                                <div
                                    className="card card-border border-primary-yellow shadow-lg mb-6 mb-md-8 lift lift-lg"
                                >
                                    <div className="card-body text-center">
                                        <div className="icon-circle bg-theme-yellow text-white mb-5">
                                            <i className="fas fa-robot" style={{fontSize: '30px'}}></i>
                                        </div>
                                        <h4 className="font-weight-bold">Chatbots</h4>

                                        {/* <!-- Text --> */}
                                        <p className="text-gray-700 mb-5">
                                            A chatbot is a software application used to conduct an on-line chat conversation
                                            via text or text-to-speech, in lieu of providing direct contact with a live human agent.
                                        </p>

                                        <Link to="chatbots" style={{color: '#8A2BE2'}}>View</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
        );
    }
}

export default Services;