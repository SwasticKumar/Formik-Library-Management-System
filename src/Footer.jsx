import React from "react";

function Footer() {
  return (
    <footer className="py-5 bg-dark"  style={{marginTop:"40%"}}>  
      <div className="container text-center">
     
       <br/>
        <p className="m-0 text-center fst-normal text-white">
          Copyright ©{" "}
          <a
            href="#"
            style={{
              textDecoration: "none",
              color: " #32CD32",
              fontWeight: "bold",
            }}
          >
           <img className="text-center" src="/image/swastic kumar.png" alt="logo" style={{width:"100px"}}/>
          </a>{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
