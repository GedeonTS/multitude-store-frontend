// ShoppingCartTable.js
import React from 'react';
import styled from 'styled-components';

// Styled components
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;

const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const ShoppingCartTable = ({ cartItems }) => {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Product</TableHeader>
          <TableHeader>Image</TableHeader>
          <TableHeader>Quantity</TableHeader>
          <TableHeader>Price</TableHeader>
          <TableHeader>Total</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {cartItems.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.productName}</TableCell>
            <TableCell><img style={{ width:"100px" }} src={item.image} alt={item.productName}/></TableCell>
            <TableCell>{item.quantity}</TableCell>
            <TableCell>${item.price.toFixed(2)}</TableCell>
            <TableCell>${(item.quantity * item.price).toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default ShoppingCartTable;
