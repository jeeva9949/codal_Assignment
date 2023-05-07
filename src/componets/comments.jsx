import React from "react";
import "./comments.css";

const Comments = () => {
  return (
    <div>
      <div className="container-fluid main-comments">
        <h2 className="customers">What our customers say </h2>
        <div className="container custmor_div">
          <div className="custmor">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Velit officia
              consequat duis enim velit mollit. Exercitation veniam consequat
              sunt nostrud amet.{" "}
            </p>
            <div className="custmor_details">
              <img
                src="/images/custmor.png"
                alt="custmor"
                className="custmor_img"
              />
              <div className="name">
                <p>Amy Smith</p>
                <p>Software engineer, Banglore</p>
              </div>
            </div>
          </div>
          <div className="custmor">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Velit officia
              consequat duis enim velit mollit. Exercitation veniam consequat
              sunt nostrud amet.{" "}
            </p>
            <div className="custmor_details">
              <img
                src="/images/custmor.png"
                alt="custmor"
                className="custmor_img"
              />
              <div className="name">
                <p>Amy Smith</p>
                <p>Software engineer, Banglore</p>
              </div>
            </div>
          </div>
          <div className="custmor">
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Velit officia
              consequat duis enim velit mollit. Exercitation veniam consequat
              sunt nostrud amet.{" "}
            </p>
            <div className="custmor_details">
              <img
                src="/images/custmor.png"
                alt="custmor"
                className="custmor_img"
              />
              <div className="name">
                <p>Amy Smith</p>
                <p>Software engineer, Banglore</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer">
        <div className="row">
          <div className="col-lg-5 col-sm-12">
            <h2>CODAL</h2>
            <div className="contact">
              <h3 style={{ textDecoration: "underline" }}>contact</h3>
              <p>Telephone: +91 928282828</p>
              <p>Email: hello.codal@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-7 col-sm-12">
            <div className="footer-right">
              <h2>Let’s craft brilliance together!</h2>
              <div className="input">
                <input type="text" placeholder="Enter Email Address" />
                <button>Get in Touch</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-bottom">
          <div className="col-lg-3 col-sm-4">
            <h6>2023 Codal. All rights reserved</h6>
          </div>
          <div className="col-lg-3 col-sm-4">
            <h6>Terms and conditions</h6>
          </div>
          <div className="col-lg-6 col-sm-4">
            <div className="social-media ">
              <img src="/images/facebook.png" alt="" />
              <img src="/images/twitter.png" alt="" />
              <img src="/images/instagram.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
