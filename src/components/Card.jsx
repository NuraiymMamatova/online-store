import React, { useRef } from "react";
import { styled } from "styled-components";
import Button from "./Button";

const Card = ({
  productId,
  productImage,
  productName,
  productPrice,
  dispatch,
  changeAddedState,
}) => {
  const { state, dispatch: dispatchFromObject } = changeAddedState;
  const isDisabled = useRef(false);

  const onAddProduct = () => {
    dispatch({
      type: "ADD",
      payload: {
        id: productId,
        productImage,
        productName,
        productPrice,
        productQuantity: 1,
      },
    });

    dispatchFromObject({
      type: "ORDER_FRUIT",
      payload: { productId, isAdded: true },
    });
    isDisabled.current = true;
  };

  state.forEach((product) => {
    if (product.productId === productId) {
      isDisabled.current = product.isAdded;
    }
  });

  return (
    <StyledCard>
      <StyledImage src={productImage} alt={productName} />
      <InfoBox>
        <p>
          {productName} - $ {productPrice}
        </p>
        <Button
          disabled={isDisabled.current}
          onClick={onAddProduct}
          bgColor={"#74c686"}
          padding={"5px 20px"}
        >
          {isDisabled.current ? "Added" : "Add"}
        </Button>
      </InfoBox>
    </StyledCard>
  );
};

const StyledCard = styled.li`
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
`;

const StyledImage = styled.img`
  object-fit: cover;
  height: 20vh;
`;
export default Card;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 15px;
`;
