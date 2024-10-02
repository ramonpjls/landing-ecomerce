'use client'

import React, { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'

interface CartItem {
    id: number
    name: string
    price: string
    image: string
    quantity: number
}

interface CartContextType {
    cartItems: CartItem[]
    addToCart: (item: CartItem) => void
    cartCount: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const addToCart = (item: CartItem) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((i) => i.id === item.id)
            if (existingItem) {
                return prevItems.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                )
            }
            return [...prevItems, { ...item, quantity: 1 }]
        })
        console.log(item)
        toast.success(`${item.name} added to cart!`)
    }

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

    return (
        <CartContext.Provider value={{ cartItems, addToCart, cartCount }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }
    return context
}