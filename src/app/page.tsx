import Image from "next/image";
import Hero from "./Components/Hero";
import Featured from "./Components/Featured";
import Unique from "./Components/Unique";
import Trending from "./Components/Trending";
import Apidata from "./Components/Apidata"
import Discount from "./Components/Discount";
import Categories from "./Components/Categories";
import Blog from "./Components/Blog";


export default function Home() {
  return (
    <>
    <Hero/>
    <Apidata/>
    <Featured/>
    <Unique/>
    <Trending/>
    <Discount/>
    <Categories/>
    <Blog/>
    </>
  )

}
   
        