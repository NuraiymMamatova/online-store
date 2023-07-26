import { useReducer } from "react";
import { styled } from "styled-components";
import "./App.css";
import Card from "./components/Card";
import Table from "./components/Table";

const arrayOfProducts = [
  {
    productImage:
      "https://www.gardeningknowhow.com/wp-content/uploads/2021/07/strawberry.jpg",
    productName: "Strawberry",
    productPrice: 1,
    id: 1,
  },
  {
    productImage:
      "data:image/jpeg;base64,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",
    productName: "Lemon",
    productPrice: 2,
    id: 2,
  },
  {
    productImage:
      "https://www.angelica.it/media/catalog/product/cache/a85b4b0e425e984211a5866315534d0b/k/i/kiwi.jpg",
    productName: "Kiwi",
    productPrice: 3,
    id: 3,
  },
];

const reducer = (prevState, action) => {
  const payload = action.payload;
  switch (action.type) {
    case "ADD":
      const orders = [...prevState.orders, payload];
      localStorage.setItem("ORDERS", JSON.stringify(orders));
      return { ...prevState, orders };
    case "CHANGED_ARRAY":
      localStorage.setItem("ORDERS", JSON.stringify(payload));
      return { ...prevState, orders: payload };
    case "ORDER_FRUIT":
      const forOrderAndButton = [
        ...new Map(
          [...prevState.forOrderAndButton, payload].map((product) => [
            product["productId"],
            product,
          ])
        ).values(),
      ];
      localStorage.setItem(
        "FOR_ORDER_AND_BUTTON",
        JSON.stringify(forOrderAndButton)
      );
      return {
        ...prevState,
        forOrderAndButton,
      };
    default:
      return prevState;
  }
};

const initialState = {
  orders: JSON.parse(localStorage.getItem("ORDERS")) || [],
  forOrderAndButton:
    JSON.parse(localStorage.getItem("FOR_ORDER_AND_BUTTON")) || [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StyledApp>
      <StyledCardBox>
        {arrayOfProducts.map((product) => (
          <Card
            key={product.id}
            productId={product.id}
            productImage={product.productImage}
            productName={product.productName}
            productPrice={product.productPrice}
            dispatch={dispatch}
            changeAddedState={{ state: state.forOrderAndButton, dispatch }}
          />
        ))}
      </StyledCardBox>
      <Table
        products={state.orders}
        dispatch={dispatch}
        setChangeIsAdded={dispatch}
      />
    </StyledApp>
  );
}

export default App;

const StyledCardBox = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 30px;
`;

const StyledApp = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

// const setBg = () => {
//   const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   document.body.style.backgroundColor = "#" + randomColor;
//   // color.innerHTML = "#" + randomColor;
// };
// setBg()
