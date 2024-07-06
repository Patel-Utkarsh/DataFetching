"use client"
import React, { useEffect, useState } from 'react'
import { setProducts } from '@/lib/features/products';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

const Sidebar = () => {
    const dispatch = useDispatch();
    const [search,setSearch] = useState('');
    const [categories,setCategories] = useState({});
    const [searchList,setSearchList] = useState([]);
    const [filterData,setFilterData] = useState(false);
    const {products} = useSelector((state)=>state.products);

    function searchData() {
        const newArr = [...products].filter((item)=> item.title.toLowerCase().includes(search.toLowerCase()));
        setSearchList(newArr);

    }

    function ctgies() {
        let categories = {};

        for(let item of products) {
            if(categories[item.category]) {
                categories[item.category]++;
            }

            else {
                categories[item.category] = 1;

            }
        }
        setCategories(categories);

    }

    useEffect(()=>{
        //Debouncing
        const timeout = setTimeout(()=>{
            searchData();
            console.log('api called')


        },1000)

        return () => {
            clearTimeout(timeout);
        }

    },[search])



    useEffect(()=>{
        ctgies();


    },[products])

    function handleFilter(e) {
        const {name,checked,value} = e.target;
        setFilterData(checked ? name : null);
      
    }
    function setDataFiltering() {
        console.log('hii')
        if(!filterData) return;
        const newArr = [...products].filter((item) => item.category === filterData);
        dispatch(setProducts(newArr));


    }

    function sorting(num) {
        const newArr = num === 1 ?  [...products].sort((a,b) => {
            return a.price - b.price
        }) :  [...products].sort((a,b) => {
            return b.price - a.price
        }) ;
        dispatch(setProducts(newArr));
    }



  return (
    <div className={`border-[#e8e8e8] border-[2px] rounded-lg p-5 mt-10 ml-5 bg-white max-w-[25%] h-[500px] overflow-auto ${products.length >=1  ? 'visible' : 'invisible'}`}>
        <div className='flex flex-col gap-3' >
            <p className='font-bold text-xl'>Search</p>
            <input type="text" onChange={(e)=>setSearch(e.target.value)} className='bg-gray-200 p-2' placeholder='Search' />
            {
                searchList.length >= 1 && search !== '' &&
                <div className='flex flex-col gap-5 max-h-[200px] overflow-auto'>
                    {
                        searchList.map(({thumbnail,title})=>(
                            
                            <div className='flex gap-3 cursor-pointer'>
                                <Image  className='h-[30px] w-[30px]' src={thumbnail} alt='image' height={50} width={50}/>
                                <p className='text-sm mt-1'>{title}</p>

                            </div>

                        ))
                    }

                </div>
            }

            <div className='bg-[#e8e8e8] h-[2px] w-[100%] mx-auto'></div>

            <div>
                <p className='font-bold text-xl'>Sort By</p>
                <select className='p-2 border-2 border-black mt-2 px-5' onChange={(e)=>sorting(parseInt(e.target.value))}>
                    <option value="" className='font-normal'>Select</option>
                    <option value="1">Price Low to High</option>
                    <option value="2">Price High to low</option>
                </select>
            </div>

            <div className='bg-[#e8e8e8] h-[2px] w-[100%] mx-auto'></div>


            <div>
                <p className='font-bold text-xl'>Categories</p>
                {
                    

                    <div className='flex flex-col mt-3 gap-2'>
                        {
                            Object.entries(categories).map(([key,value])=>(
                                <div className='flex justify-between'>
                                    <div className='flex gap-1'>
                                        <input type='checkbox' name={key} onChange={(e)=> handleFilter(e)}  checked={key === filterData}/>
                                        <p className='font-medium' >{key}</p>
                                    </div>
                                    
                                    <p>{value}</p>
                                </div>

                            ))
                        }
                    </div>
                }
            </div>

            <div className='bg-[#e8e8e8] h-[2px] w-[100%] mx-auto'></div>
            

            <div className='flex gap-3 w-[80%] mx-auto'>
                <button onClick={()=>setDataFiltering()} className='bg-[#543ee8] px-5 py-2  rounded-md text-white'>Filter</button>
                <button className='bg-[#ffcd1f] px-5 py-2 rounded-md text-black'>Reset</button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar