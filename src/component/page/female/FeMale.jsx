import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { clothes } from "../../../data";

export default function FeMale() {
  useEffect(() => {
    document.title = "Quần áo cho nữ";
  }, []);
  return (
    <>
      <div className="text-center h2 pt-5">FeMale</div>
      <div className="d-flex flex-wrap" style={{ padding: "1%" }}>
        {clothes.filter(e=>!e.forMan).map((item) => (
          <div
            key={item.id}
            className="col-xxl-3 col-lg-4 col-md-6 my-1 home__product"
            style={{ padding: "2%" }}
          >
            <Link to={`/products-${item.id}`}>
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
            </Link>
            <div className="detail">
              <div className="info mt-2">
                <Link
                  to={`/products-${item.id}`}
                  className="my-1"
                  style={{
                    textDecoration: "none",
                    color: "dimgray",
                    fontSize: "160%",
                  }}
                >
                  {item.name}
                </Link>
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
        ))}
      </div>
    </>
  );
}
