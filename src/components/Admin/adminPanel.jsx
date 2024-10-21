import {Link } from 'react-router-dom';
import { FaArrowRightFromBracket } from "react-icons/fa6";

const AdminPanel = () => {
    return (
            <div className="text-white text-2xl h-full p-8">
                <nav>
                    <ul className="flex flex-col gap-8">
                        <span className="text-md opacity-60 leading-5">Welcome To</span>
                        <span className="text-4xl font-semibold opacity-80 mb-5"> Admin Panel</span>
                        <li>
                            <Link to="/add-product" className="flex flex-row justify-between">
                                Add Product
                                <FaArrowRightFromBracket className="text-3xl" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/modify-product" className="flex flex-row justify-between">
                                Modify Product
                                <FaArrowRightFromBracket className="text-3xl" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/product-list" className="flex flex-row justify-between">
                                Product List
                                <FaArrowRightFromBracket className="text-3xl" />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
    );
};

export default AdminPanel;
