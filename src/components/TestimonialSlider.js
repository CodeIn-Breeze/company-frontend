import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class TestimonialSlider extends React.Component {
    render() {
        return (
             <>
             <div className="col-md-offset-2 col-md-8" style={{marginLeft: 'auto', marginRight: 'auto'}}>
             <h2 style={{textAlign: 'center'}}> What our customers says </h2>
            <OwlCarousel id="testimonial-slider" className="owl-carousel owl-theme" items={1} loop dots autoplay>
                <div className="testimonial" >
                    <div className="testimonial-content">
                    
                        <p className="description">
                        "CodeIn Breeze Pvt. Ltd. has done the best to uplift my startup, they made my startup alive, only because of their team, many writers and authors get to know about us! A huge thanks to CodeIn Breeze Pvt. Ltd. and its team, for making my dream bloom and taking every possible step to help me reach more viewers! Their creativity is at par, the changes which they make accordingly has its own excellence, and they have always given me a little extra, as far as my requirements were concerned, so yeah, I would say, that CodeIn Breeze Pvt. Ltd. helped to create the best icing on my cake, metaphorically! Thank you CodeIn Breeze Pvt. Ltd. and its' team, much love❤️"
                        </p>
                    </div>
                    <div className="testimonial-profile">
                        <div className="pic">
                            <img src="/images/avatar-female.png" alt="..." />
                        </div>
                        <h3 className="title">
                        Ms. Ayushi Sharma
                        </h3>
                    </div>
                </div>
                {/* <div className="testimonial">
                    <div className="testimonial-content">
                    <h2> What our customers says </h2>
                        <p className="description">
                        "To excel in showbiz one needs excellent projection. When we thought of our production's website, we were very sure to have a great-glam interface. CodeIn Breeze Pvt. Ltd. not only provided us that interface but they designed our website with such a creative way that it platters all our creations on the computer screen. Getting a great response from peer and clients. Thank you CodeIn Breeze Pvt. Ltd. for designing a dream website for us."
                        </p>
                    </div>
                    <div className="testimonial-profile">
                        <div className="pic">
                            <img src="images/avatar-male.png" alt="..." />
                        </div>
                        <h3 className="title">
                        Mr. Yousuf Ali Haqqani
                        </h3>
                    </div>
                </div> */}
                <div className="testimonial">
                    <div className="testimonial-content">
                    
                        <p className="description">
                        "I have had the opportunity to avail the services of CodeIn Breeze Pvt. Ltd. to develop my Website for my Business. I found them going above and beyond in providing their Services to me. CodeIn Breeze Pvt. Ltd. Project Manager Sauhard Mishra is exceptional. His patience, professionalism, duty of care towards his clients - are highly praise-worthy and I couldn't have done it without Sauhard. I would want to recommend Sauhard Mishra of the exceptional CodeIn Breeze Pvt. Ltd. Team to everyone for his diligent performance, customer service and above all - their reliability. Thank you CodeIn Breeze Pvt. Ltd. Team."
                        </p>
                    </div>
                    <div className="testimonial-profile">
                        <div className="pic">
                            <img src="/images/avatar-male.png" alt="..." />
                        </div>
                        <h3 className="title">
                        Mr. Mahendra Keshri
                        </h3>
                    </div>
                </div>
                {/* <div className="testimonial">
                    <div className="testimonial-content">
                    <h2> What our customers says </h2>
                        <p className="description">
                        "Hey CodeIn Breeze Pvt. Ltd. Team, Thanks for the work you have done for us, it looks fantastic! I do really appreciate it. Many thanks for a great website, we are extremely pleased with the result. Finally, I would like to say thanks for a great job and I am over the moon with the finished work I would recommend you to Everyone."
                        </p>
                    </div>
                    <div className="testimonial-profile">
                        <div className="pic">
                            <img src="images/avatar-male.png" alt="..." />
                        </div>
                        <h3 className="title">
                        Mr. Krishna Kant
                        </h3>
                    </div>
                </div> */}
                <div className="testimonial">
                    <div className="testimonial-content">
                    
                        <p className="description">
                        "When it comes to creating professional, attractive, and effective websites, there is no company that can surpass CodeIn Breeze Pvt. Ltd..  Thanks to their talent, our site has taken off in the search engines like a rocket.  In this day and age, it is impossible to get ahead as a business without the support of gurus like CodeIn Breeze Pvt. Ltd. standing behind you. The attention is fabulous and the staff is superb.  In a matter of days, I had a tremendous proposal, above and beyond our expectations.  We could not have picked a better team of professionals to represent us.  They are and will remain my "web guys" in the future to come."
                        </p>
                    </div>
                    <div className="testimonial-profile">
                        <div className="pic">
                            <img src="/images/avatar-male.png" alt="..." />
                        </div>
                        <h3 className="title">
                        Mr. Chintan Kakkad
                        </h3>
                    </div>
                </div>
            </OwlCarousel>
        </div>
             </>
        );
    }
}

export default TestimonialSlider;