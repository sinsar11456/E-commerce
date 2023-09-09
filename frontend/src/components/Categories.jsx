import styled from "styled-components";
import { categories } from "../data";
import CategoryItems from "./CategoryItems";
import { mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  ${mobile({padding: "0px", flexDirection: "column"})}
`;

const Catagories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItems item={item} key={item.id} />
      ))}
      ;
    </Container>
  );
};

export default Catagories;
