import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../slices/CartSlice';

export default function Cart() {
    const items = useSelector(state => state.CartSlice.items);
    const dispatch = useDispatch();

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h3 className="text-xl font-bold mb-4">Your Shopping Cart</h3>
            {items.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                items.map(item => (
                    <div key={item.id} className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-between items-center">
                        <div>
                            <h4 className="text-lg font-semibold">{item.title}</h4>
                            <p className="text-gray-700">$
                                <span className="font-bold">{item.totalPrice}</span>
                                (<span className="text-sm text-gray-500">$ {item.price}/item</span>)
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="text-lg font-medium">x<span>{item.quantity}</span></p>
                            <button 
                                onClick={() => dispatch(cartAction.removeItemFromCart(item.id))} 
                                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                            >
                                -
                            </button>
                            <button 
                                onClick={() => dispatch(cartAction.addItemToCart(item))} 
                                className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition"
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}