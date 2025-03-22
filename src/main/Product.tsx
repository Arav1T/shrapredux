import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { cartAction } from '../slices/CartSlice';

export default function Product() {
    const dispatch = useDispatch();
    const DUMMY_PRODUCTS = [
        {
          id: nanoid(),
          price: 6,
          title: 'My First Book',
          description: 'The first book I ever wrote',
        },
        {
          id: nanoid(),
          price: 5,
          title: 'My Second Book',
          description: 'The second book I ever wrote',
        },
    ];

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold text-center mb-6">Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {DUMMY_PRODUCTS.map(data => (
                    <div key={data.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
                        <div>
                            <h3 className="text-lg font-semibold">{data.title}</h3>
                            <p className="text-gray-700 text-lg font-medium">$ {data.price}</p>
                        </div>
                        <div className="text-gray-600 mt-2">{data.description}</div>
                        <button 
                            onClick={() => dispatch(cartAction.addItemToCart(data))} 
                            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
                        >
                            Add To Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}