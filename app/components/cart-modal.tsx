import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useCart } from '../contexts/cart-context'
import { Button } from './ui/button'

interface CartModalProps {
    isOpen: boolean
    onClose: () => void
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
    const { cartItems } = useCart()

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4 border-b-2">
                    <h2 className="text-2xl font-bold text-green-700">Your Cart</h2>
                    <Button onClick={onClose} className="text-red-300 hover:text-red-700">
                        <AiFillCloseCircle size={24} />
                    </Button>
                </div>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex justify-between items-center py-2 border-b">
                                <div>
                                    <p className="font-bold text-black">{item.name}</p>
                                    <p className="text-sm text-black">Quantity: {item.quantity}</p>
                                </div>
                                <p className="font-bold text-black">{(item.price)}</p>
                            </div>
                        ))}
                        <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
                            Checkout
                        </Button>
                    </>
                )}
            </div>
        </div>
    )
}