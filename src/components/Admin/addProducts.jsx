import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
const AddProduct = () => {
    const [products, setProducts] = useState([]);
    const [productDetails, setProductDetails] = useState({
        id:uuidv4(),
        name: '',
        price: '',
        currency: 'INR',
        image: null,
    });

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(storedProducts);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductDetails({
            ...productDetails,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        setProductDetails({
            ...productDetails,
            image: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProducts = [...products, productDetails];
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        setProductDetails({
            name: '',
            price: '',
            currency: 'INR',
            image: null,
        });
    };

    return (
        <div className='mb-40 h-full text-white text-xl flex flex-col items-center gap-5 p-5 relative'>
            <h1 className='text-4xl font-black border-b-8 border-gray-600'>Admin Panel</h1>
            <form onSubmit={handleSubmit} className='h-[60vh] w-full flex flex-col items-center gap-5'>
                <div className='flex flex-col w-[100%] gap-2 h-20'>
                    <label>Product Name:</label>
                    <input
                        className='h-full bg-gray-600 outline-red-800 p-2'
                        type="text"
                        name="name"
                        value={productDetails.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='flex flex-col w-[100%] gap-2 h-20'>
                    <label>Price:</label>
                    <input
                        className='h-full bg-gray-600 outline-red-800 p-2'
                        type="number"
                        name="price"
                        value={productDetails.price}
                        onChange={handleInputChange}
                    />
                    <div className='flex flex-col w-[100%] gap-2 h-20 mb-10'>
                        <label>Currency:</label>
                        <select
                            className='h-full w-[90%] bg-gray-600 outline-red-800 p-2'
                            name="currency"
                            value={productDetails.currency}
                            onChange={handleInputChange}
                        >
                            <option value="USD">Dollar</option>
                            <option value="INR">Rupees</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-col w-[100%] gap-2 h-20 mt-20'>
                    <label>Image:</label>
                    <input
                        className='h-full bg-gray-600 outline-red-800 p-2'
                        type="file"
                        name="image"
                        onChange={handleImageChange}
                    />
                </div>
                <button type="submit" className='bg-gray-800 w-[60%] h-20 rounded-3xl text-2xl font-semibold'>Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
