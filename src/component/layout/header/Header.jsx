import React, { useEffect, useState } from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// export default function Header() {
//     return (
//         <>
//             <nav className="navbar navbar-expand-md" id="toptop">
//                 <div className="container">
//                     <a className="navbar-brand" href="/">
//                         <img src="https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/98/4d/3f/984d3f69-b706-ec8b-e379-e2c5213894a3/source/512x512bb.jpg"
//                             alt="logo" className="img-logo" />
//                     </a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
//                         data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
//                         aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center container">
//                             <li className="nav-item">
//                                 <a className="nav-link active" aria-current="page" href="/">TRANG CHỦ</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="/">SALE NỬA GIÁ</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="/">NAM</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="/">NỮ</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link" href="/">HELIANTHUS</a>
//                             </li>
//                         </ul>

//                         <div className="d-flex justify-content-center">
//                             <i className="fas fa-search"></i>
//                             <i className="fas fa-shopping-bag"></i>
//                             <i className="far fa-heart"></i>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

function Header() {
  const [page, setPage] = useState()

  const handleClick = (e) => {
    setTimeout(
      setPage(e), 10000
    )
  }

  useEffect(()=> {
    console.log('page',page);
  },[page])

  return (
    <>
      <Navbar
        bg="white"
        expand="lg"
        className="position-fixed"
        style={{ minHeight: "50px" }}
      >
        <Container>
          <Navbar.Brand href="/" className="m-0 p-0" onClick={()=>handleClick('home')}>
            <i className="far fa-snowflake" style={{ fontSize: "150%" }}></i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-auto">
              <Nav.Link className="nav-item" href="/home" onClick={()=>handleClick('home')}>
                <span className="nav-link">TRANG CHỦ</span>
              </Nav.Link>
              <Nav.Link className={`nav-item ${page === 'sale' ? 'active' : ''}`} href="/sale" onClick={()=>handleClick('sale')}>
                <span className="nav-link">SALE</span>
              </Nav.Link>
              <Nav.Link className="nav-item" href="/male" onClick={()=>handleClick('male')}>
                <span className="nav-link">NAM</span>
              </Nav.Link>
              <Nav.Link className="nav-item" href="/female" onClick={()=>handleClick('female')}>
                <span className="nav-link">NỮ</span>
              </Nav.Link>
              <Nav.Link className="nav-item" href="/up-to-49k" onClick={()=>handleClick('49k')}>
                <span className="nav-link">ĐỒNG GIÁ TỪ 49K</span>
              </Nav.Link>
            </Nav>
            <div className="nav-icon">
              <i className="fas fa-search"></i>
              <i className="fas fa-shopping-bag"></i>
              <i className="far fa-heart"></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
