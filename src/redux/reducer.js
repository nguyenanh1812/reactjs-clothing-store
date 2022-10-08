const initState = {
  orderList: [
    {
      id: 1,
      name: "quần",
      price: 1000,
      quantity: 3,
      total: 3000,
    },
    {
      id: 2,
      name: "áo",
      price: 2000,
      quantity: 2,
      total: 4000,
    },
  ],
  bill: [
    {
      id: 1,
      orderItem: [
        {
          name: "áo nè đẹp thế",
          price: 700000,
          quantity: 3,
          total: 2100000,
          size: ["S", "S", "L"],
          color: ["red", "red", "red"],
        },
        {
          name: "data test 2",
          price: 500000,
          quantity: 2,
          total: 1000000,
          size: ["S", "M", "L"],
          color: ["red", "yellow", "red"],
        },
      ],
      total: 3100000,
    },
  ],
};

const rootReducer = (state = initState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "orderList/addOrderList":
      return {
        ...state,
        orderList: [...state.orderList, action.payload],
      };

    case "orderList/updateOrderList":
      const orderList = [...state.orderList];
      const index = orderList.findIndex(
        (order) => order.id === action.payload.id
      );
      orderList[index] = action.payload;
      return { ...state, orderList: orderList };

    case "orderList/removeOrderList":
      const orderList1 = [...state.orderItem];
      const removeOrder = orderList.findIndex(
        (order) => order.id === action.payload.id
      );
      orderList1.splice(removeOrder, 1);
      return { ...state, orderList: orderList1 };

    case "bill/addBill":
      return {
        ...state,
        shoppingList: [...state.bill, action.payload],
      };

    case "bill/updateBill":
      const bill = [...state.bill];
      const index2 = bill.findIndex((b) => b.id === action.payload.id);
      bill[index2] = action.payload;
      return { ...state, bill: bill };

    case "bill/removeBill":
      const bill1 = [...state.bill];
      const removeBill = bill1.findIndex((b) => b.id === action.payload.id);
      bill1.splice(removeBill, 1);
      return { ...state, bill: bill1 };
    
    case "product/Search": 
    return  true;
    default:
      return state;
  }
};

export default rootReducer;
