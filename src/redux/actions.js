export const addOrderList = (data) => {
  return {
    type: "orderList/addOrderList",
    payload: data,
  };
};

export const updateOrderList = (data) => {
  return {
    type: "orderList/updateOrderList",
    payload: data,
  };
};

export const removeOrderList = (data) => {
  return {
    type: "orderList/removeOrderList",
    payload: data,
  };
};

export const addBill = (data) => {
  return {
    type: "bill/addBill",
    payload: data,
  };
};

export const updateBill = (data) => {
  return {
    type: "bill/updateBill",
    payload: data,
  };
};

export const removeBill = (data) => {
  return {
    type: "bill/removeBill",
    payload: data,
  };
};

export const search = (data) => {
  return {
    type: "product/Search",
    payload: data,
  }
}