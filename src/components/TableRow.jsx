import React from "react";
import Button from "./Button";
import { styled } from "styled-components";

const TableRow = ({ tdOrTh, arrayOfData = [], dispatch }) => {
  const onDeleteOrder = (id) => {
    const clearedArray = arrayOfData.filter((product) => {
      return product.id !== id;
    });

    dispatch({
      type: "ORDER_FRUIT",
      payload: { productId: id, isAdded: false },
    });

    dispatch({ type: "CHANGED_ARRAY", payload: clearedArray });
  };

  const onMinus = (id) => {
    const changedArray = arrayOfData.filter((product) => {
      if (product.id === id) {
        if (product.productQuantity === 1) {
          return onDeleteOrder(id);
        }
        return --product.productQuantity;
      }
      return product;
    });

    dispatch({ type: "CHANGED_ARRAY", payload: changedArray });
  };

  const onPlus = (id) => {
    const changedArray = arrayOfData.filter((product) => {
      if (product.id === id) {
        return ++product.productQuantity;
      }
      return product;
    });

    dispatch({ type: "CHANGED_ARRAY", payload: changedArray });
  };

  return (
    <>
      {tdOrTh === "th" ? (
        <StyledTableRow>
          {arrayOfData.map((data) => (
            <th key={data}>
              <p>{data}</p>
            </th>
          ))}
        </StyledTableRow>
      ) : (
        <>
          {arrayOfData.map((data) => (
            <StyledTableRow key={data.id}>
              <td>
                <p>{data.id}</p>
              </td>
              <td>
                <StyledImage src={data.productImage} alt={data.productName} />
              </td>
              <td>
                <p>{data.productName}</p>
              </td>
              <td>
                <p>{data.productPrice}</p>
              </td>
              <QuantityWrapper>
                <Button
                  onClick={() => onMinus(data.id)}
                  bgColor={"#18a1b9"}
                  padding={"5px"}
                >
                  -
                </Button>
                <p>{data.productQuantity}</p>
                <Button
                  onClick={() => onPlus(data.id)}
                  bgColor={"#18a1b9"}
                  padding={"5px"}
                >
                  +
                </Button>
              </QuantityWrapper>
              <td>
                <Button
                  onClick={() => onDeleteOrder(data.id)}
                  bgColor={"#db3546"}
                  padding={"10px"}
                >
                  Remove
                </Button>
              </td>
            </StyledTableRow>
          ))}
        </>
      )}
    </>
  );
};

export default TableRow;

const StyledImage = styled.img`
  object-fit: cover;
  height: 20vh;
`;

const QuantityWrapper = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 23vh;
  gap: 10px;
`;

const StyledTableRow = styled.tr`
  border-bottom: 10px solid #000;
`;
