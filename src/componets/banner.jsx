import React from "react";
import "./banner.css";
const Banner = () => {
  return (
    <>
      <div className="containerfluid">
        <div className="row" style={{ backgroundColor: "#FDEEAC" }}>
          <div className="col-lg-6 col-sm-12">
            <div className=" container-fluid banner_head">
              <h1>Expertly matching digital talent with business</h1>
              <h4>
                We promote innovation, growth, and success in the digital sphere
                by connecting businesses with the best digital talent.
              </h4>
              <div className="btn manula_btn">
                <button>SEARCH JOB</button>
                <button className="btn-2">REQUEST TALENT</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <img src="/images/team.png" alt="" className="banner_img"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
