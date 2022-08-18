import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
    
const BlogSingle = () => {
    
  let {blogId} = useParams();
  
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(`https://inet-mern.herokuapp.com/api/getblog/${blogId}`, {})
        .then((response) => {
          setData(response.data.data);
          setIsLoading(false);
          console.log(response.data.data);
        })
        .catch((error) => console.log(error));
  }, [blogId]);

    return (
      <>
      {!isLoading && (
        <>
    <section className="pt-8 pt-md-11">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9 col-xl-8">
            <h1 className="display-4 text-center">
              {data.blogTitle}
            </h1>

            <p className="lead mb-7 text-center text-muted">
              
            </p>

            <div className="row align-items-center py-5 border-top border-bottom">
              <div className="col-auto">
                <div className="avatar avatar-lg">
                  <img
                    src="/images/avatar-male.png"
                    alt="..."
                    className="avatar-img rounded-circle"
                  />
                </div>
              </div>
              <div className="col ml-n5">
                <h6 className="text-uppercase mb-0">{data.bloggerName}</h6>

                <time className="font-size-sm text-muted" datetime="2019-05-20">
                  Published on {data.blogDate}
                </time>
              </div>
              <div className="col-auto">
                <span
                  className="h6 text-uppercase text-muted d-none d-md-inline mr-4"
                >
                  Share:
                </span>

                <ul className="d-inline list-unstyled list-inline list-social">
                  <li className="list-inline-item list-social-item mr-3">
                    <a href="..." className="text-decoration-none">
                      <img
                        src="/images/instagram.svg"
                        className="list-social-icon"
                        alt="..."
                      />
                    </a>
                  </li>
                  <li className="list-inline-item list-social-item mr-3">
                    <a href="..." className="text-decoration-none">
                      <img
                        src="/images/facebook.svg"
                        className="list-social-icon"
                        alt="..."
                      />
                    </a>
                  </li>
                  <li className="list-inline-item list-social-item mr-3">
                    <a href="..." className="text-decoration-none">
                      <img
                        src="/images/twitter.svg"
                        className="list-social-icon"
                        alt="..."
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="pt-6 pt-md-8 pb-8">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-9 col-xl-8">
            <figure className="figure mb-7">
              <img
                className="figure-img img-fluid rounded lift lift-lg"
                src={data.blogImage}
                alt="..."
              />
            </figure>
            <div dangerouslySetInnerHTML={{ __html: data.blogContent }} />
          </div>
        </div>
      </div>
    </section>
    </>
    )}
</>
    );
}

export default BlogSingle;