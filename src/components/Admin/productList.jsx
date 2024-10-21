import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ProductList = ( {products}) => {
    if (products === null || products.length === 0) {
        return <div className='text-white text-xl'>There is nothing</div>;
    } else {
        return (
            <div className='text-white text-xl h-full w-full text-wrap p-5 flex flex-col'>
                <h1>Product List</h1>
                <div>
                        {products.map(({id,name,price}) => 
                            <div key={id} className='flex flex-col gap-2 mb-10 border-2 border-slate-500 p-5'>
                                <div className='flex flex-col'><h3>ID</h3>
                                <ul><li>{id}</li></ul></div>
                                <div className='flex flex-col'><span>Name</span>
                                <span>{name}</span></div>
                                <div className='flex flex-col'><span>Price</span>
                                <span>{price}</span></div>
                            </div>
                            )}
                </div>
            </div>
        );
    }
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        })
    ).isRequired,
};

const ProductListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const storedProducts = localStorage.getItem('products');
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts));
        }
    }, []);

    return <ProductList products={products} />;
};

export default ProductListContainer;