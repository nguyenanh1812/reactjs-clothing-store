import React, { useState } from "react";
import "./itemdetail.css";
import SimilarItem from "./SimilarItem";

export default function ItemDetail({ item, listItem }) {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("S");
  const [quantity, setQuantity] = useState(1);

  const handleSelectColor = (event) => {
    setColor(event.target.value);
    console.log(color);
  };

  const handleSelectSize = (event) => {
    setSize(event.target.value);
    console.log(size)
  };

  const handleChangeQuantity = (event) => {
    if (event.target.value >= item.quantity) {
      // alert("Số lượng sản phẩm không đủ!");
      setQuantity(item.quantity);
    } else if (event.target.value <= 1) {
      setQuantity(1);
    } else {
      setQuantity(event.target.value);
    }
  };

  const minsQuantity = () => {
    if (quantity < 2) {
      return setQuantity(1);
    }
    setQuantity((pre) => pre - 1);
  };

  const plusQuantity = () => {
    if (quantity >= item.quantity) {
      // alert("Số lượng sản phẩm không đủ!");
      return setQuantity(item.quantity);
    }
    setQuantity((pre) => pre + 1);
  };

  return (
    <div style={{ background: "#fbfbfb" }}>
      <div className="container">
        <div className="row" style={{ padding: "2%" }}>
          <div className="position-relative col-md-6 p-0">
            <img
              src={item.imgURL}
              alt="product img"
              className="img-fluid h-100"
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

          <div className="detail col-md-6">
            <div className="info">
              <div
                className="py-2 d-inline pe-3"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "550",
                  borderBottom: "1px solid black",
                  fontSize: "40px",
                }}
              >
                {item.name}
              </div>

              <p
                className="mb-0 h2 py-3"
                style={{ color: "black", fontWeight: "500" }}
              >
                <i className="fa-solid fa-tag">
                  {" "}
                  {(
                    item.price -
                    (item.percentDiscount * item.price) / 100
                  ).toFixed(3)}
                  <span className="currency-symbol">₫</span>
                </i>
                <span
                  style={{
                    color: "#919191",
                    marginLeft: "6%",
                    fontSize: "70%",
                  }}
                  className="text-decoration-line-through"
                >
                  {item.price}
                  <span className="currency-symbol">₫</span>
                </span>
              </p>
              <div
                style={{
                  marginTop: "5px",
                  padding: "5px 8px",
                  width: "100%",
                  background: "#E9F7FA ",
                  borderTop: "3px #24C3FD solid",
                }}
              >
                <i className="fa-solid fa-qrcode"></i>
                <span
                  className="ps-2"
                  style={{ fontWeight: "550", opacity: "0.9" }}
                >
                  Giảm 30K cho SP từ 100K khi thanh toán qua VNPay
                </span>
              </div>
              <div
                className="mb-3"
                style={{
                  fontWeight: "550",
                  color: "dimgray",
                  fontSize: "16px",
                  fontFamily: "arial",
                }}
              >
                <div className="mt-2">
                  Trạng Thái:{" "}
                  {item.quantity
                    ? `Còn Hàng ${item.quantity} sản phẩm`
                    : "Hết Hàng"}
                </div>

                <div>Chất liệu: {item.fabric}</div>
                <div>
                  QUY ĐỊNH ĐỔI TRẢ: <br />
                  - Đối với mặt hàng giảm giá, vui lòng không đổi trả. <br />-
                  Đối với hàng mới, shop chỉ nhận đổi các sản phẩm bị lỗi sản
                  xuất còn nguyên tag chưa qua sử dụng trong vòng 3 ngày...
                </div>
              </div>
              <hr />
              <p className="d-flex h5 flex-wrap pt-2">
                {item.color.length} màu:
                {item.color.map((color, index) => (
                  <div
                    className="checked-input ps-1"
                    key={index}
                    onChange={handleSelectColor}
                  >
                    <input
                      type="radio"
                      name="color"
                      id={`radio-${color}`}
                      value={color}
                    />
                    <label htmlFor={`radio-${color}`}>
                      <span className={`bg-${color} bg-color`}></span>
                    </label>
                  </div>
                ))}
              </p>
              <p className="d-flex h5 flex-wrap mt-3 align-items-center">
                Kích cỡ:
                {item.size.map((size, index) => (
                  <div
                    className="checked-input ps-1"
                    key={index}
                    onChange={handleSelectSize}
                  >
                    <input
                      type="radio"
                      name="size"
                      id={`radio-${size}`}
                      value={size}
                    />
                    <label htmlFor={`radio-${size}`} className="bg-size">
                      <span className="text-center">{size}</span>
                    </label>
                  </div>
                ))}
              </p>
              <div className="my-3 quantity pb-2">
                <p className="h5 my-2 mt-3">Số lượng</p>
                <p className="qty">
                  <button
                    className="quantity-minus"
                    aria-hidden="true"
                    onClick={minsQuantity}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <input
                    type="number"
                    name="qty"
                    id="qty"
                    value={quantity}
                    onChange={handleChangeQuantity}
                  />
                  <button
                    className="quantity-plus"
                    aria-hidden="true"
                    onClick={plusQuantity}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </p>
              </div>
              <hr />
              <div style={{ fontSize: "17px", fontWeight: "550" }}>
                <p>
                  Mã sản phẩm: P0{item.id}T{item.typeId}
                </p>
                <p
                  className="d-flex justify-content-start align-items-center"
                  style={{ gap: "5%", cursor: "pointer" }}
                >
                  Chia sẻ:
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="text-black"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.google.com/intl/vi/gmail/about/"
                    target="_blank"
                    className="text-black"
                  >
                    <i className="fa-brands fa-google"></i>
                  </a>
                  <a
                    href="https://twitter.com/?lang=vi"
                    target="_blank"
                    className="text-black"
                  >
                    {" "}
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.pinterest.com/"
                    target="_blank"
                    className="text-black"
                  >
                    <i className="fa-solid fa-frog"></i>
                  </a>
                  <a
                    href="https://www.skype.com/en/"
                    target="_blank"
                    className="text-black"
                  >
                    <i className="fa-brands fa-skype"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "1%", fontWeight: "550", color: "dimgray" }}>
          <div
            className="h5 text-black d-flex mb-3"
            style={{ gap: "5%", borderBottom: "1px solid lightgray" }}
          >
            <span
              style={{ borderBottom: "2px solid black", cursor: "pointer" }}
            >
              Mô tả sản phẩm
            </span>{" "}
            <span style={{ cursor: "pointer" }}>Bình luận</span>
          </div>
          <p>Chất liệu: {item.fabric}</p>
          <p>QUY ĐỊNH ĐỔI TRẢ: </p>
          <p>- Đối với mặt hàng giảm giá, vui lòng không đổi trả. </p>
          <p>
            - Đối với hàng mới, shop chỉ nhận đổi các sản phẩm bị lỗi sản xuất
            còn nguyên tag chưa qua sử dụng trong vòng 3 ngày kể từ ngày nhận
            được hàng.
          </p>
          <p>
            - Nhận đổi trả size trong vòng 3 ngày kể từ ngày nhận hàng, phí ship
            đổi size quý khách vui lòng thanh toán 2 chiều.
          </p>
          <p>HƯỚNG DẪN CHỌN SIZE: </p>
          <p>- Size S: 1m65-1m72, 53kg-65kg </p>
          <p>- Size M: 1m73-1m78, 66kg-72kg </p>
          <p>- Size L: 1m80-1m85, 72kg-85kg</p>
        </div>
        <div className="row">
          <SimilarItem item={item} listItem={listItem} />
        </div>
      </div>
    </div>
  );
}
