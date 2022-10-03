import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { orderListSelector } from "../../../redux/selectors";
import ItemCart from "./ItemCart";

export default function ShoppingCart() {
  // const [orderList, setOrderList] = useState(useSelector(orderListSelector));
  const [orderList, setOrderList] = useState();
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("clothingKey"))) {
      setOrderList(JSON.parse(localStorage.getItem("clothingKey")));
    }
  }, []);

  return (
    <>
      <h3 className="container mt-5 pt-5">|Giỏ hàng</h3>
      {!orderList ? (
        <div> Chưa có sản phẩm nào</div>
      ) : (
        <div className="text-black" style={{ minHeight: "500px" }}>
          <div className="container py-2">
            <table className="table">
              <thead>
                <tr className="table-active align-middle" style={{height: '60px'}}>
                  <th>
                    <input
                      type="checkbox"
                      className="form-check-input mt-0"
                      style={{ boxShadow: "none" }}
                    />
                  </th>
                  <th >Sản phẩm</th>
                  <th>Phân loại hàng</th>
                  <th>Đơn Giá</th>
                  <th>Số lượng</th>
                  <th>Số tiền</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {orderList.map((item) => (
                  <ItemCart item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
