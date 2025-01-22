"use client"

import Image from "next/image";
import { Product } from "../../../types/products";
import { allProducts } from "@/sanity/lib/queries";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";


const Features=()=>{
  const [product,setProduct]=useState<Product[]>([]);
  useEffect(()=>{
    async function fetchProduct(){
      const fetchedProduct:Product[]= await client.fetch(allProducts)
      setProduct(fetchedProduct)
    }
    fetchProduct()

  },[])

  return(
    <div className="max-w-6xl mx-auto px-4 py-8 ">
      <div className="w-[80%] mx-auto">
      <h2 className="text-[42px] mt-24 py-5 text-center"> Api Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
      {
        product.map((product)=>{
          return(
            
              <div key={product._id} className="border rounded-lg  shadow-md p-4 hover:shadow-lg transition duration-200">
                
              {product.image && (
                <Image src={urlFor(product.image).url()}
                alt="pic" width={180} height={160} className="w-full h-48 object-cover rounded-md"/>
              )}
              <h1 className="text-[#FB2E86] py-2 text-[18px] text-center font-bold">{product.name}</h1>

              <p className="text-[#151875] text-[18px] text-center">
             {product.price}
            </p>

        
              </div>
          
            
          )
        })
      }
      </div>
      </div>
    </div>
  )

}
export default Features
