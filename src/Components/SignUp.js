import React from "react";
import logo2 from "../img/arxena-logo/arxena-logo.png";
import img from "../img/mannan_pacha_dp.webp";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { useState } from "react";

const SignUp = () => {
  const[show,setShow]=useState(false)
  const [inputValues, setInputValues] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
    country:""
  });
  const handleChange = (e) => {
    const { name, value } = e.target||e;
    setInputValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handlePhoneChange = (value, country) => {
    setInputValues((prevData) => ({
      ...prevData,
      number: value,
      country:country||prevData.country
    }));
  };
  const submit = (e) => {
    e.preventDefault();
    if(inputValues.name===""||inputValues.email===""||inputValues.number===""||inputValues.password==="")
    {
      setShow(true);
    }
    setInputValues({
      name: "",
      number: "",
      email: "",
      password: "",
      country:"in"
    });
   
  };
  return (
    <>
      <div className="desk" style={{ height: "100%" }}>
        <div style={{ display: "table", width: "100%", height: "100%" }}>
          <div
            style={{
              display: "table-cell",
              width: "70%",
              backgroundColor: "white",
              padding: "20px",
            }}
          >
            <Link to="/">
              <img
                style={{
                  width: "10vw",
                  marginTop: "5px",
                  cursor: "pointer",
                  position: "relative",
                  top: "-5%",
                }}
                src={logo2}
                alt="logo"
              />
            </Link>
            <form>
              <div
                className="shadow content_section"
                style={{
                  width: "500px",
                  padding: "30px",
                  backgroundColor: "rgba(255,255,255)",
                  borderRadius: "5px",
                  textAlign: "center",
                  left: 0,
                  right: 0,
                }}
              >
                <div id="signup_form_content">
                  <span style={{ fontSize: "16pt", fontWeight: "300" }}>
                    Get started with 10 free org-chart credits.
                    <br />
                    No credit card is needed.
                  </span>
                  <br />
                  <br />
                  <div
                    style={{ width: "90%", left: "5%", position: "relative" }}
                  >
                    <div className="row">
                      <div className="col-sm-12">
                        <input
                          id="full_name"
                          type="text"
                          name="name"
                          className="form-control-custom"
                          placeholder="Full Name"
                          value={inputValues.name}
                          onChange={handleChange}
                        />
                        <br />
                      </div>
                      <div className="col-sm-12 phone_number_input">
                        {/* <input
                        id="phone"
                        type="text"
                        name="number"
                        className="form-control-custom enter_click phone_number"
                        placeholder="Mobile Number"
                       value={inputValues.number}
                       onChange={handleChange}
                       
                      /> */}
                        <PhoneInput
                          country={"in"}
                          placeholder="Mobile Number"
                          value={inputValues.number}
                          onChange={handlePhoneChange}
                          inputProps={{
                            required: true,
                          }}
                          
                        />

                        <br />
                      </div>
                      <div className="col-sm-12">
                        <input
                          id="email"
                          type="text"
                          name="email"
                          className="form-control-custom enter_click"
                          placeholder="Business Email"
                          value={inputValues.email}
                          onChange={handleChange}
                        />

                        <br />
                      </div>
                      <div className="col-sm-12">
                        <input
                          id="password"
                          type="password"
                          name="password"
                          className="form-control-custom enter_click"
                          placeholder="Password"
                          value={inputValues.password}
                          onChange={handleChange}
                        />
                        <br />
                      </div>
                      <div className="col-sm-12 dropdown show">
                        <button
                          id="new_account_use_case"
                          className="btn dropdown-toggle"
                          type="button"
                          style={{
                            width: "100%",
                            fontSize: "10pt",
                            backgroundColor: "white",
                            border: "1px solid rgb(210,210,210)",
                            color: "#495057",
                          }}
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="true"
                        >
                          I work for a
                        </button>
                      </div>
                    </div>

                    <div
                      style={{
                        width: "100%",
                        textAlign: "center",
                        position: "relative",
                        padding: "20px",
                        marginTop: "20px",
                      }}
                    >
                      <div
                        id="signup_button_desktop"
                        className="form_button enter_click"
                        style={{
                          margin: "auto",
                          position: "absolute",
                          left: "0",
                          right: "0",
                          top: "0",
                          bottom: "0",
                        }}
                        onClick={submit}
                      >
                        Create account
                      </div>
                    </div>
                  </div>
                  {
                    show &&  <div className="showError">
                      <p>Please fill in all the Fields</p>
                    </div>
                  }
                  <div id="signup_error" style={{ marginTop: "20px" }}></div>
                  <div
                    style={{ color: "rgb(197,197,205)", cursor: "pointer" }}
                    onclick="new PageContents().changePage('/login')"
                  >
                    Already registered?{" "}
                    <Link
                      to="/Login"
                      style={{
                        color: "rgb(197, 197, 205)",
                        textDecoration: "none",
                      }}
                    >
                      <u
                        style={{
                          borderBottom: "1px dashed",
                          textDecoration: "none",
                        }}
                      >
                        Log in instead
                      </u>
                    </Link>
                  </div>

                  <div style={{ color: "rgb(197,197,205)" }}>
                    <u
                      style={{
                        borderBottom: " 1px dashed",
                        textDecoration: "none",
                      }}
                    >
                      Account lock:{" "}
                    </u>
                    We discourage licence sharing. Your account will be
                    accessible from this device only
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div
            className="signup_lateral"
            style={{
              display: "table-cell",
              width: "30%",
              padding: "20px",
              textAlign: "left",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <img
                id="testimonial_photo"
                src={img}
                style={{ width: "150px", borderRadius: "50%" }}
              />
            </div>
            <div style={{ textAlign: "left" }}>
              <img
                src="/static/img/quote.png"
                style={{
                  width: "40px",
                  marginRight: "40px",
                  marginBottom: "20px",
                }}
              />
            </div>
            <i id="testimonial_quote">
              Arxena helps me map with large F100 accounts saving me hours of
              manual work for resourcing projects.
            </i>

            <span style={{ fontSize: "13pt" }}>
              <br></br>
              <strong style={{ fontWeight: "500" }} id="testimonial_name">
                Mannan Pacha
              </strong>{" "}
              |{" "}
            </span>
            <span id="testimonial_title" style={{ fontSize: "13pt" }}>
              Manager - Ernst & Young
            </span>
            <br />
            <img
              id="testimonial_logo"
              src="/static/img/EY_logo_2019.png"
              style={{ height: "20px" }}
            />
            <br />
            <br />
            <img
              id="linkedin_logo"
              src="/static/img/linkedin_logo.png"
              // onclick="window.open('https://www.linkedin.com/in/mannanpacha1988')"
              style={{ height: "20px", cursor: "pointer" }}
            />
            <div style={{ textAlign: "right" }}>
              <img
                src="/static/img/quote1.png"
                style={{ width: "40px", marginRight: "40px" }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                id="testimonial_photo"
                src="/static/img/NicolasDumoulin-300x300.jpg"
                style={{ width: "150px", borderRadius: "50%" }}
              />
            </div>
            <div style={{ textAlign: "left" }}>
              <img
                src="/static/img/quote.png"
                style={{
                  width: "40px",
                  marginRight: "40px",
                  marginBottom: "20px",
                }}
              />
            </div>
            {/* <i id="testimonial_quote">
              Arxena is a unique tool that I've been waiting for someone to
              build. In minutes you get a birds-eye view of their team structure
              and location. This process would take a day to do manually.
            </i>
            <span style={{fontSize:"13pt"}}>
              <br />
              <br />
              <strong style={{fontWeight:"500"}} id="testimonial_name">
                Nicolas Dumoulin
              </strong>{" "}
              |{" "}
            </span>
            <span id="testimonial_title" style={{fontSize:"13pt"}}>
              Senior Managing Director
            </span> */}
            <br />
            <img
              id="testimonial_logo"
              src="/static/img/michael_page.webp"
              style={{ height: "20px" }}
            />
            <br />
            <br />
            <img
              id="linkedin_logo"
              src="/static/img/linkedin_logo.png"
              // onclick="window.open('https://in.linkedin.com/in/nicolas-dumoulin-bb46242')"
              style={{ height: "20px", cursor: "pointer" }}
            />
            <div style={{ textAlign: "right" }}>
              <img
                src="/static/img/quote1.png"
                style={{ width: "40px", marginRight: "40px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
