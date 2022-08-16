import React from "react";
import "./weeklyBest.css";
import { useState } from "react";
// import {clothes} from '../data'

export default function WeeklyBest({ clothes }) {
  const [man, setForMan] = useState(true);

  const genderChange = () => {
    setForMan(!man);
  };
  return (
    <>
      {/* <!-- WEEKLY BEST --> */}
      <div style={{ background: "lightgray" }}>
        <div className="container-fluid p-2">
          <div className="text-center mb-2">
            <div className="new-clothes__header">WEEKLY BEST</div>
            <div className="new-clothes__link">
              <span className="clothes__link--hover text-center">
                {!man ? (
                  <div
                    className="new-clothes__link--item"
                    onClick={genderChange}
                    style={{ color: "black" }}
                  >
                    For him
                  </div>
                ) : (
                  <div
                    className="new-clothes__link--item"
                    style={{ color: "black" }}
                  >
                    For him<span className="active-link-new"></span>
                  </div>
                )}
              </span>
              <span className="clothes__link--hover text-center">
                {man ? (
                  <div
                    className="new-clothes__link--item"
                    onClick={genderChange}
                    style={{ color: "black" }}
                  >
                    For her
                  </div>
                ) : (
                  <div
                    className="new-clothes__link--item"
                    style={{ color: "black" }}
                  >
                    For her <span className="active-link-new"></span>
                  </div>
                )}
              </span>
            </div>
          </div>
        </div>

        <div className="container mt-2">
          <div className="row">
            {clothes.map(
              (shirt) =>
                shirt.forMan === man && (
                  <div
                    key={shirt.id}
                    className="col-xxl-3 col-lg-4 col-md-6 my-1 home__product"
                  >
                    <div className="">
                      <img
                        src={shirt.imgURL}
                        alt="product img"
                        className="img-fluid"
                      />
                    </div>
                    <div className="detail">
                      <div className="info mt-2">
                        <a
                          href="#product-link"
                          className="my-1"
                          style={{ color: "black", textDecoration: "none", color: "dimgray", fontSize: '160%' }}
                        >
                          {shirt.name}
                        </a>
                        <p className="mb-0" style={{color: 'black', fontWeight: '550'}}>
                          {shirt.price}
                          <span className="currency-symbol">₫</span>
                        </p>
                        <p>+4 màu</p>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
