import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartShow } from '../slices/GeneralSlice';

export default function Navbar() {
    const dispatch = useDispatch();
    const totalItem = useSelector(state => state.CartSlice.totalQuantity);

    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
            <h1 className="text-2xl font-bold">ReduxCart</h1>
            <button 
                onClick={() => dispatch(setCartShow())} 
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition duration-300"
            >
                Cart: {totalItem} 
            </button>
        </nav>
    );
}
