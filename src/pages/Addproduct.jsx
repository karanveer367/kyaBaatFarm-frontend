import React, { useState } from "react";
// import axios from "axios";

const AddProduct = () => {
    const [productData, setProductData] = useState({
        name: "",
        price: "",
        unit: "Kg",
        quantity: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleImageChange = (e) => {
        setProductData({ ...productData, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append("name", productData.name);
            formData.append("price", productData.price);
            formData.append("unit", productData.unit);
            formData.append("quantity", productData.quantity);
            formData.append("image", productData.image);

            // const res = await axios.post(
            //     "http://localhost:5100/api/addproduct", // adjust to your backend route
            //     formData,
            //     {
            //         headers: {
            //             "Content-Type": "multipart/form-data",
            //         },
            //     }
            // );

            alert("Product added successfully!");
            setProductData({
                name: "",
                price: "",
                unit: "Kg",
                quantity: "",
                image: null,
            });
        } catch (error) {
            console.error(error);
            alert("Error adding product. Please try again.");
        }
    };

    return (
        <div style={styles.container}>
            <h2>Add Your Product</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={productData.name}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price per "
                    value={productData.price}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <select
                    name="unit"
                    value={productData.unit}
                    onChange={handleChange}
                    style={styles.input}
                >
                    <option value="Kg">Kg</option>
                    <option value="Dozen">Dozen</option>
                    <option value="Piece">Piece</option>
                    <option value="Gram">Gram</option>
                </select>
                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={productData.quantity}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>
                    Add Product
                </button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        fontFamily: "sans-serif",
        backgroundColor :"white "
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    input: {
        padding: "10px",
        fontSize: "16px",
    },
    button: {
        padding: "10px",
        fontSize: "16px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default AddProduct;