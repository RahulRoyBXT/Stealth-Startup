import { useEffect, useState } from "react";

const ModifyProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
    }, []);

    const handleDelete = ()=>{
        const updatedProducts = products.filter(product => product.id === products.id);
        console.log(updatedProducts);
        setProducts(updatedProducts);
        localStorage.setItem('products', JSON.stringify(updatedProducts));
    }
    return<>
        <h1 className="text-white"> Lets see</h1>
        <button className="bg-white" type="submit" onClick={handleDelete} >Delete </button>
    </>
};

export default ModifyProduct;