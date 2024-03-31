import { styled } from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Options = styled.option``;

const ProductList = () => {

  const location = useLocation(); //This hook returns the current location as an object
 
  const cat = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});

  const [sort, setSort] = useState("newest");

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
     
    })
  };
 

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilter}>
            <Options disabled selected>
              Color
            </Options>
            <Options>white</Options>
            <Options>black</Options>
            <Options>grey</Options>
            <Options>blue</Options>
            <Options>yellow</Options>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Options disabled selected>
              Size
            </Options>
            <Options>XS</Options>
            <Options>S</Options>
            <Options>M</Options>
            <Options>L</Options>
            <Options>XL</Options>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Options value="newest">Newest</Options>
            <Options value="asc">Price (asc)</Options>
            <Options value="desc">Price (desc)</Options>
          </Select>
        </Filter>
      </FilterContainer>
      <Products  cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
