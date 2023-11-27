import { useState } from "react";
import "./newProduct.css";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat,setCat] = useState([])

  const handleChange = (e)=>{
    setInputs(prev=>{
      return {...prev, [e.target.name]:e.target.value}
    })
  }
  const handleCat = (e)=>{
     setCat(e.target.value.split(","));
  };
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label> 
          <input type="file" id="file" onChange={e=>setFile(e.target.files)[0]} />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input name="title" type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input name="desc" type="text" placeholder="Description..." onChange={handleChange} />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input name="price" type="number" placeholder="100" onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>categories</label>
          <input type="text" placeholder="jeans,skirt" onChange={handleCat}/>
        </div>
        <div name="stock" className="addProductItem">
          <label>Stock</label>
          <select onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">NO</option>
          </select>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
