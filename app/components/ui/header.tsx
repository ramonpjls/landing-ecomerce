'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './button'
import { CiMenuBurger } from 'react-icons/ci'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { CartProvider, useCart } from '../../contexts/cart-context'
import { CartModal } from '../cart-modal'


const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    return (
        <div className=" mx-auto sm:px-6 lg:px-8 bg-white">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <Button className="md:hidden text-[#7AA65A] hover:text-green-600">
                        <CiMenuBurger className="text-5xl" />
                    </Button>
                </div>
                <nav className="hidden md:flex space-x-8 text-[#7AA65A] hover:text-green-600 text-lg">
                    <Link href="/" className="font-bold border-b-[5px] border-[#7AA65A] w-[70px] text-center">
                        Home
                    </Link>
                    <Link href="" className='hover:border-[#7AA65A] hover:border-b-[5px] w-[70px] text-center' >
                        Shop
                    </Link>
                    <Link href="" className='hover:border-[#7AA65A] hover:border-b-[5px]  w-[70px] text-center' >
                        About
                    </Link>
                    <Link href="" className='hover:border-[#7AA65A] hover:border-b-[5px]  w-[70px] text-center' >
                        Contact
                    </Link>
                </nav>
                <CartIcon onOpenCart={() => setIsCartOpen(true)} />
            </div>
            <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
    )
}

function CartIcon({ onOpenCart }: { onOpenCart: () => void }) {
    const { cartCount } = useCart()
    return (
        <div>
            <Button className="text-[#7AA65A] hover:text-green-600" onClick={onOpenCart}>
                <MdOutlineShoppingBag className="text-5xl" />
            </Button>
            {cartCount > 0 && (
                <span className=" absolute top-7 right-7  bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                </span>
            )}
        </div>
    )
}

export default Header