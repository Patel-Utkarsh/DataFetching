"use client"
import Loader from "@/Components/Loader";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchData} from "../utils/apiConnector"
import { setProducts } from "@/lib/features/products";
import { setLoader } from "@/lib/features/loader";
import ProductCards from "@/Components/ProductCards";
import Sidebar from "@/Components/Sidebar";

export default function Home() {
  const dispatch = useDispatch();

  const {cart} = useSelector((state) => state.cart);
  const {products} = useSelector((state)=>state.products);
  const {loader} = useSelector((state)=>state.loader);
  console.log(products)


  

  async function getData() {
    dispatch(setLoader(true));
    const data = await fetchData();
    dispatch(setProducts(data.products));
    dispatch(setLoader(false));


  }

  useEffect(()=>{
    getData();


  },[]);

  if(loader) {
    return <Loader></Loader>
  }



  
  return (
    <div className="bg-[#faf4fe] flex justify-around">
      <Sidebar/>
      <div className="text-black  grid grid-cols-3 gap-5 w-[70%] mx-auto pt-10 pb-10">
       
        {
          products.map((item,index)=>(
            <div className="">
                           <ProductCards item={item} index={index}/>

            
            </div>
            

          ))
        }

      </div>
      
    </div>
   
  );
}
