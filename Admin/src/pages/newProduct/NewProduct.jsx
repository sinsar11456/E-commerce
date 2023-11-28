// import { useState } from "react";
// import "./newProduct.css";
// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
// import app from "../../firebase"
// import { useDispatch } from "react-redux"
// import { addProduct } from "../../redux/apiCalls";


// export default function NewProduct() {
//   const [inputs, setInputs] = useState({});
//   const [file, setFile] = useState(null);
//   const [cat, setCat] = useState([]);
//   const dispatch = useDispatch();

//   const handleChange = (e) => {
//     setInputs((prev) => {
//       return { ...prev, [e.target.name]: e.target.value };
//     });
//   }; 
//   const handleCat = (e) => {
//     setCat(e.target.value.split(","));
//   };


//   const handleClick = (e) => {
//     e.preventDefault()
//     //setting firebase to store images
//     const fileName = new Date().getDate() + file.name
//     const storage = getStorage(app)
//     const storageRef = ref(storage, fileName)
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     // Listen for state changes, errors, and completion of the upload.
//     uploadTask.on('state_changed',
//         (snapshot) => {
//             // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//             const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//             console.log('Upload is ' + progress + '% done');
//             switch (snapshot.state) {
//                 case 'paused':
//                     console.log('Upload is paused');
//                     break;
//                 case 'running':
//                     console.log('Upload is running');
//                     break;
//                     default: 
//             }
//         },
//         (error) => {
//             // A full list of error codes is available at
//             // https://firebase.google.com/docs/storage/web/handle-errors
//             switch (error.code) {
//                 case 'storage/unauthorized':
//                     // User doesn't have permission to access the object
//                     break;
//                 case 'storage/canceled':
//                     // User canceled the upload
//                     break;

//                 // ...

//                 case 'storage/unknown':
//                     // Unknown error occurred, inspect error.serverResponse
//                     break;
//                 default:
//             }
//         },
//         () => {
//             // Upload completed successfully, now we can get the download URL
//             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//                 const product = {...inputs, img: downloadURL, categories: cat};
//                 addProduct(product, dispatch)
//             });
//         }
//     );
// }
 
//   return (
//     <div className="newProduct">
//       <h1 className="addProductTitle">New Product</h1>
//       <form className="addProductForm">
//         <div className="addProductItem">
//           <label>Image</label>
//           <input
//             type="file"
//             id="file"
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//         </div>
//         <div className="addProductItem">
//           <label>Title</label>     
//           <input name="title" type="text" placeholder="Apple Airpods" />
//         </div>
//         <div className="addProductItem">
//           <label>Description</label>
//           <input
//             name="desc"
//             type="text"
//             placeholder="Description..."
//             onChange={handleChange}
//           />
//         </div>
//         <div className="addProductItem">
//           <label>Price</label>
//           <input
//             name="price"
//             type="number"
//             placeholder="100"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="addProductItem">
//           <label>categories</label>
//           <input type="text" placeholder="jeans,skirt" onChange={handleCat} />
//         </div>
//         <div name="stock" className="addProductItem">
//           <label>Stock</label>
//           <select onChange={handleChange}>
//             <option value="true">Yes</option>
//             <option value="false">NO</option>
//           </select>
//         </div>
//         <button onClick={handleClick} className="addProductButton">
//           Create
//         </button>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import styled from "styled-components"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from 'react-redux';

const AddProductContainer = styled.div`
    flex: 4;
    padding: 20px;
`;

const AddProductTitle = styled.h1``;

const AddProductForm = styled.form`
    margin-top: 10px;
`;

const AddProductItem = styled.div`
    width: 250px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
`;

const AddProductLabel = styled.label`
    margin-bottom: 10px;
    color: gray;
    font-weight: 600;
`;

const AddProductInput = styled.input`
    padding: 10px;
`;

const AddProductSelect = styled.select`
    padding: 10px;
`;

const AddProductOption = styled.option``;

const AddProductButton = styled.button`
    background-color: darkblue;
    color: white;
    width: 100px;
    border: none;
    cursor: pointer;
    padding: 7px 10px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 30px;
`;

const AddProduct = () => {
    const [input, setInput] = useState({})
    const [file, setFile] = useState(null)
    const [cat, setCat] = useState([])
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setInput(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleCat = (e) => {
        setCat(e.target.value.split(","))
    }

    const handleClick = (e) => {
        e.preventDefault()
        //setting firebase to store images
        const fileName = new Date().getDate() + file.name
        const storage = getStorage(app)
        const storageRef = ref(storage, fileName)
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
            (snapshot) => {
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                        default: 
                }
            },
            (error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    // ...

                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                    default:
                }
            },
            () => {
                // Upload completed successfully, now we can get the download URL
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    const product = {...input, img: downloadURL, categories: cat};
                    addProduct(product, dispatch)
                });
            }
        );
    }

    return (
        <AddProductContainer>
            <AddProductTitle>Add Product</AddProductTitle>
            <AddProductForm>
                <AddProductItem>
                    <AddProductLabel>Image</AddProductLabel>
                    <AddProductInput name="img" type="file" id="file" onChange={e => setFile(e.target.files[0])} />
                </AddProductItem>
                <AddProductItem>
                    <AddProductLabel>Title</AddProductLabel>
                    <AddProductInput name="title" placeholder="Apple Airpods" input="text" onChange={handleChange} />
                </AddProductItem>
                <AddProductItem>
                    <AddProductLabel>Description</AddProductLabel>
                    <AddProductInput name="desc" placeholder="description" input="text" onChange={handleChange} />
                </AddProductItem>
                <AddProductItem>
                    <AddProductLabel>Price</AddProductLabel>
                    <AddProductInput name="price" placeholder="100" input="number" onChange={handleChange} />
                </AddProductItem>
                <AddProductItem>
                    <AddProductLabel>Category</AddProductLabel>
                    <AddProductInput placeholder="jeans, skirt" input="text" onChange={handleCat} />
                </AddProductItem>
                <AddProductItem>
                    <AddProductLabel>Stock</AddProductLabel>
                    <AddProductSelect name="inStock" onChange={handleChange} >
                        <AddProductOption value="true">Yes</AddProductOption>
                        <AddProductOption value="false">No</AddProductOption>
                    </AddProductSelect>
                </AddProductItem>
            </AddProductForm>
            <AddProductButton onClick={handleClick}>Create</AddProductButton>
        </AddProductContainer>
    )
}

export default AddProduct