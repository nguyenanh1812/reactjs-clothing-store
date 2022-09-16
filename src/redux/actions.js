export const addOrderList = (data) => {
  return {
    type: "orderList/addRecipe",
    payload: data,
  };
};

export const updateOrderList = (data) => {
  return {
    type: "orderList/updateRecipe",
    payload: data,
  };
};

export const removeOrderList = (data) => {
  return {
    type: "orderList/removeRecipe",
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
