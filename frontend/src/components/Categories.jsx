import styled from "styled-components";
import { categories } from "../data";
import CategoryItems from "./CategoryItems";

const Container = styled.div`
  display: flex;
  padding: 20px;
`;

const Catagories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItems item={item} />
      ))}
      ;
    </Container>
  );
};

export default Catagories;
