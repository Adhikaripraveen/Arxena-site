import React, { useState } from 'react'
import logo2 from "../img/arxena-logo/arxena-logo.png";
import img from "../img/mannan_pacha_dp.webp";
import {Link} from "react-router-dom";
const Login = () => {
const[show,setShow]=useState(false);
   const[logInput,setLogInput]=useState({
      email:"",
      password:""
   });
   const handleSubmit=(e)=>{
      e.preventDefault();
      setLogInput({
         email:"",
         password:""
      })
      setShow(true);
      
   }
   const handleChange=(e)=>{
      const{ name,value}=e.target;
      setLogInput((preData)=>({
         ...preData,
         [name]:value,
      }))
   }
  return (
	<>
	<div className="desk" style={{height:"100%"}}>
<div style={{display:"table", width:"100%", height:"100%"}}>
   <div style={{display:"table-cell", width:"70%", backgroundColor:"white", padding:"20px"}}>
    <Link to="/">  <img style={{width:"10vw",marginTop:"5px",cursor:"pointer"}} onclick="new PageContents().changePage('/#')" src={logo2} alt="logo"/></Link>
      <div className="shadow content_section" style={{width:"500px",padding:"30px",backgroundColor:"rgba(255,255,255)",borderRadius:" 5px", textAlign:"center", left:"0", right:"0",marginTop:"50px"}}>
         <div id="signup_form_content">
            <span style={{fontSize:"16pt",fontWeight:"300"}}>Welcome back!</span>
            <br/>
            <br/>
            <div style={{width: "90%" ,left:"5%",position:"relative"}}>
                 <div className="row">
                    <div className="col-sm-12">
                       <input id="email" type="text" className="form-control-custom enter_click" placeholder="Email" oninput="new SessionStorageUpdates().updateEmail(this)"
                       value={logInput.email}
                       name="email"
                       onChange={handleChange}
                       /><br/>
                    </div>
                    <div className="col-sm-12">
                       <input id="password" type="password" className="form-control-custom enter_click" placeholder="Password" oninput="new SessionStorageUpdates().updatePassword(this)"
                       name="password"
                          value={logInput.password}
                          onChange={handleChange}
                       /><br/>
                    </div>
                 </div>
                 <br/>
                 <div style={{width:"100%", textAlign:"center",position:"relative",padding:"20px"}}>
                    <div id="login_button_desktop" className="form_button enter_click" style={{margin: "auto",position: "absolute",left:"0",right:"0",top:"0",bottom:"0"}} onClick={handleSubmit}>Log in</div>
                 </div>
            </div>
            <div id="login_error" style={{marginTop:"20px"}}></div>
            <div style={{color:"rgb(197,197,205)",cursor:"pointer"}} onclick="new PageContents().changePage('/password_reset')">Forgot your password? <u style={{borderBottom:"1px dashed",textDecoration: "none"}}>Reset it here</u></div>
            <Link to="/SignUp" style={{textDecoration:"none",color:"rgb(197,197,205)"}}><div style={{color:"rgb(197,197,205)",cursor:"pointer"}} onclick="new PageContents().changePage('/signup')">Need an account? <u style={{borderBottom:" 1px dashed",textDecoration: "none"}}>Sign up for free</u></div></Link>
         </div>
         {
            show && <div className="showError">
               <p>Please fill the fields.</p>
            </div>
         }
      </div>
   </div>
    <div className="signup_lateral" style={{display:"table-cell", width:"30%",padding:"20px" ,
    height:"100vh" ,textAlign:"left"}}>
      <br/><br/>
      <div style={{textAlign:"center"}}>
         <img id="testimonial_photo" src={img} style={{width:"150px", borderRadius:"50%"}}/>
      </div>
      <div style={{textAlign:"left"}}>
         <img src="/static/img/quote.png" style={{width:"40px", marginRight:"40px",marginBottom:"20px"}}/>
      </div>
      <i id="testimonial_quote">Arxena helps me map with large F100 accounts saving me hours of manual work for resourcing projects.</i>
      <br/>
      <span style={{fontSize:"13pt"}}><br/><br/><strong style={{fontWeight:"500"}} id="testimonial_name">Mannan Pacha</strong> | </span>
      <span id="testimonial_title" style={{fontSize:"13pt"}}>Manager - Ernst & Young</span>
      <br/>
      <img id="testimonial_logo" src="/static/img/EY_logo_2019.png" style={{height:"20px"}}/>
      <br/>
      <br/>
      <img id="linkedin_logo" src="/static/img/linkedin_logo.png" onclick="window.open('https://www.linkedin.com/in/mannanpacha1988')" style={{height:'20px',cursor:"pointer"}}/>
      <div style={{textAlign:"right"}}>
         <img src="/static/img/quote1.png" style={{width:"40px", marginRight:"40px"}}/>
      </div>
   </div>
</div>
</div>
	</>
  )
}

export default Login
