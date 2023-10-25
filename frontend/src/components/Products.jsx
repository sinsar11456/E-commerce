import { styled } from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useState } from "react"; 

const Container = styled.div`
  padding: 20px;
  display: flex; 
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({cat,filters,sort}) => {

  condt [Products,setProducts] =useState([])
const F  

  return (
    <Container>
    {popularProducts.map((item) => (
      <Product item={item} key={item.id} />
    ))}
  </Container>
  );
}; 

export default Products;
