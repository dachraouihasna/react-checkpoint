import { useState } from "react";

function AddProduct({ addProduct }) {
    const [newproduct, setNewProduct] = useState({
        name: "",
        price: "",
        id: Math.random
    })
    const handleChange = (e) => {
        setNewProduct({ ...newproduct, [e.target.name]: e.target.value })
    }
    console.log(newproduct)
    return (<>
        <input type="text" name="name" placeholder="Bag" onChange={handleChange} />
        <input type="text" name="price" placeholder="85" onChange={handleChange} />
        <button onClick={addProduct(newproduct)} >Add</button>
    </>);
}

export default AddProduct;