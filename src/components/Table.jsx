import React from "react";
import TableRow from "./TableRow";
import { styled } from "styled-components";

const Table = ({ products, dispatch }) => {
  return (
    <StyledTable>
      <thead>
        <TableRow
          tdOrTh={"th"}
          arrayOfData={[
            "#",
            "Product",
            "Product name",
            "Price",
            "Quantity",
            "Remove",
          ]}
        />
      </thead>
      <tbody>
        <TableRow arrayOfData={products} dispatch={dispatch} />
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={"6"}>
            {products.reduce((prevValue, currProduct) => {
              return (
                prevValue +
                currProduct.productQuantity * currProduct.productPrice
              );
            }, 0)}
          </td>
        </tr>
      </tfoot>
    </StyledTable>
  );
};

export default Table;

const StyledTable = styled.table`
  width: 100%;
  padding: 20px;
`;
