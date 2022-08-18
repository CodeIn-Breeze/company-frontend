import React from 'react';

class Databases extends React.Component {
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
            <h2><span className="text-primary-desat">Databases </span></h2>

            
            <p className="font-size-lg  mb-6 mb-md-0">
              Don't want to deal with the hassle of managing the database and
              scaling them according to demand. Lets us take care of it. Our
              inhouse database expert will take care of it in no time.
              <br /><br />
              Businesses both large and small can use Web databases to create website polls, 
              feedback forms, client or customer and inventory lists. Personal Web database use 
              can range from storing personal email accounts to a home inventory to personal website 
              analytics. The Web database is entirely customizable to an individual's or business's needs. 
              Worry? don't be , we at CodeIn Breeze Pvt. Ltd. will help you to create a database structure from scratch.
              <br /><br /> 
            </p>
          </div>
          <div className="col-12 col-md-6 col-xl-5">
            <div className="row no-gutters">
              {/* <!-- <img src="images/database.svg" alt="Databases" width="100%" /> --> */}
              <lottie-player src="../json/database.json" background="transparent"
              speed="0.8"  loop autoplay></lottie-player>
            </div>
          </div>
        </div>
        
      </div>
      
    </section>
             </>
        );
    }
}

export default Databases;