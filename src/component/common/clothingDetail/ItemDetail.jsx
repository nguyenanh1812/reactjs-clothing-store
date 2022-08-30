import React from "react";

export default function ItemDetail({ item }) {
  return (
    <div className="container">
      <div key={item.id} className="row" style={{ padding: "2%" }}>
        <div className="position-relative col-md-6 p-0">
          <img src={item.imgURL} alt="product img" className="img-fluid" />
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

        <div className="detail col-md-6 align-self-center">
          <div className="info mt-2">
            <div
              className="my-1"
              style={{
                textDecoration: "none",
                color: "dimgray",
                fontSize: "160%",
              }}
            >
              {item.name}
            </div>
            <p className="mb-0" style={{ color: "black", fontWeight: "550" }}>
              {(item.price - (item.percentDiscount * item.price) / 100).toFixed(
                3
              )}
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

              {item.color.map((color, index) => (
                <div key={index} className="mb-3">
                 <input type="radio" id={`color-${color}`} name="color" value={color} />
                  <label for={`color-${color}`}> {color}</label><br />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
