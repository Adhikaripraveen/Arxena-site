import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../img/arxena-logo/arxena-logo.png";
import upload from "../img/new_upload.png";
import gpt from "../img/powered_by_gpt4.png";
import {Link} from "react-router-dom";

const Home = () => {
  return (
 
    <div className="desk" id="main_container">
      <div style={{padding:"20px", height:"85vh"}}>
        <div style={{display:"table", width:"100%"}}>
         
          <div style={{display:"table-cell",verticalAlign:"middle",}}></div>
          <div
            id="sign_up_button_front_page"
            style={{display:"table-cell", verticalAlign:"middle", width: "190px",textAlign:"right"}}
          >
           <Link to="/SignUp">
           <div
              className="landing_white_button"
              style={{display:"inline-block", backgroundColor:"rgb(36,116,204)",borderColor:"rgb(36,116,204)", color:"white",width:"150px"}}
              onclick="new PageContents().changePage('/signup')"
            >
              Sign up
            </div>
           </Link>
          </div>
        
        <div
            id="log_in_button_front_page"
            style={{display:"table-cell", verticalAlign:"middle", width: "190px", textAlign:"right",paddingRight:"20px"}}
          >
            <Link to="/Login">  
            <div
              className="landing_white_button"
              style={{display:"inline-block", backgroundColor:"white",border:"1px solid rgb(36,116,204)",color:"rgb(36,116,204)", width:"150px"}}
              onclick="new PageContents().changePage('/login')"
            >
              Log in
            </div>
          </Link>
          </div>
        </div>

        <div style={{display:"table", width:"100%",paddingLeft:"20px",paddingRight:"20px",height:"100%"}}>
          <div style={{display:"table", width:"40%", marginLeft:"30%", textAlign:"center",verticalAlign: "middle",paddingTop:"8%"}}>
            
            <img
              style={{width:"15vw",marginTop:"5px",cursor: "pointer"}}
              onclick="new PageContents().changePage('/#')"
              src={logo}
              alt="logo"
            />
            <input
              id="search_bar_front_page"
              value=""
              className="search-bar-front"
              autocomplete="new-company-entered-by-user"
              onblur="new SearchBarLoadersDropdowns().homePageInputElemOnblur(this)"
              onfocus="new SearchBarLoadersDropdowns().homeInputElemOnfocus(this)"
              placeholder="🔍 Search any company's org chart"
              style={{ display:"table", width:"100%",borderColor:"rgb(232,232,232)", placeholderColor:"rgb(232,232,232)",height:"3rem",marginTop:"8%"}}
              oninput="new SearchBarLoadersDropdowns().updateHomePageSearchKeyword(this)"
              onkeypress="if (event.keyCode === 13) homePageSearch()"
            />
            <input
              id="search_bar_front_page_raw_text"
              value=""
              className="search-bar-front"
              autocomplete="new-raw_text-entered-by-user"
              onblur="new SearchBarLoadersDropdowns().homePageInputElemOnblur(this)"
              onfocus="new SearchBarLoadersDropdowns().homeInputElemOnfocus(this)"
              placeholder="🔍 Which people are you looking for?"
              style={{display:"table",width:"100%",borderColor:"rgb(232,232,232)", placeholderColor:"rgb(232,232,232)",height:"3rem", marginTop:"8%",display:"none"}}
              onkeypress="if (event.keyCode === 13) new SearchBarLoadersDropdowns().updateHomePageSearchRawTextKeyword(this)"
            />

            <p
              id="error_home_page"
              style={{fontSize:"12px", float:"left",marginLeft:"20px",display:"none"}}
            ></p>

            <div
              id="front_page_search_bar_loader"
              style={{textAlign:"right", marginTop:" -6.5%",marginLeft: "-1%",marginBottom:"2%", width:"10%", marginLeft:"85%"}}
            >
              <div
                id="button_dropdown_search_jd"
                onclick="new SearchBarLoadersDropdowns().placeDropdownBelowSearchforJDInput()"
                style={{cursor:"pointer",textAlign:"right",marginTop: "-6.25%"}}
              >
                <img style={{width:"25px"}} src={upload} alt="upload"/>
              </div>
            </div>
           
            <div id="home_page_jd_dropdown_element"></div>
          </div>
          <div style={{marginTop:"5%"}}>
            <center>
              <img
                src={gpt}
                alt="Open AI Logo"
                width="200"
              />
            </center>
          </div>
        </div>
      </div>
      <div style={{width:"100%",bottom:"0%", textAlign:"center"}}>
        <div style={{display:"table",width:"100%"}}>
          <div style={{display:"table-cell", width:"100%" ,paddingLeft:"20px",paddingTop:"2%", textAlign:"left"}}>
            <div style={{paddingLeft:"25px",display:"inline-block"}}>
            OrgGPT - Talent Identification Software for Ambitious Companies
            </div>
            <br></br>
            <a style={{fontSize:"10pt"}} href="/pricing">
              Pricing
            </a>{" "}
            |{" "}
            <a style={{fontSize:"10pt"}} href="/eula">
              Terms of Service
            </a>{" "}
            |{" "}
            <a style={{fontSize:"10pt"}} href="/privacy">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              style={{fontSize:"10pt"}}
              href="javascript:"
              onclick="new UtilityFunctions().openHelpModal()"
            >
              How to Use
            </a>{" "}
            |{" "}
            <a
              style={{fontSize:"10pt"}}
              href="/download_chrome_extension"
              onclick="new UtilityFunctions().openHelpModal()"
            >
              Download Extension
            </a>
          </div>
         
        </div>
      </div>
    </div>
    
  );
};

export default Home;
