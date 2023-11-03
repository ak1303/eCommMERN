import { useEffect } from "react";
//components
import Navbar from "./Navbar";
import Banners from "./Banners";
import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productAction";
import {useDispatch, useSelector} from 'react-redux';
import Slide from './Slide';
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Component=styled(Box)`
   padding:10px 10px;
   background:#F2F2F2;
`;

const Home =()=> {

    const { products } = useSelector(state=>state.getProducts);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    
    return(
        <>
            <Navbar/>
            <Component>
                <Banners/>
                <MidSlide products={products} title="Deals of the Day" timer={true}/>
                <MidSection/>
                <Slide products={products} title="Discounts for You" timer={false}/>
                <Slide products={products} title="Suggesting Items" timer={false}/>
                <Slide products={products} title="Top Selection" timer={false}/>
                <Slide products={products} title="Recommended Items" timer={false}/>
                <Slide products={products} title="Trending Offers" timer={false}/>
                <Slide products={products} title="Season's top picks" timer={false}/>
                <Slide products={products} title="Top Deal on Accesories" timer={false}/>
            </Component>
        </>
    )
}
export default Home;