import React from "react";
import "./middlesection.css";

const Middlesection = () => {
  return (
    <>
      <div className="conatiner-fluid">
        <h1 className="ourservices">our Services</h1>
        <div className="row">
          <div className="col-lg-5 col-sm-12 img_div">
            <img
              src="/images/img1.png"
              alt="img1
                      "
              className="img-1"
            />
          </div>
          <div className="col-lg-7 col-sm-12 content-1">
            <div className="container">
              <h2 className="heading">Marketing</h2>
              <h6 className="discription">
                Grow your business with our marketing services! We offer the
                tools and expertise you need to make your brand stand out in a
                crowded market. Our experienced team is dedicated to helping you
                develop a customized marketing plan tailored to your unique
                goals and objectives. With our help, you can reach your target
                audience and maximize your business success.
              </h6>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 col-sm-12 img_div">
            <div className="container left">
              <h2 className="heading heading2">Application development</h2>
              <h6 className="discription">
                Grow your business with our marketing services! We offer the
                tools and expertise you need to make your brand stand out in a
                crowded market. Our experienced team is dedicated to helping you
                develop a customized marketing plan tailored to your unique
                goals and objectives. With our help, you can reach your target
                audience and maximize your business success.
              </h6>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12 content-1">
            <img
              src="/images/img2.png"
              alt="img1
                      "
              className="img-1"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 col-sm-12 img_div">
            <img
              src="/images/img3.png"
              alt="img1
                      "
              className="img-3"
              style={{ width: "400px", height: "300px" }}
            />
          </div>
          <div className="col-lg-7 col-sm-12 content-1">
            <div className="container">
              <h2 className="heading">User experience design</h2>
              <h6 className="discription">
                Grow your business with our marketing services! We offer the
                tools and expertise you need to make your brand stand out in a
                crowded market. Our experienced team is dedicated to helping you
                develop a customized marketing plan tailored to your unique
                goals and objectives. With our help, you can reach your target
                audience and maximize your business success.
              </h6>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 col-sm-12 img_div">
            <div className="container left">
              <h2 className="heading">Management consulting</h2>
              <h6 className="discription">
                Grow your business with our marketing services! We offer the
                tools and expertise you need to make your brand stand out in a
                crowded market. Our experienced team is dedicated to helping you
                develop a customized marketing plan tailored to your unique
                goals and objectives. With our help, you can reach your target
                audience and maximize your business success.
              </h6>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12 content-1">
            <img
              src="/images/img4.png"
              alt="img1
                      "
              className="img-1"
            />
          </div>
        </div>
      </div>
      <div className="conatiner-fluid">
        <h2 className="ourservices" style={{ fontWeight: "500" }}>
          Advantages of working with us
        </h2>
        <div className="container middle-btn">
          <button className="button">For Employers</button>
          <button className="btn-1">For Job seekers</button>
        </div>
      </div>
      <div className="container rules">
        <div className="rule-1">
          <h1>01</h1>
          <h4 className="heading">Skilled Talent</h4>
          <h6 className="discription">
            We have candidates who can meet any requirement. Hiring qualified
            candidates is a difficult business challenge. We collaborate with
            you to swiftly, efficiently, and successfully attract the right
            professionals to your company.
          </h6>
        </div>
        <div className="rule-1">
          <h1>02</h1>
          <h4 className="heading">Time Saving solutions</h4>
          <h6 className="discription">
            Say goodbye to endless hours of searching and interviewing. Say
            goodbye to time-wasting hiring processes. Experience a stress-free
            and efficient talent recruitment process today."
          </h6>
        </div>
        <div className="rule-1">
          <h1>03</h1>
          <h4 className="heading">Cost effective results</h4>
          <h6 className="discription">
            Unlock savings and maximize ROI. Our flexible solutions provide
            greater cost optimization. Choose us for cost-effective and
            quality-driven talent acquisition that drives your success and saves
            you money."
          </h6>
        </div>
      </div>
    </>
  );
};

export default Middlesection;
