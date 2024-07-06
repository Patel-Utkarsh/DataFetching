
"use client"
import { FaShoppingCart } from "react-icons/fa";
import logo from "../images/logo.png"
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function Nav() {
    const {cart} = useSelector((state)=>state.cart);

    return (
        <nav className="bg-[#28cbef] h-[70px]">
            <div className="w-[70%] mx-auto flex justify-between">
                <Link href="/">
                    <Image className="pt-[5px] h-[60px] w-[60px]" src={logo} alt="" />
                </Link>
                
                <Link href="/cart">
                    <button className="pt-[10px] relative">
                        <FaShoppingCart className="h-[50px] text-yellow-400" size={30}/>
                        {cart.length > 0 && (
                            <GoDotFill className="text-yellow-400 absolute top-3 left-[15px]" />
                        )}
                    </button>
                </Link>
            </div>
        </nav>
    );
}