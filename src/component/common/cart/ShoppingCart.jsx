import React from "react";
import { useSelector } from "react-redux";
import { orderListSelector } from "../../../redux/selectors";

export default function ShoppingCart() {
  const orderList = useSelector(orderListSelector);
  console.log(orderList);
  return (
    <div className="bg-primary text-white h5">
      <div className="container mt-5 py-5">
        {orderList.map((item) => (
          <div key={item.id} className="d-flex justify-content-start align-items-center my-2" style={{gap: '5px'}}>
            <div className="w-25">Tên Sản phẩm: {item.name}</div>
            <div className="w-25">Giá sản phẩm: {item.price}</div>
            <div className="w-25">Số lượng: {item.quantity}</div>
            <div className="w-25">Tổng đơn hàng: {item.total}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
