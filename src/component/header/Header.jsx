import React from 'react'
import './header.css'

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-md" id="toptop">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src="https://is2-ssl.mzstatic.com/image/thumb/Purple124/v4/98/4d/3f/984d3f69-b706-ec8b-e379-e2c5213894a3/source/512x512bb.jpg"
                            alt="logo" className="img-logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center container">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">TRANG CHỦ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">SALE NỬA GIÁ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">NAM</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">NỮ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">HELIANTHUS</a>
                            </li>
                        </ul>

                        <div className="d-flex justify-content-center">
                            <i className="fas fa-search"></i>
                            <i className="fas fa-shopping-bag"></i>
                            <i className="far fa-heart"></i>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
