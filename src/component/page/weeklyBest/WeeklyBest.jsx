import React from "react";
import "./weeklyBest.css";
import { useState } from "react";
import styled from "styled-components";
// import {clothes} from '../data'

export default function WeeklyBest({ clothes }) {
  const [man, setForMan] = useState(true);

  const ContainerDiv = styled.div`
    background: rgb(229 229 229);
  `
  const genderChange = () => {
    setForMan(!man);
  };
  return (
    <>
      <ContainerDiv>
        <div className="container-fluid">
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
        <div className="mt-3 mx-5">
          <div className="row">
            {clothes
              .filter((e) => e.percentDiscount >= 10)
              .map(
                (item) =>
                  item.forMan === man && (
                    <div
                      key={item.id}
                      className="col-xxl-3 col-lg-4 col-md-6 my-1 home__product"
                    >
                      <div className="position-relative">
                        <img
                          src={item.imgURL}
                          alt="product img"
                          className="img-fluid"
                        />
                        <div
                          className="position-absolute text-white text-center"
                          style={{
                            background: "#9d2b2b",
                            top: "0",
                            right: "0",
                            padding: "10px 0",
                            width: "60px",
                            fontWeight: "550",
                            fontSize: "16px",
                          }}
                        >
                          {item.percentDiscount}%
                        </div>
                      </div>
                      <div className="detail">
                        <div className="info mt-2">
                          <a
                            href="#product-link"
                            className="my-1"
                            style={{
                              textDecoration: "none",
                              color: "dimgray",
                              fontSize: "160%",
                            }}
                          >
                            {item.name}
                          </a>
                          <p
                            className="mb-0"
                            style={{ color: "black", fontWeight: "550" }}
                          >
                            {(
                              item.price -
                              (item.percentDiscount * item.price) / 100
                            ).toFixed(3)}
                            <span className="currency-symbol">₫</span>
                            <span
                              style={{
                                color: "#919191",
                                marginLeft: "6%",
                                fontSize: "85%",
                              }}
                              className="text-decoration-line-through"
                            >
                              {item.price}
                              <span className="currency-symbol">₫</span>
                            </span>
                          </p>
                          <p>+{item.color.length} màu</p>
                        </div>
                      </div>
                    </div>
                  )
              )}
          </div>
        </div>
      </ContainerDiv>
    </>
  );
}
